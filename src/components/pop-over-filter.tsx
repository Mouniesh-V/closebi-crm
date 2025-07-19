import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { ListFilter, Plus, X } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

import { Input } from "./ui/input";

// These are now passed as props!
export interface FilterProps {
  filterFields: string[];     // e.g. ["Response By", "Created By", "Status"]
  operators: string[];        // e.g. ["Equals", "Between", "Contains"]
}

type FilterItem = {
  field: string;
  operator: string;
  value: string;
};

export const PopOverFilter = ({
  filterFields,
  operators,
}: FilterProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [addFilterOpen, setAddFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterItem[]>([]);

  // Adding new filter
  function handleAddFilter(field: string) {
    setFilters([
      ...filters,
      { field, operator: operators[0], value: "" },
    ]);
    setAddFilterOpen(false);
  }

  // Modify filter item
  function handleFilterChange(idx: number, key: keyof FilterItem, value: string) {
    setFilters((prev) =>
      prev.map((f, i) => (i === idx ? { ...f, [key]: value } : f))
    );
  }

  // Remove ONE filter
  function handleRemoveFilter(idx: number) {
    setFilters((prev) => prev.filter((_, i) => i !== idx));
  }

  // Remove all
  function handleClearAll() {
    setFilters([]);
  }

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative flex items-center">
          <ListFilter className="text-sm"/> Filter
          {filters.length > 0 && (
            <>
              <span className="ml-2 inline-flex items-center justify-center bg-gray-200 rounded px-2 py-0.5 text-xs text-gray-700 font-medium">
                {filters.length}
              </span>
              <X
                className="ml-2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-700"
                onClick={e => {
                  e.stopPropagation();
                  handleClearAll();
                }}
              />
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[400px]">
        <div className="flex flex-col gap-2 mb-4">
          {filters.length === 0 ? (
            <span className="text-gray-400">Empty - Choose a field to filter by</span>
          ) : (
            filters.map((filter, idx) => (
              <div key={idx} className="flex items-center gap-1">
                {/* Only before first filter */}
                {idx === 0 ? (
                    <div className="flex justify-center">
                        <div className="text-sm text-gray-500 font-semibold pr-2">Where</div>
                    </div>
                  
                ) : (
                    <div className="flex justify-center">
                        <div className="text-sm text-gray-500 font-semibold pr-2 mr-4">And</div>
                    </div>
                  
                )}
                {/* Filter field dropdown */}
                <select
                  value={filter.field}
                  onChange={e => handleFilterChange(idx, "field", e.target.value)}
                  className="bg-gray-100 px-1 text-sm outline-none h-7 rounded"
                >
                  {filterFields.map(field => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
                {/* Operator dropdown */}
                <select
                  value={filter.operator}
                  onChange={e => handleFilterChange(idx, "operator", e.target.value)}
                  className="bg-gray-100 px-1 text-sm outline-none h-7 rounded"
                >
                  {operators.map(op => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
                {/* Value input */}
                <Input
                  className="bg-gray-100 text-sm w-24 h-6 px-1 py-0.5"
                  value={filter.value}
                  placeholder="Value"
                  onChange={e => handleFilterChange(idx, "value", e.target.value)}
                />
                {/* Remove THIS filter */}
                <button
                  onClick={() => handleRemoveFilter(idx)}
                  className="ml-1 text-gray-400 hover:text-gray-700 focus:outline-none"
                  tabIndex={-1}
                  aria-label="Remove filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center"
            onClick={() => setAddFilterOpen(true)}
          >
            <Plus className="mr-1 h-4 w-4" />
            Add Filter
          </Button>
          {/* Remove filter */}
                {filters.length > 0 && (
                        <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto text-sm text-gray-600"
                        onClick={handleClearAll}
                        >
                        Clear Filter
                        </Button>
                )}
        </div>
        {/* "Add Filter" dropdown popup */}
        {addFilterOpen && (
          <div className="mt-4 relative z-10">
            <Command>
              <CommandInput placeholder="Search filters..." />
              <CommandList>
                <CommandGroup heading="Fields">
                  {filterFields
                    .filter(field => !filters.some(f => f.field === field))
                    .map(field => (
                      <CommandItem
                        key={field}
                        onSelect={() => handleAddFilter(field)}
                        className="cursor-pointer"
                      >
                        {field}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 text-xs"
              onClick={() => setAddFilterOpen(false)}
            >
              Cancel
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
