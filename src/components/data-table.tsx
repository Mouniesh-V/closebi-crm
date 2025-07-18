import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Props {
  rows: unknown[]
  rowLinkBase?: string
  rowRenderer?: (row: Record<string, unknown>, key: string) => React.ReactNode
}

export default function DynamicTable({ rows, rowRenderer }: Props) {
  if (!rows || rows.length === 0)
    return <div className="text-center text-gray-500 py-4">No data available</div>

  const headers = Object.keys(rows[0] as object)

  return (
    <div className="w-full">
      {/* Separate Table Header */}
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-white sticky top-0 z-10 shadow-sm">
            {headers.map((header) => (
              <TableHead key={header} className="capitalize bg-white">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>

      {/* Separate Scrollable Table Body */}
      <div className="max-h-[calc(100vh-350px)] overflow-y-auto">
        <Table className="min-w-full">
          <TableBody className="overflow-y-auto">
            {rows.map((row, idx) => {
              const rowObj = row as Record<string, unknown>
              const rowId =
                typeof rowObj.id === "string" || typeof rowObj.id === "number"
                  ? rowObj.id
                  : idx

              return (
                <TableRow key={rowId} className="hover:bg-muted transition">
                  {headers.map((headerKey) => (
                    <TableCell key={headerKey}>
                      {rowRenderer &&
                      ["caller", "receiver", "createdOn", "duration"].includes(headerKey) ? (
                        rowRenderer(rowObj, headerKey)
                      ) : (
                        String(rowObj[headerKey] ?? "")
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
