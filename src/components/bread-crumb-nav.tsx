// src/components/BreadcrumbNav.tsx
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Link } from "react-router-dom"
  import { Fragment } from "react"
  
  type Crumb = {
    label: string
    href?: string // if href is not passed, it's the current item
  }
  
  interface Props {
    items: Crumb[]
  }
  
  export default function BreadcrumbNav({ items }: Props) {
    const lastIndex = items.length - 1
  
    return (
      <Breadcrumb>
        <BreadcrumbList className="flex items-center gap-1">
          {items.map((item, idx) => (
            <Fragment key={idx}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink asChild>
                    <Link to={item.href} className="capitalize text-lg">
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbLink className="text-muted-foreground capitalize text-lg">
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
  
              {idx !== lastIndex && (
                <BreadcrumbSeparator className="text-lg mx-1" />
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    )
  }
  