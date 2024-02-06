import CustomersTableCard from "./CustomersTableCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CustomersTable = ({ clients }) => {
  const pendingClients = clients.filter(
    (client) => client.status === "pending"
  );

  return (
    <div className="w-full h-[400px] mt-4">
      <Table className="w-full border">
        <TableCaption className="text-lg">
          {pendingClients.length > 0
            ? pendingClients.length + " list of Reservations."
            : "No list of Reservations"}
        </TableCaption>
        <TableRow className="lg:font-bold text-xs lg:text-sm uppercase">
          <TableHead className="text-center">No.</TableHead>
          <TableHead className="text-center">
            Client's Name
          </TableHead>
          <TableHead className="text-center">Facility</TableHead>
          <TableHead className="text-center">
            Booking Date
          </TableHead>
          <TableHead className="text-center">
            Start Time
          </TableHead>
          <TableHead className="text-center">End Time</TableHead>
          <TableHead className="text-center">Agency</TableHead>
          <TableHead className="text-center">Booking Status</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
        <TableBody>
          {pendingClients.map((client, index) => (
            <CustomersTableCard
              key={client._id}
              client={client}
              index={index}
            />
          ))}
          {/* Add more data rows here */}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersTable;
