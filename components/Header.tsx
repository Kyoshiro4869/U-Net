import { useState, ChangeEvent } from 'react';

const jobTypes = ['All', 'New Grad', 'Short-term Internship', 'Long-term Internship', 'Event/Information Session'];

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('All');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleJobTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedJobType(event.target.value);
  };

  return (
    <div className="w-[263px] h-[1279px] relative">
      <div className="w-[249px] h-[323px] left-0 top-[96px] absolute">
        <div className="w-[70px] h-[23px] left-[5px] top-0 absolute text-black text-[17px] font-normal font-['Inter']">Search</div>
        <input
          type="text"
          placeholder="Search by keyword"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-[249px] h-[34px] left-0 top-[30px] absolute border rounded p-2 mb-4"
        />
        <div className="w-[89px] h-[23px] left-[5px] top-[94px] absolute text-black text-[17px] font-normal font-['Inter']">Job Type</div>
        <select
          value={selectedJobType}
          onChange={handleJobTypeChange}
          className="w-[249px] h-[34px] left-0 top-[130px] absolute border rounded p-2 mb-4"
        >
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[1279px] h-[0px] left-[263px] top-0 absolute origin-top-left rotate-90 border border-zinc-400"></div>
    </div>
  );
}