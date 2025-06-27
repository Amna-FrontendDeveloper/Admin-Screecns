import React, { useState } from 'react';

export default function TimeFilterDropdown({ selected, onChange }) {
  const [open, setOpen] = useState(false);

  const options = ['This Month', 'Last Month', 'January', 'February'];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-rose-100 text-rose-600 text-sm px-3 py-1 rounded"
      >
        {selected}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-36 bg-white border rounded shadow-lg">
            
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-rose-100 cursor-pointer"
            >
                
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
