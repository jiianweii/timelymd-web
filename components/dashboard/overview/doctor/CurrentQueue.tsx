import { Avatar } from "@mantine/core";

export default function CurrentQueue() {
  return (
    <div className="size-full">
      {/* Profile | Name | DOB (convert to age beside in baracket) | Blood Type | Allergies
                    | Symptoms | Remarks
    */}
      <div className="flex items-center gap-x-2">
        <Avatar color="initials" radius="xl" size={30}>
          JW
        </Avatar>
        <h1 className="text-sm font-semibold">Jian Wei</h1>
      </div>
    </div>
  );
}
