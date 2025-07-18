import DynamicTable from "@/components/data-table"
import { SectionCard } from "@/components/number-card"
import { Button } from "@/components/ui/button"
import { Layout } from "@/layout/Layout"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { useState } from "react"

const cardData = [
  { label: "Total Revenue", value: "$12,500", change: "+8.2%", changeVariant: "outline" },
  { label: "New Customers", value: "320", change: "+5.4%", changeVariant: "outline" },
  { label: "Churn Rate", value: "2.1%", change: "-0.3%", changeVariant: "default" },
  { label: "Monthly Visits", value: "45,200", change: "+12.7%", changeVariant: "outline" },
  { label: "Conversions", value: "1,130", change: "+3.9%", changeVariant: "outline" },
  { label: "Support Tickets", value: "87", change: "-10.5%", changeVariant: "default" }
]

const tableData = [
  {
    id: 1,
    caller: "John Doe",
    receiver: "Support Team",
    type: "Incoming",
    status: "Answered",
    duration: "02:35",
    createdOn: "2025-07-17 10:42 AM"
  },
  {
    id: 2,
    caller: "Emily Carter",
    receiver: "Sales",
    type: "Outgoing",
    status: "Missed",
    duration: "00:00",
    createdOn: "2025-07-17 11:15 AM"
  },
  {
    id: 3,
    caller: "Michael Smith",
    receiver: "Customer Service",
    type: "Incoming",
    status: "Voicemail",
    duration: "01:12",
    createdOn: "2025-07-16 04:20 PM"
  },
  {
    id: 4,
    caller: "Sofia Lee",
    receiver: "Support Team",
    type: "Outgoing",
    status: "Answered",
    duration: "03:44",
    createdOn: "2025-07-16 09:30 AM"
  },
  {
    id: 5,
    caller: "David Kim",
    receiver: "Billing Dept.",
    type: "Incoming",
    status: "Missed",
    duration: "00:00",
    createdOn: "2025-07-15 05:10 PM"
  },
  {
    id: 5,
    caller: "David Kim",
    receiver: "Billing Dept.",
    type: "Incoming",
    status: "Missed",
    duration: "00:00",
    createdOn: "2025-07-15 05:10 PM"
  },
  {
    id: 5,
    caller: "David Kim",
    receiver: "Billing Dept.",
    type: "Incoming",
    status: "Missed",
    duration: "00:00",
    createdOn: "2025-07-15 05:10 PM"
  },
  {
    id: 5,
    caller: "David Kim",
    receiver: "Billing Dept.",
    type: "Incoming",
    status: "Missed",
    duration: "00:00",
    createdOn: "2025-07-15 05:10 PM"
  },
  {
    id: 5,
    caller: "David Kim",
    receiver: "Billing Dept.",
    type: "Incoming",
    status: "Missed",
    duration: "00:00",
    createdOn: "2025-07-15 05:10 PM"
  },
  {
    id: 5,
    caller: "David Kim",
    receiver: "Billing Dept.",
    type: "Incoming",
    status: "Missed",
    duration: "00:00",
    createdOn: "2025-07-15 05:10 PM"
  },
  {
    id: 5,
    caller: "David Kim",
    receiver: "Billing Dept.",
    type: "Incoming",
    status: "Missed",
    duration: "00:00",
    createdOn: "2025-07-15 05:10 PM"
  },
  {
    id: 6,
    caller: "Rachel Green",
    receiver: "Support Team",
    type: "Outgoing",
    status: "Answered",
    duration: "04:02",
    createdOn: "2025-07-14 01:50 PM"
  }
]

function Dashboard() {
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const totalRows = tableData.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  const paginatedData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  return (
    <Layout>
      {/* Force entire view height and prevent outer scroll */}
      <div className="flex flex-col h-screen overflow-hidden">

        {/* Top section: Cards */}
        <div className="grid grid-cols-3 gap-5 p-6 shrink-0">
          {cardData.map((data, index) => (
            <SectionCard
              key={index}
              label={data.label}
              value={data.value}
              change={data.change}
              changeVariant={data.changeVariant}
            />
          ))}
        </div>

        {/* Table and Pagination */}
        <div className="flex flex-col flex-1 px-6 overflow-hidden">

          {/* Scrollable Table */}
          <div className="flex-1">
            <DynamicTable rows={paginatedData} />
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

            {/* Right: Pagination buttons */}
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
      </div>
    </Layout>
  )
}


export default Dashboard
