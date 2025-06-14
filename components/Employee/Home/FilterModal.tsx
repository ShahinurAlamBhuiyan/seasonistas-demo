'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type FilterModalProps = {
  open: boolean;
  onClose: () => void;
  selectedFilters: Record<string, string>;
  onFilterChange: (section: string, value: string) => void;
};

const sections: Record<string, string[]> = {
  'Job Type': ['Full Time', 'Part Time', 'Hybrid', 'Specific Dates'],
  'Experience Level': ['Entry Level (0–2 years)', 'Mid Level (2–5 years)', 'Senior Level (5+ years)'],
  'Remove': ['Temporary', 'Permanent', 'Hybrid', 'Other'],
  'Salary': ['Monthly', 'Daily', 'Hourly'],
  'Categories': ['Recreation', 'Driver Workers', 'Boats and Ships', 'Entertainment'],
};

const FilterModal = ({ open, onClose, selectedFilters, onFilterChange }: FilterModalProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-4">
                <Dialog.Title className="text-xl font-bold text-[#101828]">Filter</Dialog.Title>
                <button
                  onClick={onClose}
                  className="bg-[#4B8378] text-white px-6 py-2 rounded-full border border-[#3b6b6e] text-sm font-semibold hover:bg-[#417471] transition"
                >
                  Save
                </button>
              </div>

              {/* Filters Grid */}
              <div className="flex justify-between items-start  mt-6">
                {Object.entries(sections).map(([title, options]) => (
                  <div key={title} className="h-full  p-4 flex flex-col justify-start">
                    <p className="font-semibold text-[#101828] mb-3">{title}</p>
                    <div className="space-y-3">
                      {options.map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={title}
                            value={opt}
                            checked={selectedFilters[title] === opt}
                            onChange={(e) => onFilterChange(title, e.target.value)}
                            className="accent-[#4B8378] w-4 h-4"
                          />
                          <span className={`${selectedFilters[title] === opt ? 'text-[#4B8378]' : 'text-gray-700'} text-sm`}>
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default FilterModal
