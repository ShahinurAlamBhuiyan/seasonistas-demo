import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Button } from "~/components/Button/Button";

import {
  Card,
  CardBody,
  CardFooter,
  Dialog,
  IconButton,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { IconX } from "@tabler/icons-react";
import toast from "react-hot-toast";
import { produce } from "immer";

export function AskApplicationQuestionsModal({
  posting,
  onComplete,
  children,
}: {
  posting: any;
  onComplete: (answers: string[]) => Promise<void>;
} & PropsWithChildren) {
  let [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [loading, setLoading] = useState(false);

  const questions = useMemo(() => posting?.questions || [], [posting]);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    setAnswers(questions.map((_) => ""));
  }, [open, questions]);

  function handleAnswerChange(value: string, index: number) {
    setAnswers(
      produce((draft) => {
        draft[index] = value;
      })
    );
  }

  const onSubmit = () => {
    console.log(answers);

    if (answers.findIndex((a) => a.length == 0) !== -1) {
      toast.error("Answer all the questions");
      return;
    }

    setLoading(true);

    onComplete(answers)
      .then(() => {
        setOpen(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div onClick={handleOpen}>{children}</div>

      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[72rem] max-h-[95vh] overflow-scroll">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Typography variant="h4" color="blue-gray">
                Apply to job <strong>{posting?.title}</strong>
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

            <Typography variant="h5" color="blue-gray" className="-mb-4">
              Answer the following questions to apply
            </Typography>

            {questions.map((qs, index) => (
              <>
                <Typography className="-mb-2 mt-4" variant="h6">
                  {qs}
                </Typography>
                <Textarea
                  required
                  label="Anwser"
                  size="lg"
                  value={answers[index] || ""}
                  onChange={(event) =>
                    handleAnswerChange(event.target.value || "", index)
                  }
                />
              </>
            ))}
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={onSubmit} loading={loading} fullWidth>
              Send Application
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
