import { useState } from 'react';
import React from 'react';

function TestField({slot, updateSlot}) {
  const [resistances, setResistances] = useState(slot);
  console.log(resistances)

  function handleChange(event) {
    const resistName = event.target.name;
    const resistValue = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)

    setResistances({
      ...resistances,
      [resistName]: resistValue,
    });
    
    updateSlot(resistances)
  }

  return (
      <tr>
        <th className="border-b-2 border-b-gray-700">{resistances.name}</th>
        <th className="border-b-2 border-b-gray-700">
          <input
            type="number"
            name="fire"
            placeholder="0"
            min="-10"
            max="20"
            className="w-10 text-black"
            onChange={handleChange}
          />
        </th>
        <th className="border-b-2 border-b-gray-700">
          <input
            type="number"
            name="cold"
            placeholder="0"
            min="-10"
            max="20"
            className="w-10 text-black"
            onChange={handleChange}
          />
        </th>
        <th className="border-b-2 border-b-gray-700">
          <input
            type="number"
            name="lightning"
            placeholder="0"
            min="-10"
            max="20"
            className="w-10 text-black"
            onChange={handleChange}
          />
        </th>
        <th className="border-b-2 border-b-gray-700">
          <input
            type="number"
            name="chaos"
            placeholder="0"
            min="-10"
            max="20"
            className="w-10 text-black"
            onChange={handleChange}
          />
        </th>
      </tr>
  );
}

export default TestField;
