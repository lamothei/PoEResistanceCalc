import React from 'react';
import TestField from './TestField';

function AddResistance({ slots, updateSlot }) {
   return (
    <div>
      <h2>Now to add resistances!</h2>
      <div className="grid grid-flow-col text-center p-2">
        <table className="justify-center items-center">
          <tbody>
            <tr>
              <th className="border-b-2 border-b-gray-700"></th>
              <th className="border-b-2 border-b-gray-700">Fire %</th>
              <th className="border-b-2 border-b-gray-700">Cold %</th>
              <th className="border-b-2 border-b-gray-700">Lightning %</th>
              <th className="border-b-2 border-b-gray-700">Chaos %</th>
            </tr>
            {slots.map((slot) => (
              <TestField key={slot.name} slot={slot} updateSlot={updateSlot}/>
            ))}
            {/*<tr>
                    <th className="border-b-2 border-b-gray-700">Main hand</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                 <tr>
                    <th className="border-b-2 border-b-gray-700">Off hand</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                <tr>
                    <th className="border-b-2 border-b-gray-700">Helm</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                <tr>
                    <th className="border-b-2 border-b-gray-700">Chest</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                <tr>
                    <th className="border-b-2 border-b-gray-700">Gloves</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                <tr>
                    <th className="border-b-2 border-b-gray-700">Boots</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                <tr>
                    <th className="border-b-2 border-b-gray-700">Ring 1</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                <tr>
                    <th className="border-b-2 border-b-gray-700">Ring 2</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                <tr>
                    <th className="border-b-2 border-b-gray-700">Amulet</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr>
                <tr>
                    <th className="border-b-2 border-b-gray-700">Misc</th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                    <th className="border-b-2 border-b-gray-700"><input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' /></th>
                </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddResistance;
