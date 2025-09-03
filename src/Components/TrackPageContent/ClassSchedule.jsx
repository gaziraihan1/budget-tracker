import React, {  useEffect, useState } from 'react';
import { useProfileContext } from '../../context/ProfileContext';
import RegisteredData from './ClassScheduleComponent/RegisteredData';
import UnRegisteredData from './ClassScheduleComponent/UnRegisteredData';
import Alert from '../Shared/Alert/Alert';

const ClassSchedule = () => {
  const { profile, loading } = useProfileContext();
  
  const [alert, setAlert] = useState({
      show: false,
      message: "",
      type: "success",
    });
    const [allSchedule, setAllSchedule] = useState([]);
    useEffect(() => {
      const fetchSchedule = async () => {
        if(!profile?.user?.email) {
          return
        };

        const res = await fetch(`http://localhost:5000/schedule?email=${[profile.user.email]}`);
        const data = await res.json();
        setAllSchedule(data)
      };
      fetchSchedule()
    }, [profile]);

    const handleDeleteSchedule = (id) => {
      setAllSchedule(prev => prev.filter(item => item._id !== id))
    }
    

  const [formData, setFormData] = useState({
    name: "",
    days: [],
    startTime: "",
    endTime: "",
    key: String(Math.random()),
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

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedList = [...formList, formData];
    setFormList(updatedList);
    const scheduleSent = {
      name: formData.name,
      startTime: formData.startTime,
      endTime: formData.endTime,
      days: formData.days,
      email: profile?.user?.email
    }

    localStorage.setItem("formList", JSON.stringify(updatedList));

    const res = await fetch("http://localhost:5000/schedule", ({
      method: 'POST',
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(scheduleSent)
    }));
    const data = await res.json()
    
    
    if(res.status === 200) {
      setAlert({show: true, message: data.message, type: 'success'})
    }
    if(profile) {
      setAllSchedule(prev => [...prev, scheduleSent])
    }

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
        { loading ? <div className='flex justify-center items-center'>
          <span className="h-12 w-12 rounded-full border-4 border-t-transparent border-blue-500 animate-spin">

          </span>
        </div> :
        profile ? (
          <RegisteredData allSchedule={allSchedule} onDelete={handleDeleteSchedule} setFormList={setFormList}/>
        ) : (
          <UnRegisteredData formList={formList} setFormList={setFormList}/>
        )}
      </div>
      {
        alert.show && (
          <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
        )
      }
    </div>
  );
};

export default ClassSchedule;
