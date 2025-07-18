import { Badge } from "./ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card"

interface SectionCardProps {
  label: string
  value: string | number
  change: string
  changeVariant?: "default" | "outline" | undefined
}

export const SectionCard = ({
  label,
  value,
  change,
  changeVariant = "outline",
}: SectionCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>
        <CardAction>
          <Badge variant={changeVariant}>{change}</Badge>
        </CardAction>
      </CardHeader>
    </Card>
  )
}
