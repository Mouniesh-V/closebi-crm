import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import LeadsPage from "./pages/LeadsPage"
import CallsPage from "./pages/CallLogs"
import SamplePage from "./pages/samplePage"
import LeadDetails from "./pages/LeadDetails"
import ActivityPage from "./pages/ActivityPage"
import LeadsCallPage from "./pages/LeadsCallPage"
import LeadsDataPage from "./pages/LeadsDataPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SamplePage/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leads" element={<LeadsPage />} />
      <Route path="/leads/:id" element={<LeadDetails />}>
        <Route index element={<ActivityPage />} />
        <Route path="calls" element={<LeadsCallPage />} />
        <Route path="data" element={<LeadsDataPage/>} />
      </Route>
      <Route path="/call-logs" element={<CallsPage />} />
    </Routes>
  )
}

export default App