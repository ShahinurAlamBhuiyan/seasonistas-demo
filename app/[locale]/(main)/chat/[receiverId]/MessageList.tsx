import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";

import { Avatar } from "@material-tailwind/react";
import { RiMore2Line } from "react-icons/ri";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

import { useAuthState } from "~/app/providers/auth-state";
import { Button } from "~/components/Button/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IconTrash } from "@tabler/icons-react";
import { apiRoutes } from "~/app/api-routes";
import { useMessageCtrl } from "./msg-ctrl";

function Message({
  side,
  user,
  message,
  allowModifications = false,
}: {
  side: "left" | "right";
  user: any;
  message: any;
  allowModifications?: boolean;
}) {
  const content = message.content;
  const date = new Date(message["sentAt"]);

  const [finalMessage, setFinalMessage] = useState(content);

  useEffect(() => {
    setFinalMessage(content);
  }, [content, setFinalMessage]);

  const ctrl = useMessageCtrl();

  return (
    <div
      className={clsx(
        "flex items-start gap-2.5",
        "max-w-sm",
        side === "right" && "self-end flex-row-reverse"
      )}
    >
      <Avatar
        size="xs"
        className="object-center"
        src="/profile_empty_gradient.png"
        alt="avatar"
      />
      <div className="flex flex-col w-full max-w-[320px] break-words leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-900">
            {user?.fullName}
          </span>
          <span className="text-sm font-normal text-gray-500">
            {format(date, "h:mm a")}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900">
          {finalMessage}
        </p>
        <div className="flex justify-between">
          <span className="text-sm font-normal text-gray-500">Delivered</span>
          {allowModifications && (
            <Menu>
              <MenuHandler>
                <button>
                  <RiMore2Line />
                </button>
              </MenuHandler>
              <MenuList>
                <MessageEditBox
                  messageId={message["_id"]}
                  initialContent={message.content}
                  onEditComplete={(newMessage) => {
                    setFinalMessage(newMessage);
                  }}
                />
                {/* ======= */}
                <MessageDeleteBox
                  messageId={message["_id"]}
                  onDelete={() => {
                    ctrl.removeMessage(message["_id"]);
                  }}
                />
              </MenuList>
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
}

function MessageEditBox({
  messageId,
  initialContent,
  onEditComplete,
}: {
  messageId: string;
  initialContent: string;
  onEditComplete?: (content: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      content: initialContent,
    },
  });

  useEffect(() => {
    setValue("content", initialContent);
  }, [initialContent, open, setValue]);

  async function onSubmit(values: any) {
    let { content } = values;

    apiRoutes
      .updateMessage({
        messageId,
        content,
      })
      .then(() => {
        onEditComplete?.(content);
        toast.success("Message updated successfully");
      })
      .catch((err) => {
        toast.error("Failed to update message");
        console.log(err);
      })
      .finally(() => {
        setOpen(false);
      });
  }

  return (
    <>
      <MenuItem
        onClick={setOpen as any}
        className="flex justify-between items-center"
      >
        Edit
      </MenuItem>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Edit Message
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Message
              </Typography>
              <Input {...register("content")} label="Message" size="lg" />
            </CardBody>
            <CardFooter className="pt-0">
              <Button fullWidth>Update Message</Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}

export function MessageDeleteBox({
  messageId,
  onDelete,
}: {
  messageId: string;
  onDelete?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  function onConfirm() {
    apiRoutes
      .deleteMessage({
        messageId,
      })
      .then(() => {
        onDelete?.();
        toast.success("Message deleted successfully");
      })
      .catch((err) => {
        toast.error("Failed to delete message");
        console.log(err);
      })
      .finally(() => {
        setOpen(false);
      });
  }

  return (
    <>
      <MenuItem
        onClick={setOpen as any}
        className="flex justify-between items-center text-red-500"
      >
        Delete
      </MenuItem>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="red">
              Confirm Delete
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Are you sure you want to delete this message
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={onConfirm} theme="red" fullWidth>
              Delete Message
              <IconTrash />
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

function useChatScroll<T>(dep: T) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);

  return ref;
}

export function MessageList({
  messages,
  conversation,
}: {
  messages: any[];
  conversation: any;
}) {
  const ref = useChatScroll(messages);
  const { userId: currentUserId } = useAuthState();
  const participants = conversation["participants"];

  return (
    <div
      ref={ref}
      className="h-full max-h-full overflow-y-auto pt-20 pb-24 px-8"
    >
      <div
        className={clsx(
          "w-full min-h-full flex flex-col gap-y-4",
          "justify-end items-start"
        )}
      >
        {messages.map((message) => {
          const messageSenderId = message["senderId"];
          const messageSender = participants.find(
            (p) => p["_id"] === messageSenderId
          );

          const isCurrentUser = messageSenderId === currentUserId;

          return (
            <Message
              key={message["_id"]}
              side={isCurrentUser ? "right" : "left"}
              user={messageSender}
              message={message}
              allowModifications={isCurrentUser}
            />
          );
        })}
      </div>
    </div>
  );
}
