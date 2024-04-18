import React from "react";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/react";

export default function AutoFilter({
  options,
  selected,
  setOptions,
  setSelected,
}) {
  //   console.log("selected", selected);

  return (
    <div>
      <Autocomplete label="Select an Pokemon" className="max-w-xs">
        {options.map((option) => (
          <AutocompleteSection key={option}>
            <AutocompleteItem
              className="text-foreground"
              onClick={() => setSelected(option)}
              selected={option === selected ? true : false}
            >
              {option}
            </AutocompleteItem>
          </AutocompleteSection>
        ))}
      </Autocomplete>
    </div>
  );
}
