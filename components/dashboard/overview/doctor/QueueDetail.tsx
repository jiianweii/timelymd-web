import { Button, Table } from "@mantine/core";
import CurrentQueue from "./CurrentQueue";
import CustomCard from "@/components/common/CustomCard";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export default function QueueDetail() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));
  return (
    <CustomCard className="col-span-4 row-span-5 px-3 py-4 flex flex-col shadow-2xs gap-y-3">
      <div className="flex justify-between">
        <h1 className="font-semibold">Queue Details</h1>
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
