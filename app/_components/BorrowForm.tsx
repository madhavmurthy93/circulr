"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function BorrowForm() {
  const [selected, setSelected] = useState<Date[] | undefined>(undefined);
  return (
    <div className="flex flex-col gap-2 items-start">
      <DayPicker mode="multiple" selected={selected} onSelect={setSelected} />
      <button className="border rounded-full px-10 py-2 border-black font-semibold hover:bg-black hover:text-white transition-all">
        Borrow
      </button>
    </div>
  );
}

export default BorrowForm;
