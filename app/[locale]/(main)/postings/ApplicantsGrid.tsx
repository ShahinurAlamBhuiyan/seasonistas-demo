import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useInterestMarker } from "./common";

export function ApplicantsGrid({ applications }: { applications: any[] }) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {applications.map((application) => (
        <ApplicantCell key={application._id} application={application} />
      ))}
    </div>
  );
}

function ApplicantCell({ application }: { application: any }) {
  const applicant = application["applicant"];
  const interestMarker = useInterestMarker(application);

  return (
    <Card className="border-2 border-teal-dark">
      <CardHeader floated={false}>
        <img src="/profile_empty_gradient.png" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" color="blue-gray">
          {applicant.fullName}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Senior Software Engineer at Apple | 2021 - 2024
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex items-center justify-center gap-x-2">
        <Tooltip content="Interested">
          <IconButton
            color="green"
            variant="text"
            disabled={interestMarker.marking}
            onClick={() => {
              interestMarker.mark(true);
            }}
          >
            <IconCheck />
          </IconButton>
        </Tooltip>
        <Tooltip content="Not Interested">
          <IconButton
            color="red"
            variant="text"
            disabled={interestMarker.marking}
            onClick={() => {
              interestMarker.mark(false);
            }}
          >
            <IconX />
          </IconButton>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
