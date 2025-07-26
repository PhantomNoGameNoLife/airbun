"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import Link from "next/link";

const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [input, setInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numOfGuests, setNumOfGuests] = useState<number>(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  return (
    <>
      <div className="flex items-center md:border-2 md:border-gray-600 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || 'Start your search'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-sm text-gray-60 placeholder-gray-400 grow pl-5 bg-transparent outline-none"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {input && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b bg-white p-4">
            <h2 className="text-2xl grow font-semibold">Number of Guests</h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center text-center bg-white p-5">
            <button
              type="button"
              className="grow cursor-pointer text-gray-500 hover:text-white hover:bg-red-400 transition duration-500 ease-in-out"
              onClick={() => setInput("")}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
              }}
              className="grow text-red-400 transform hover:scale-110 transition duration-500 ease-in-out"
              onClick={() => setInput("")}
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
