// src/components/data-table.tsx
import { Link } from "react-router-dom"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

interface Props {
  rows: unknown[]
  rowLinkBase: string // e.g., "/leads"
  rowRenderer?: (row: any) => React.ReactNode // optional custom renderer
}

export default function DynamicTable({ rows, rowLinkBase, rowRenderer }: Props) {
  if (rows.length === 0)
    return <div className="text-center text-gray-500">No data available</div>

  const headers = Object.keys(rows[0] as object)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header} className="capitalize">{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, idx) => {
          const rowObj = row as Record<string, unknown>
          const key = typeof rowObj.id === "string" || typeof rowObj.id === "number" ? rowObj.id : idx

          if (rowRenderer) {
            return (
              <TableRow key={key} className="hover:bg-muted transition">
                {headers.map((headerKey) => (
                  <TableCell key={headerKey}>
                    {headerKey === "caller" || headerKey === "receiver" || headerKey === "createdOn" || headerKey === "duration" ? (
                      rowRenderer(rowObj)
                    ) : (
                      String(rowObj[headerKey] ?? "")
                    )}
                  </TableCell>
                ))}
              </TableRow>
            )
          }

          return (
            <TableRow key={key} className="hover:bg-muted transition">
              <Link to={`${rowLinkBase}/${key}`} className="contents">
                {headers.map((headerKey) => (
                  <TableCell key={headerKey}>
                    {String(rowObj[headerKey] ?? "")}
                  </TableCell>
                ))}
              </Link>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}