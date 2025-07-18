import { NavLink, Outlet, useParams } from "react-router-dom"
import { Layout } from "@/layout/Layout"
import BreadcrumbNav from "@/components/bread-crumb-nav"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import {
  Clock,
  PhoneCall,
  BarChart3,
  Phone
} from "lucide-react"
import { ProfileAccordion } from "@/components/profile-accordion"

export default function LeadDetails() {
  const { id } = useParams()

  return (
    <Layout>
      {/* Top bar with breadcrumb and actions */}
      <div className="flex justify-between items-center border-b border-gray-200 p-4">
        <div className="ml-1">
          <BreadcrumbNav items={[{ label: "Leads", href: "/leads" }, { label: id ?? "Details" }]} />
        </div>
        <div className="flex flex-row gap-2">
          <Button size="sm">Assign To</Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" variant="outline">
                Status
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <div className="text-sm space-y-2">
                <div className="hover:bg-muted px-2 py-1 rounded cursor-pointer">New</div>
                <div className="hover:bg-muted px-2 py-1 rounded cursor-pointer">Contacted</div>
                <div className="hover:bg-muted px-2 py-1 rounded cursor-pointer">Nurture</div>
                <div className="hover:bg-muted px-2 py-1 rounded cursor-pointer">Qualifies</div>
                <div className="hover:bg-muted px-2 py-1 rounded cursor-pointer">Unqualified</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="flex flex-1 gap-2 p-2">
  {/* Left Panel */}
  <div className="w-[60%]">
    <div className="border rounded-none p-4 h-[550px] bg-white shadow-sm space-y-4 overflow-y-auto">
     

      {/* Accordion */}
      <ProfileAccordion
        profileData={profileData}
        dispositionData={dispositionData}
        additionalInfoData={{
          ...additionalInfoData,
          transcript: additionalInfoData.transcript.slice(0, 200) + "..."
        }}
      />
    </div>
  </div>

  {/* Right Panel */}
  <div className="flex-1">
     {/* Title */}


    <div className="border rounded-none p-4 h-[550px] bg-white shadow-sm overflow-y-auto">
     <div className="flex justify-between pb-4 border-b border-gray-200 p-1 mb-3">
      <div className="text-lg font-semibold">CRM-LEAD-2025-00184</div>
      <div>
          <Button size="sm">
          <Phone/>  Call
          </Button>
      </div>
     </div>
      {/* Tabs */}
      <div className="flex space-x-8 mb-4 border-b border-gray-200 px-2">
  <NavLink
    to={`/leads/${id}`}
    end
    className={({ isActive }) =>
      `flex items-center gap-1 text-sm pb-2 border-b-2 transition-all duration-150 ${
        isActive
          ? "text-foreground border-black font-medium"
          : "text-muted-foreground border-transparent hover:text-foreground"
      }`
    }
  >
    <Clock className="h-4 w-4" /> Activity
  </NavLink>

  <NavLink
    to={`/leads/${id}/calls`}
    className={({ isActive }) =>
      `flex items-center gap-1 text-sm pb-2 border-b-2 transition-all duration-150 ${
        isActive
          ? "text-foreground border-black font-medium"
          : "text-muted-foreground border-transparent hover:text-foreground"
      }`
    }
  >
    <PhoneCall className="h-4 w-4" /> Calls
  </NavLink>

  <NavLink
    to={`/leads/${id}/data`}
    className={({ isActive }) =>
      `flex items-center gap-1 text-sm pb-2 border-b-2 transition-all duration-150 ${
        isActive
          ? "text-foreground border-black font-medium"
          : "text-muted-foreground border-transparent hover:text-foreground"
      }`
    }
  >
    <BarChart3 className="h-4 w-4" /> Data
  </NavLink>
</div>


      {/* Activity Content */}
      <Outlet/>
    </div>

  </div>
</div>

    </Layout>
  )
}

const profileData = {
  "Customer Name": "John Doe",
  "Phone": "08105824530",
  "Email": "john@example.com",
  "Permanent Address": "123 Street",
}

const additionalInfoData = {
  transcript: "[SPEAKER_03]: Hello. [SPEAKER_01]: Welcome to Kalyan Jal Live...",
  topTopics: "Gold rate, 916 gold",
  mainSection: "Customer inquiring about the current gold rate.",
  subSections: "Gold rate inquiry, 916 gold specification",
  stage: "Research",
  timeline: "Immediate",
  language: "Hindi",
  description: "Provide the customer with the current gold rate for 916 gold.",
  category: "Neutral",
  urgency: "Medium",
  context: "—"
}

const dispositionData = {
  "Dispositions": "",
  "Sub Dispositions": "",
  "Sub Sub Dispositions": "",
  "Set Followup": "",
  "Set Followup Date": "",
  "Transfer": ""
}
