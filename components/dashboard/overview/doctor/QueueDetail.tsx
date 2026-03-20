import { Avatar, Button, Table } from "@mantine/core";
import CurrentQueue from "./CurrentQueue";
import CustomCard from "@/components/common/CustomCard";

const elements = [
  {
    queue: 19,
    name: "Morgan",
    type: "Sore Throat",
    remarks: "Been coughing for weeks",
  },
  {
    queue: 20,
    name: "Wayne",
    type: "Fever",
    remarks: "Head hurts badly and want to faint",
  },
  {
    queue: 21,
    name: "Josefin",
    type: "Sprain",
    remarks: "Leg hurts, cant walk",
  },
  {
    queue: 22,
    name: "Zeon",
    type: "Backache",
    remarks: "Been aching for weeks",
  },
  {
    queue: 23,
    name: "Raphael",
    type: "Internal bleeding",
    remarks: "I pooped too hard that my intestine fell out",
  },
];

export default function QueueDetail() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.queue}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.remarks}</Table.Td>
    </Table.Tr>
  ));
  return (
    <CustomCard className="col-span-4 row-span-5 px-3 py-4 flex flex-col shadow-2xs gap-y-3">
      <div className="flex justify-between">
        <div className="flex gap-x-6 items-center">
          <div className="flex items-center gap-x-4">
            <h1 className="font-semibold">Current Queue: </h1>
            <Avatar color="initials" size={30}>
              18
            </Avatar>
          </div>
          <p>Progress: 10:02</p>
        </div>

        <Button>Next Queue</Button>
      </div>
      {/* Current Queue Details */}
      <div className="flex-2">
        <CurrentQueue />
      </div>
      {/* Upcoming Queue Table */}
      <div className="flex-2">
        <Table stickyHeader stickyHeaderOffset={60}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Queue</Table.Th>
              <Table.Th>Patient</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Remarks</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </CustomCard>
  );
}
