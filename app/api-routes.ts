import ky, { HTTPError } from "ky";
import { getAuthState } from "./providers/auth-state";

function unslashStart(str: string) {
  return str.replace(/^\/+/, "");
}

function unslashEnd(str: string) {
  return str.replace(/\/+$/, "");
}

export const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_URL as any;

if (!API_BASE_URL) {
  throw new Error("Env variable `NEXT_PUBLIC_API_URL` not set");
}

export class ApiReplyError extends HTTPError {
  constructor(
    parent: HTTPError,
    public readonly errorMessage: string,
    public readonly errorCode: string
  ) {
    super(parent.response, parent.request, parent.options);
    this.name = "ApiReplyError";
    this.message = errorMessage;
  }

  public static check(error: any): error is ApiReplyError {
    return error instanceof ApiReplyError;
  }

  public static userMessage(error: any) {
    if (error instanceof ApiReplyError) {
      return error.errorMessage;
    }
    return "An error occured";
  }
}

export const apiConn = ky.extend({
  prefixUrl: unslashEnd(API_BASE_URL),
  timeout: false,
  hooks: {
    beforeRequest: [
      (request) => {
        let { isLoggedIn, token } = getAuthState();
        if (isLoggedIn) {
          request.headers.set("Authorization", `Bearer: ${token}`);
        }
        return request;
      },
    ],
    beforeError: [
      async (error) => {
        const { response } = error;

        let isApiReplyError = false;
        let reply: any = null;

        if (response && response.body) {
          reply = await response.json();
          if (reply["isApiReplyError"] === true) {
            isApiReplyError = true;
          }
        }

        if (isApiReplyError) {
          const { errorMessage, errorCode } = reply!;
          return new ApiReplyError(error, errorMessage, errorCode);
        }

        return error;
      },
    ],
  },
});

if (typeof window !== "undefined") {
  // @ts-ignore
  window.apiConn = apiConn;
}

function decl<
  UrlT extends string | ((...args: UrlArgs) => string),
  UrlArgs extends any[],
  FuncArgs extends any[],
  FuncRet
>({
  url,
  invoke,
}: {
  url: UrlT;
  invoke: (url: UrlT, ...args: FuncArgs) => FuncRet;
}) {
  return async (...args: FuncArgs): Promise<any> => {
    try {
      return await invoke(url, ...args);
    } catch (e) {
      console.log("API-CALL-ERR: Request failed", e);
      throw e;
    }
  };
}

function toUrl<UrlT extends string | ((...args: any) => string)>(
  url: UrlT,
  args: MaybeParameters<UrlT>
) {
  let urlString = typeof url === "string" ? url : url(...args);
  urlString = unslashStart(urlString);
  return urlString;
}

type MaybeParameters<T> = T extends (...args: infer R) => any ? R : [];

function jsonDecl<UrlT extends string | ((...args: any) => string)>(
  url: UrlT,
  opts?: { method?: string }
) {
  return decl({
    url,
    invoke: (url, ...args: MaybeParameters<UrlT>) => {
      return apiConn(toUrl(url, args), {
        method: opts?.method ?? "GET",
      }).json<any>();
    },
  });
}

function payloadDecl<UrlT extends string | ((...args: any) => string)>(
  url: UrlT,
  opts?: { method?: string }
) {
  return decl({
    url,
    invoke: (url, payload: any, ...args: MaybeParameters<UrlT>) => {
      return apiConn(toUrl(url, args), {
        method: opts?.method ?? "POST",
        json: payload,
      }).json<any>();
    },
  });
}

function uploadDecl<UrlT extends string | ((...args: any) => string)>(
  url: UrlT,
  opts?: {
    method?: string;
    key?: string;
  }
) {
  const key = opts?.key ?? "file";

  return decl({
    url,
    invoke: (url, file: File, ...args: MaybeParameters<UrlT>) => {
      const formData = new FormData();
      formData.set(key, file);

      return apiConn(toUrl(url, args), {
        method: opts?.method ?? "POST",
        body: formData,
      }).json<any>();
    },
  });
}

/* ------------------------ */

function wq<Q = string | Record<string, any> | URLSearchParams>(
  template: TemplateStringsArray
) {
  let url = template.join("");
  return (queryParams?: Q) => {
    let query = "";

    if (queryParams) {
      if (typeof queryParams === "string") {
        query = "?" + queryParams;
      } else {
        const urlSearchParams =
          queryParams instanceof URLSearchParams
            ? queryParams
            : new URLSearchParams(queryParams);

        query = "?" + urlSearchParams.toString();
      }
    }

    return url + query;
  };
}

