import { PropsWithChildren, useState } from "react";
import { Button } from "~/components/Button/Button";

import {
  Card,
  CardBody,
  CardFooter,
  Dialog,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { IconX } from "@tabler/icons-react";

export function PostingDetailModal({
  posting,
  children,
}: {
  posting: any;
} & PropsWithChildren) {
  let [open, setOpen] = useState(false);
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
                <strong>{posting?.title}</strong>
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

            <div className="mb-4">
              <p className="text-lg font-bold">Description</p>
              <p className="text-lg mt-1">{posting.description}</p>
            </div>
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
