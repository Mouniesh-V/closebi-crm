import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ProfileAccordionProps {
  profileData: Record<string, string>;
  dispositionData: Record<string, string>;
  additionalInfoData: {
    transcript: string;
    topTopics: string;
    mainSection: string;
    subSections: string;
    stage: string;
    timeline: string;
    language: string;
    description: string;
    category: string;
    urgency: string;
    context: string;
  };
}

export const ProfileAccordion = ({
  profileData,
  dispositionData,
  additionalInfoData,
}: ProfileAccordionProps) => {
  return (
    <Accordion type="multiple" className="w-full">
      {/* Profile Section */}
      <AccordionItem value="profile">
        <AccordionTrigger className="text-sm font-semibold hover:no-underline">Person</AccordionTrigger>
        <AccordionContent className="space-y-4">
          {Object.entries(profileData).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <Label className="text-sm text-muted-foreground">{key}</Label>
              <Input defaultValue={value} placeholder={`Add ${key}...`} className="text-sm w-1/2" />
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Dispositions Section */}
      <AccordionItem value="dispositions">
        <AccordionTrigger className="text-sm font-semibold hover:no-underline">Dispositions</AccordionTrigger>
        <AccordionContent className="space-y-4">
          {Object.entries(dispositionData).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <Label className="text-sm text-muted-foreground">{key}</Label>
              <Input defaultValue={value} placeholder={`Add ${key}...`} className="text-sm w-1/2" />
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* Additional Details Section */}
      <AccordionItem value="additional">
        <AccordionTrigger className="text-sm font-semibold hover:no-underline">Additional Details</AccordionTrigger>
        <AccordionContent className="space-y-4 text-sm">
          <div className="flex justify-between items-center">
            <Label className="text-sm text-muted-foreground">Transcript</Label>
            <Textarea value={additionalInfoData.transcript} readOnly className="h-32 resize-none w-1/2" />
          </div>

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
            <div key={field} className="flex justify-between items-center capitalize">
              <Label className="text-sm text-muted-foreground">{field.replace(/([A-Z])/g, ' $1')}</Label>
              <Input defaultValue={String((additionalInfoData as Record<string, unknown>)[field] || "—")} className="text-sm w-1/2" />
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};