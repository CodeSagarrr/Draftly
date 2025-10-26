"use client"
import React,{ useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
  defaultValue?: string;
}

function DropDown({ label, options, onSelect , defaultValue }:DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || "Select");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option); // send selected value back to parent
  };
  return (
    <div className="md:w-52 ">
      {label && (
        <p className="text-sm font-medium text-gray-800 mb-2 ml-1">{label}</p>
      )}

      <div className="relative inline-block text-left w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full justify-between items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 focus:outline-none"
        >
          {selected}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-600"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