/* ------------------------ */

// prettier-ignore
export const apiRoutes = {

  /* ========================== */
  /* ========== Auth ========== */
  /* ========================== */
  login: payloadDecl(`/api/auth/login`),
  register: payloadDecl(`/api/auth/register`),
  forgotPassword: payloadDecl(`/api/auth/forgot-password`),
  resetPassword: payloadDecl(`/api/auth/reset-password`),
  updatePassword: payloadDecl(`/api/auth/update-password`, { method: "PATCH" }),

  /* ========================== */
  /* =========== Me =========== */
  /* ========================== */
  getMe: jsonDecl(`/api/me`),
  updateProfile: payloadDecl(`/api/me/profile`, { method: "PATCH" }),
  contactUs: payloadDecl(`/api/me/send-contact-message`, { method: "POST" }),

  /* ========================== */
  /* =========== Me =========== */
  /* ========================== */
  getNotifications: jsonDecl(`/api/notif`),
  markNotificationsRead: payloadDecl(`/api/notif/mark-read`, { method: 'PATCH' }),

  /* ========================= */
  /* ======= Community ======= */
  /* ========================= */
  getCommunity: jsonDecl(wq`/api/community`),
  getUser: jsonDecl((userId: string) => `/api/user/${userId}`),
  addFriend: payloadDecl(`/api/add-friend`),
  isFriend: payloadDecl(`/api/add-friend?checkOnly=true`),
  removeFriend: payloadDecl(`/api/remove-friend`, { method: "DELETE" }),

  /* ========================= */
  /* ======= Favourites ====== */
  /* ========================= */
  getPostingFavourites: jsonDecl(`/api/posting-favourites`),
  markPostingFavourite: payloadDecl(`/api/mark-posting-favourite`, { method: "PATCH" }),

  /* ========================== */
  /* ======== Postings ======== */
  /* ========================== */
  // Queries
  searchJobs: jsonDecl(wq`/api/job/search`),
  getJob: jsonDecl((jobId: string) => `/api/job/${jobId}`),
  getApplication: jsonDecl((applId: string) => `/api/job/application/${applId}`),
  getMyApplications: jsonDecl(`/api/employee/my-applications`),
  getMyPostings: jsonDecl(`/api/employer/my-postings`),
  getJobApplicants: jsonDecl((jobId: string) => `/api/job/${jobId}/applicants`),
  isPostingApplied: jsonDecl((postingId: string) => `/api/is-posting-applied/${postingId}`),
  isEmployeeInvited: payloadDecl(`/api/is-employee-invited`),
  getCandidatePostingApplication: jsonDecl((postingId: string) => `/api/candidate-posting-application/${postingId}`),

  // Mutations
  postJob: payloadDecl(`/api/job/post`),
  deleteJob: payloadDecl((jobId: string) => `/api/job/${jobId}`, { method: "DELETE" }),
  applyToJob: payloadDecl(`/api/job/apply`),
  updateJobStatus: payloadDecl((jobId: string) => `/api/job/${jobId}/update-status`, { method: "PATCH" }),
  updateApplDecision: payloadDecl((applId: string) => `/api/job/application/${applId}/update-decision`, { method: "PATCH" }),
  markApplInterested: payloadDecl((applId: string) => `/api/job/application/${applId}/mark-interested`, { method: "PATCH" }),
  inviteEmployee: payloadDecl(`/api/invite-employee`),

  /* ========================== */
  /* ========= Uploads ======== */
  /* ========================== */
  uploadImage: uploadDecl(`/api/upload/image`, { key: "image" }),

  /* ========================== */
  /* ========== Chats ========= */
  /* ========================== */
  // getChatMessages: jsonDecl((receiverId: string) => `/api/chat/messages/${receiverId}`),
  // startConversation: payloadDecl(`/api/chat/start-conversation`),

  getConversations: jsonDecl(`/api/chat/conversations`),
  resumeConversationSingle: payloadDecl(`/api/chat/resume-conv-single`),
  updateMessage: payloadDecl(`/api/chat/update-message`, { method: "PATCH" }),
  deleteMessage: payloadDecl(`/api/chat/delete-message`, { method: "DELETE" }),

} as const;

if (typeof window !== "undefined") {
  // @ts-ignore
  window.apiRoutes = apiRoutes;
}
