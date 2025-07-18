import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { PhoneIncoming, User, Calendar, Clock, CheckCircle2} from "lucide-react";
  
  interface CallLogItem {
    id: number;
    caller: string;
    receiver: string;
    type: string;
    status: string;
    duration: string;
    fromNumber: string;
    toNumber: string;
    createdOn: string;
    audioUrl?: string;
  }
  
  interface DialogViewProps {
    trigger: React.ReactNode;
    data: CallLogItem;
    onCreateLead?: () => void;
  }
  
  export default function DialogViewCall({ trigger, data, onCreateLead }: DialogViewProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="w-full max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Call Details</DialogTitle>
          </DialogHeader>
  
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <PhoneIncoming className="h-4 w-4" />
              <span>{data.type === "incoming" ? "Incoming Call" : "Outgoing Call"}</span>
            </div>
  
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{data.caller || "Unknown"}</span>
            </div>
  
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(data.createdOn).toLocaleString()}</span>
            </div>
  
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{data.duration}</span>
            </div>
  
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>{data.status}</span>
            </div>
  
            {data.audioUrl && (
              <audio controls className="w-full mt-2">
                <source src={data.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
  
          <Button onClick={onCreateLead} className="w-full mt-4">
            Create lead
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
  