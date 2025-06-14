import { TitleMark } from "~/components/decorations";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { repeatNode } from "~/app/utils/markup";

function TeamMemberCell() {
  return (
    <Card className="" shadow={false}>
      <CardHeader floated={false}>
        <img src="/profile_empty_gradient.png" />
      </CardHeader>
      <CardBody className="text-left">
        <Typography variant="h6" color="blue-gray">
          Yiannis Andrew
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Senior Software Engineer
        </Typography>
      </CardBody>
    </Card>
  );
}

export function OurTeam() {
  return (
    <section className="app-container w-full pb-14">
      <h1 className="text-4xl text-center mt-6 mb-14">
        <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
          Our
          <TitleMark className="absolute w-32 top-full -left-5 dd -translate-y-2.5" />
        </span>
        <span className="font-normal">Team</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {repeatNode(12, (index) => (
          <TeamMemberCell key={index} />
        ))}
      </div>
    </section>
  );
}
