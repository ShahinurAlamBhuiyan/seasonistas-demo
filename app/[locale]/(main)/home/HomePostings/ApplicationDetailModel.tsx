import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "~/components/Button/Button";

import {
  Card,
  CardBody,
  CardFooter,
  Dialog,
  IconButton,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { IconX } from "@tabler/icons-react";
import { apiRoutes } from "~/app/api-routes";

export function ApplicationDetailModel({
  posting,
  children,
}: {
  posting: any;
} & PropsWithChildren) {
  let [open, setOpen] = useState(false);
  let [loading, setLoading] = useState(false);
  let [application, setApplication] = useState<any>(null);

  const postingId = posting?.["_id"];

  useEffect(() => {
    setLoading(true);
    apiRoutes
      .getCandidatePostingApplication(postingId)
      .then((application) => {
        setApplication(application);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postingId]);

  return (
    <>
      <div className="contents" onClick={() => setOpen(true)}>
        {children}
      </div>

      <Dialog
        size="xl"
        open={open}
        handler={setOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[72rem] max-h-[95vh] overflow-scroll">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Typography variant="h4" color="blue-gray">
                Application status for <strong>{posting?.title}</strong>
              </Typography>
              <IconButton
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={() => setOpen(false)}
              >
                <IconX />
              </IconButton>
            </div>

            {loading ? (
              <div className="flex justify-center py-5">
                <Spinner className="size-20" />
              </div>
            ) : (
              <>
                <div className="text-lg">
                  <span className="font-bold mr-1">Status:</span>
                  {application?.decision}
                </div>
                <h1 className="font-bold text-xl">Questions and answers</h1>
                <div className="space-y-4">
                  {application?.answers.map(({ question, answer }, index) => (
                    <div key={question}>
                      <p className="text-lg font-bold">
                        {index + 1}. {question}
                      </p>
                      <p className="text-lg">{answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => setOpen(false)} fullWidth>
              Close
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
