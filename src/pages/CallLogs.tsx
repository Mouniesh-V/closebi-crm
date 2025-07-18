// src/pages/leads.tsx
import { useState } from "react"

import BreadcrumbNav from "@/components/bread-crumb-nav"
import DynamicTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandInput, CommandItem, CommandList, CommandEmpty } from "@/components/ui/command"

import { Layout } from "@/layout/Layout"
import { Plus, Filter, ArrowDownUp, LayoutGrid, Check, ChevronsUpDown } from "lucide-react"
import DialogViewCall from "@/components/dialog-view-call"
import { cn } from "@/lib/utils"

const callLogsData = [
  {
    id: 1,
    caller: "Unknown",
    receiver: "Customer",
    type: "Incoming",
    status: "Completed",
    duration: "19s",
    fromNumber: "09902075694",
    toNumber: "18004257333",
    createdOn: "16 minutes ago",
  },
  {
    id: 2,
    caller: "Agent",
    receiver: "Customer",
    type: "Outgoing",
    status: "Missed",
    duration: "0s",
    fromNumber: "18004257333",
    toNumber: "09902075694",
    createdOn: "1 day ago",
  },
  {
    id: 3,
    caller: "Unknown",
    receiver: "Customer",
    type: "Incoming",
    status: "Completed",
    duration: "25s",
    fromNumber: "09123456789",
    toNumber: "18004257333",
    createdOn: "3 days ago",
  },
]

export default function CallLogsPage() {
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [telephonyOpen, setTelephonyOpen] = useState(false)
  const [selectedMedium, setSelectedMedium] = useState<string | null>(null)

  const totalRows = callLogsData.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  const paginatedData = callLogsData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  const telephonyOptions = ["Exotel", "Manual", "Twilio"]

  return (
    <Layout>
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="ml-4 p-3 text-xl font-bold">
          <BreadcrumbNav items={[{ label: "Call Logs" }]} />
        </div>
        <Button className="flex items-center gap-2 px-4 py-2 text-sm font-medium m-2 rounded-none">
          <Plus className="w-4 h-4" />
          Create
        </Button>
      </div>

      <div className="border-t border-gray-200" />

      {/* Toolbar */}
      <div className="p-5 border-b border-gray-300 flex justify-between items-center">
        {/* Search Inputs */}
        <div className="flex flex-row gap-3">
          {/* ✅ Replaced First Name with Telephony Combobox */}
          <Popover open={telephonyOpen} onOpenChange={setTelephonyOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-40 justify-between"
              >
                {selectedMedium ?? "Select Medium"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-0">
              <Command>
                <CommandInput placeholder="Search..." className="h-9" />
                <CommandEmpty>No result</CommandEmpty>
                <CommandList>
                  {telephonyOptions.map((option) => (
                    <CommandItem
                      key={option}
                      value={option}
                      onSelect={() => {
                        setSelectedMedium(option)
                        setTelephonyOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedMedium === option ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {option}
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Input placeholder="Phone No" className="w-40" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="new" />
                  <Label htmlFor="new">New</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="urgent" />
                  <Label htmlFor="urgent">Urgent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="followup" />
                  <Label htmlFor="followup">Follow-up</Label>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button variant="ghost" size="sm">
            <ArrowDownUp className="mr-2 h-4 w-4" />
            Sort
          </Button>

          <Button variant="ghost" size="sm">
            <LayoutGrid className="mr-2 h-4 w-4" />
            Columns
          </Button>
        </div>
      </div>

      <div className="flex flex-col h-[calc(100vh-150px)] px-6">
        {/* Scrollable Table Area */}
        <div className="flex-1 overflow-y-auto pr-2">
          <DynamicTable
            rows={paginatedData}
            rowLinkBase=""
            rowRenderer={(row, key) =>
              key === "caller" ? (
                <DialogViewCall
                  trigger={
                    <div className="hover:underline cursor-pointer font-semibold">
                      {String(row["caller"])}
                    </div>
                  }
                  data={row}
                  onCreateLead={() => console.log("Lead created for", row.id)}
                />
              ) : (
                String(row[key] ?? "")
              )
            }
          />
        </div>

        {/* Sticky Pagination */}
        <div className="border-t pt-4 pb-6 flex justify-between items-center bg-white sticky bottom-0 z-10">
          {/* Left: Rows per page */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Rows: {rowsPerPage}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-32">
              <div className="flex flex-col gap-1">
                {[10, 20, 50].map((count) => (
                  <Button
                    key={count}
                    variant={rowsPerPage === count ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      setRowsPerPage(count)
                      setCurrentPage(1)
                    }}
                  >
                    {count}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Right: Pagination */}
          <div className="flex gap-1 items-center">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1
              return (
                <Button
                  key={page}
                  size="sm"
                  variant={page === currentPage ? "default" : "ghost"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
