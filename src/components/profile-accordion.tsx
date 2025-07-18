import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ProfileAccordionProps {
  profileData: Record<string, string>
  dispositionData: Record<string, string>
  additionalInfoData: {
    transcript: string
    topTopics: string
    mainSection: string
    subSections: string
    stage: string
    timeline: string
    language: string
    description: string
    category: string
    urgency: string
    context: string
  }
}

export const ProfileAccordion = ({
  profileData,
  dispositionData,
  additionalInfoData,
}: ProfileAccordionProps) => {
  return (
    <div className="w-full p-2 text-[10px] space-y-2">
      {/* Combined Person + Disposition */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-1">
        {[...Object.entries(profileData), ...Object.entries(dispositionData)].map(([key, value]) => (
          <div key={key} className="flex flex-col gap-0.5">
            <Label className="text-muted-foreground capitalize text-[10px]">{key}</Label>
            <Input
              defaultValue={value}
              className="border-0 border-b border-gray-300 rounded-none px-0 py-0 h-5 text-[10px] focus-visible:ring-0 focus:border-black"
            />
          </div>
        ))}
      </div>

      {/* Short Transcript */}
      <div className="flex flex-col gap-0.5">
        <Label className="text-muted-foreground text-[10px]">Transcript</Label>
        <Textarea
          value={additionalInfoData.transcript}
          readOnly
          className="h-8 resize-none text-[10px] border-0 border-b border-gray-300 rounded-none px-0 py-0 focus-visible:ring-0"
        />
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-1">
        {[
          "topTopics",
          "mainSection",
          "subSections",
          "stage",
          "timeline",
          "language",
          "description",
          "category",
          "urgency",
          "context",
        ].map((field) => (
          <div key={field} className="flex flex-col gap-0.5 capitalize">
            <Label className="text-muted-foreground text-[10px]">
              {field.replace(/([A-Z])/g, " $1")}
            </Label>
            <Input
              defaultValue={String((additionalInfoData as Record<string, unknown>)[field] || "—")}
              className="border-0 border-b border-gray-300 rounded-none px-0 py-0 h-5 text-[10px] focus-visible:ring-0 focus:border-black"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
