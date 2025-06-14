import { useState } from "react";
import toast from "react-hot-toast";
import { apiRoutes } from "~/app/api-routes";

export function useInterestMarker(application: any) {
  const [marking, setMarking] = useState(false);

  async function mark(isInterested: boolean) {
    setMarking(true);
    try {
      const responsePromise = apiRoutes.markApplInterested(
        { isInterested },
        application._id
      );
      let result = await toast.promise(responsePromise, {
        loading: "Marking...",
        success:
          "Marked " +
          (isInterested ? "interested" : "not interested") +
          " successfully",
        error: "Error occured",
      });
      console.log(result);
    } finally {
      setMarking(false);
    }
  }

  return { mark, marking };
}
