import React from "react";

const formatTime = (time) => {
    if(!time) {
        return '_'
    }
    let [hour, minute] = time.split(":").map(Number);
    let period = hour >= 12 ? 'PM': 'AM';
    if(hour === 0) {
        hour = 12
    }
    else if(hour > 12) {
        hour = hour - 12
    }

    return `${hour}:${minute.toString().padStart(2, "0")} ${period}`;
}

const UnRegisteredData = ({ formList, setFormList }) => {
    const handleDelete = (index) => {
        const updatedList = formList.filter((_, i) => i !== index);
        setFormList(updatedList);
        localStorage.setItem("formList", JSON.stringify(updatedList))
    }
    console.log(formList)
  return (
    <div className="mt-6 overflow-x-auto">
      {formList.length > 0 ? (
        <table className="min-w-full border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Schedule Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Days in Week</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Time Start</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Time End</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {formList.map((f, i) => (
              <tr
                key={f.key || i}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-3 text-sm text-gray-700">{i + 1}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{f.name}</td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  {f.days?.length > 0 ? f.days.join(", ") : "—"}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  {formatTime(f.startTime)}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  {formatTime(f.endTime)}
                </td>
                <td  className="px-6 py-3 text-sm">
                    <button onClick={() => handleDelete(i)} className="py-1 px-3 bg-red-600 text-white rounded">

                    Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center text-gray-500 text-lg font-medium mt-4">
          No schedule created yet
        </h2>
      )}
    </div>
  );
};

export default UnRegisteredData;
