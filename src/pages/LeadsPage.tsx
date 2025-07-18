// src/pages/leads.tsx
import { useState } from "react"

import BreadcrumbNav from "@/components/bread-crumb-nav"
import DynamicTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { Layout } from "@/layout/Layout"

import {
  Plus,
  Filter,
  ArrowDownUp,
  LayoutGrid,
} from "lucide-react"

const sampleData = [
  {
    id: 1,
    name: "08124294844",
    status: "New",
    timeline: "Immediate",
    urgency: "Medium",
    language: "Hindi",
    topTopics: "Gold rate, 916 gold",
    context: "Customer's direct inquiry about gold rates",
    modified: "2024-01-15",
  },
  {
    id: 2,
    name: "08105824530",
    status: "New",
    timeline: "Immediate",
    urgency: "Medium",
    language: "Hindi",
    topTopics: "Gold rate, 916 gold",
    context: "Customer's direct inquiry",
    modified: "2024-01-15",
  },
  {
    id: 3,
    name: "07338176486",
    status: "New",
    timeline: "Immediate",
    urgency: "Low",
    language: "Telugu",
    topTopics: "Gold rate, language selection",
    context: "Customer inquired about rates",
    modified: "2024-01-14",
  },
  {
    id: 4,
    name: "07982374061",
    status: "New",
    timeline: "Immediate",
    urgency: "Low",
    language: "Hindi",
    topTopics: "Wastage charges, coupon application",
    context: "Customer mentioned special offers",
    modified: "2024-01-14",
  },
  {
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },
  {
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },
  {
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },
  {
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },
  {
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },
  {
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },
  {
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },
  {
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },{
    id: 5,
    name: "08597309950",
    status: "New",
    timeline: "NA",
    urgency: "Low",
    language: "Hindi/English",
    topTopics: "Language selection",
    context: "Initial greeting and language preference",
    modified: "2024-01-13",
  },
]

export default function LeadsPage() {
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const totalRows = sampleData.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  const paginatedData = sampleData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  return (
    <Layout>
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="ml-4 p-3 text-xl font-bold">
          <BreadcrumbNav items={[{ label: "Leads" }]} />
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
          <Input placeholder="First Name" className="w-40" />
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
            <DynamicTable rows={paginatedData} rowLinkBase="/leads" />
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
