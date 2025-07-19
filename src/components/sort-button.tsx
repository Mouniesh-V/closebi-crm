import { ArrowUpDown } from "lucide-react"
import { Button } from "./ui/button"
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { useState } from "react"

export type SortDataProps = {
    sortData: string[]
    onSort: (sortValue: string) => void
}

export const SortButton = ({ sortData, onSort }: SortDataProps) => {
    const [open, setOpen] = useState(false)

    const handleSortSelect = (item: string) => {
        onSort(item)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                    Sort <ArrowUpDown className="ml-1 h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Command>
                    <CommandInput placeholder="Search here"/>
                    <CommandList>
                        <CommandGroup>
                            {sortData.map((item, idx) => {
                                return <CommandItem 
                                    key={idx}
                                    onSelect={() => handleSortSelect(item)}
                                    className="cursor-pointer"
                                >
                                    {item}
                                </CommandItem>
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
