import { Link } from "react-router-dom"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Props<T> {
  rows: T[]
  rowLinkBase?: string
  rowRenderer?: (row: T, key: string) => React.ReactNode
}

export default function DynamicTable({ rows, rowLinkBase, rowRenderer }: Props<unknown>) {
  if (!rows || rows.length === 0)
    return <div className="text-center text-gray-500 py-4">No data available</div>

  const headers = Object.keys(rows[0] as object)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header} className="capitalize">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, idx) => {
          const rowObj = row as Record<string, unknown>
          const rowId =
            typeof rowObj.id === "string" || typeof rowObj.id === "number"
              ? rowObj.id
              : idx

          const rowContent = (
            <TableRow
              key={rowId}
              className={`hover:bg-muted transition cursor-pointer ${
                rowLinkBase ? "" : ""
              }`}
            >
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

          return rowLinkBase ? (
            <Link to={`${rowLinkBase}/${rowId}`} key={rowId} className="contents">
              {rowContent}
            </Link>
          ) : (
            rowContent
          )
        })}
      </TableBody>
    </Table>
  )
}
