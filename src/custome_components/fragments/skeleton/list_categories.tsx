import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

export default function ListCategoriesSkeleton() {
  return (
    <Table className="ms-7 h-52 w-[1000px] overflow-hidden">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="sticky top-0 border-b-2 border-light-gray-1 bg-dark">
        <TableRow>
          <TableHead className="w-[300px]">name</TableHead>
          <TableHead>market cap</TableHead>
          <TableHead>volume</TableHead>
          <TableHead className="text-nowrap text-center">
            market cap change
          </TableHead>
          <TableHead className="text-nowrap text-center">
            avg price change
          </TableHead>
          <TableHead className="text-nowrap text-right">volume</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="animate-pulse">
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
        <TableRow className="border-light-gray-1">
          <TableCell className="font-medium text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              Rehypothecated Crypto
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $98,276,806,486.16
            </span>
          </TableCell>
          <TableCell className="text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.38%
            </span>
          </TableCell>
          <TableCell className="text-center text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              1.46%
            </span>
          </TableCell>
          <TableCell className="text-right text-white-custome">
            <span className="rounded-md bg-light-gray-1 text-light-gray-1">
              $2,869,845,420.66
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
