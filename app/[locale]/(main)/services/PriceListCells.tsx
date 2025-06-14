import { Typography } from "@material-tailwind/react";
import {
  IconFileInfo,
  IconMessage2Share,
  IconBoxMultiple5,
  IconWritingSign,
} from "@tabler/icons-react";
import { useViewMode } from "~/app/providers/auth-state";
import { Button } from "~/components/Button/Button";

export function Cell({ title, Icon }: { title: string; Icon: any }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <Icon size={60} />
      <Typography
        variant="h3"
        color="black"
        className="mb-6 mt-3 font-medium leading-[1.5]"
      >
        {title}
      </Typography>
      <Button className="mx-auto text-xl" fullRounded>
        View Price List
      </Button>
    </div>
  );
}

export function PriceListCells() {
  const viewMode = useViewMode();
  return (
    <section className="flex mt-16 gap-x-4 gap-y-20 flex-col md:flex-row">
      {viewMode === "employer" ? (
        <>
          <Cell title="CV Management" Icon={IconFileInfo} />
          <Cell title="Job Postings Management" Icon={IconMessage2Share} />
        </>
      ) : (
        <>
          <Cell title="CV Improvement" Icon={IconBoxMultiple5} />
          <Cell title="CV Creation" Icon={IconWritingSign} />
        </>
      )}
    </section>
  );
}
