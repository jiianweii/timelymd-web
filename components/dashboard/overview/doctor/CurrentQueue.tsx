import CustomCard from "@/components/common/CustomCard";
import { Button } from "@mantine/core";

interface CurrentQueueItemProps {
  title: string;
  value: string;
}

function CurrentQueueItem({ title, value }: CurrentQueueItemProps) {
  return (
    <div>
      <h1 className="text-[14px] font-semibold text-gray-500">{title}</h1>
      <p className="text-[17px]">{value}</p>
    </div>
  );
}

export default function CurrentQueue() {
  return (
    <CustomCard className="w-full flex flex-col gap-y-4 p-4">
      <div className="grid grid-cols-5 auto-rows-auto gap-y-2">
        <CurrentQueueItem title="Name" value="Jian Wei" />
        <CurrentQueueItem title="Gender" value="Male" />
        <CurrentQueueItem title="Age" value="23" />
        <CurrentQueueItem title="Weight" value="68kg" />
        <CurrentQueueItem title="Temperature" value="37.8" />
        <CurrentQueueItem title="Type" value="High Fever" />
        <CurrentQueueItem
          title="Symptoms"
          value="Headache, Runny Nose, Muscle Ache"
        />
        <div className="col-span-3">
          <CurrentQueueItem
            title="Remarks"
            value="Had high fever for many days but no cure yet"
          />
        </div>
      </div>

      <div className="flex justify-end gap-x-4">
        <Button>More Information</Button>
        <Button>Diagnose</Button>
        <Button>Call Queue</Button>
      </div>
    </CustomCard>
  );
}
