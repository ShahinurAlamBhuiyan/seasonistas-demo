'use client'

import { useState } from 'react'
import InterviewRow from '~/components/Employer/Calender/InterviewRow'

const allInterviews = [
  { name: 'Abdullah Nadeem', role: 'UI/UX Designer', date: '07/08/2024', time: '2:00PM', location: 'Punjab Pakistan' },
  { name: 'Fatima Noor', role: 'Product Manager', date: '08/08/2024', time: '3:00PM', location: 'Lahore Pakistan' },
  { name: 'Zain Khan', role: 'Frontend Developer', date: '09/08/2024', time: '10:00AM', location: 'Karachi Pakistan' },

  { name: 'Abdullah Nadeem', role: 'UI/UX Designer', date: '07/08/2024', time: '2:00PM', location: 'Punjab Pakistan' },
  { name: 'Fatima Noor', role: 'Product Manager', date: '08/08/2024', time: '3:00PM', location: 'Lahore Pakistan' },
  { name: 'Zain Khan', role: 'Frontend Developer', date: '09/08/2024', time: '10:00AM', location: 'Karachi Pakistan' },
  { name: 'Ayesha Siddiqui', role: 'QA Engineer', date: '10/08/2024', time: '11:00AM', location: 'Islamabad Pakistan' },
  { name: 'Ayesha Siddiqui', role: 'QA Engineer', date: '10/08/2024', time: '11:00AM', location: 'Islamabad Pakistan' },
  { name: 'Ali Raza', role: 'Backend Developer', date: '11/08/2024', time: '1:00PM', location: 'Multan Pakistan' },
  { name: 'Sana Malik', role: 'HR Manager', date: '12/08/2024', time: '2:00PM', location: 'Peshawar Pakistan' },
  { name: 'Bilal Aslam', role: 'DevOps Engineer', date: '13/08/2024', time: '4:00PM', location: 'Rawalpindi Pakistan' },
  { name: 'Ali Raza', role: 'Backend Developer', date: '11/08/2024', time: '1:00PM', location: 'Multan Pakistan' },
  { name: 'Sana Malik', role: 'HR Manager', date: '12/08/2024', time: '2:00PM', location: 'Peshawar Pakistan' },
  { name: 'Bilal Aslam', role: 'DevOps Engineer', date: '13/08/2024', time: '4:00PM', location: 'Rawalpindi Pakistan' },
  { name: 'Fatima Noor', role: 'Product Manager', date: '08/08/2024', time: '3:00PM', location: 'Lahore Pakistan' },
  { name: 'Zain Khan', role: 'Frontend Developer', date: '09/08/2024', time: '10:00AM', location: 'Karachi Pakistan' },
  { name: 'Ayesha Siddiqui', role: 'QA Engineer', date: '10/08/2024', time: '11:00AM', location: 'Islamabad Pakistan' },
  { name: 'Ayesha Siddiqui', role: 'QA Engineer', date: '10/08/2024', time: '11:00AM', location: 'Islamabad Pakistan' },
]

const ITEMS_PER_PAGE = 7

const page = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentInterviews = allInterviews.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  const totalPages = Math.ceil(allInterviews.length / ITEMS_PER_PAGE)

  return (
    <div className="sm:px-6 py-4 space-y-6 ">
      <h1 className="text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4">My schedule</h1>

      <div className="bg-white rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b text-[20px] font-medium leading-[22px] text-[#1C252E]">
          All Interviews
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="text-[12px] leading-[24px] font-[500] text-[#637381] bg-[#F5F5F5]">
              <tr>
                <th className="px-6 py-3 text-left">Employee Name</th>
                <th className="px-6 py-3 text-left">Job Role</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Time</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-right">Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentInterviews.map((item, index) => (
                <InterviewRow
                  key={index}
                  index={index}
                  isLast={index === currentInterviews.length - 1}
                  name={item.name}
                  role={item.role}
                  date={item.date}
                  time={item.time}
                  location={item.location}
                />
              ))}
            </tbody>

          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center px-6 py-3 text-sm font-[400] text-[#1C252E] border-t">
          {`${startIndex + 1}–${Math.min(startIndex + ITEMS_PER_PAGE, allInterviews.length)} of ${allInterviews.length}`}
          <div className="ml-4 flex gap-3">
            <button
              className={`text-xl ${currentPage === 1 && 'text-[#919EABCC]'}`}
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              {'<'}
            </button>
            <button
              className={`text-xl ${currentPage === totalPages && 'text-[#919EABCC]'}`}
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
