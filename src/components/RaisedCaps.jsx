import React from 'react';

function RaisedCaps() {
  return (
    <div>
      <h2>Do to have any raised capped resistances?</h2>
      <div className='grid gap-4 grid-cols-1 justify-items-end w-32'>
        <div>
          Fire %<input type="number" name="fireCap" id="fireCap" placeholder='0' min='-10' max='20' className='w-10 text-black' />
        </div>
        <div>
          Cold %<input type="number" name="coldCap" id="coldCap" placeholder='0' min='-10' max='20' className='w-10 text-black' />
        </div>
        <div>
          Lightning %<input type="number" name="lightningCap" id="lightningCap" placeholder='0' min='-10' max='20' className='w-10 text-black' />
        </div>
        <div>
          Chaos %<input type="number" name="chaosCap" id="chaosCap" placeholder='0' min='-10' max='20' className='w-10 text-black' />
        </div>
      </div>
    </div>
  );
}

export default RaisedCaps;