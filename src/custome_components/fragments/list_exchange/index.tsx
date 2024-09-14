"use client";

import { DataMapExchange, GridApi, RowData } from "@/typs";
import { useRouter } from "next/navigation";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useMemo, useState } from "react";

export default function ListExchange({
  exchanges,
}: {
  exchanges: DataMapExchange[];
}) {
  const { push } = useRouter();

  const [colDefs, setColDefs] = useState([
    {
      field: "name",
      headerName: "name",
      headerTooltip: "name",
      flex: 1,
    },
    {
      field: "status",
      headerName: "status",
      headerTooltip: "status",
      minWidth: 80,
      maxWidth: 100,
      cellRenderer: StatusRender,
    },
  ]);

  const [rowData, setRowData] = useState<{ name: string; status: string }[]>([
    { name: "", status: "" },
  ]);

  useEffect(() => {
    const listCategory = exchanges.map((data) => ({
      name: data.name,
      status: data.is_active === 1 ? "active" : "non-active",
    }));
    setRowData(listCategory);
  }, [exchanges]);

  const handleDetailCategories = (event: {
    type: string;
    source: string;
    api: GridApi;
    context: undefined;
  }) => {
    const exchange: any = event.api.getSelectedRows();
    const getExchangeByName = exchanges.find(
      (data) => data.name === exchange[0].name,
    );
    push(`/exchange/${getExchangeByName?.name}?id=${getExchangeByName?.id}`);
  };

  return (
    <div
      id="myGrid"
      className="ag-theme-quartz table-categories h-[67vh] w-full bg-dark px-5 md:h-[86vh] md:w-[45vw] lg:h-[78vh] lg:w-[40vw]"
    >
      <AgGridReact<any>
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection="single"
        onSelectionChanged={(event) => handleDetailCategories(event)}
      />
    </div>
  );
}

function StatusRender(params: any) {
  return (
    <>
      {params.value === "active" ? (
        <p className="textc w-fit bg-green-custome px-4">Active</p>
      ) : (
        <p className="w-fit bg-red-500 px-4">Non-Active</p>
      )}
    </>
  );
}

// <div className="h-80 overflow-y-auto px-7">
//   <Table>
//     <TableCaption>A list of Exchanges</TableCaption>
//     <TableHeader className="border-b-2 border-light-gray-1 bg-dark">
//       <TableRow>
//         <TableHead className="w-[100px]">Name</TableHead>
//         <TableHead className="text-right">Status</TableHead>
//       </TableRow>
//     </TableHeader>
//     <TableBody>
//       {exchanges.map((data) => (
//         <TableRow
//           key={data.id}
//           onClick={() => push(`/exchange/${data.name}?id=${data.id}`)}
//           className="h-14 cursor-pointer border-light-gray-1"
//         >
//           <TableCell className="text-nowrap font-medium text-white-custome">
//             {data.name}
//           </TableCell>
//           <TableCell className="flex h-14 items-center justify-end text-white-custome">
//             <p
//               className={`${data.is_active ? "bg-green-custome" : "bg-red-500"} w-fit rounded-full px-3 py-1 text-xs`}
//             >
//               {data.is_active ? "Active" : "Non-Active"}
//             </p>
//           </TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </div>
