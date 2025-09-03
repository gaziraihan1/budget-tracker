import React, { useState } from 'react';
import { useProfileContext } from '../../context/ProfileContext';
import RegisteredData from './ClassScheduleComponent/RegisteredData';
import UnRegisteredData from './ClassScheduleComponent/UnRegisteredData';

const ClassSchedule = () => {
  const { profile } = useProfileContext();
  const [formData, setFormData] = useState({
    name: "",
    days: [],
    startTime: "",
    endTime: "",
    key: String(Math.random())
  });

   const [formList, setFormList] = useState(() => {
    const saved = localStorage.getItem("formList");
    return saved ? JSON.parse(saved) : [];
  });

  const weekDays = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
  ];


  const handleDayChange = (day) => {
    setFormData((prev) => {
      const isSelected = prev.days.includes(day);
      return {
        ...prev,
        days: isSelected
          ? prev.days.filter((d) => d !== day)
          : [...prev.days, day],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...formList, formData];
    setFormList(updatedList);

    localStorage.setItem("formList", JSON.stringify(updatedList));

    setFormData({
      name: "",
      days: [],
      startTime: "",
      endTime: "",
    });
  };

  return (
    <div>
      <h2 className="text-lg lg:text-xl 2xl:text-2xl text-center my-2 bg-gradient-to-tl from-indigo-600 via-emerald-700 to-cyan-700 bg-clip-text text-transparent font-semibold">
        Create and manage your class schedule
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 py-4 border-b border-gray-200">
        <div>
          <label className="block mb-1 font-medium">Class Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Select Days</label>
          <div className="grid grid-cols-2 gap-2">
            {weekDays.map((day) => (
              <label key={day} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.days.includes(day)}
                  onChange={() => handleDayChange(day)}
                  className="accent-blue-500"
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap justify-between space-y-4'>

        <div className='w-full md:w-[48%]'>
          <label className="block mb-1 font-medium">Start Time</label>
          <input
            type="time"
            value={formData.startTime}
            onChange={(e) =>
              setFormData({ ...formData, startTime: e.target.value })
            }
            required
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div className='w-full md:w-[48%]'>
          <label className="block mb-1 font-medium">End Time</label>
          <input
            type="time"
            value={formData.endTime}
            onChange={(e) =>
              setFormData({ ...formData, endTime: e.target.value })
            }
            required
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Schedule
        </button>
      </form>
      <div className="mt-6">
        {profile ? (
          <RegisteredData />
        ) : (
          <UnRegisteredData formList={formList} setFormList={setFormList}/>
        )}
      </div>
    </div>
  );
};

export default ClassSchedule;
