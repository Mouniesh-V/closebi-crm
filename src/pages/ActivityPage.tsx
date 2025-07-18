import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";


export default function ActivityPage() {
  return (
    <div className="flex justify-between">
        <div>
            <h3>Activity</h3>
        </div>
        <div>
            <Button size="sm">
                <Plus/> New <ChevronDown/>
            </Button>
        </div>
    </div>
  )
}
