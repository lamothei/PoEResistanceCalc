import AddResistance from './components/AddResistance';
import BossPenalty from './components/BossPenalty';
import RaisedCaps from './components/RaisedCaps';
import TotalRes from './components/TotalRes';
import WeaponChoice from './components/WeaponChoice';
import { useState, useEffect } from 'react';

function createSlot (title){
  return {
  fire: 0,
  cold: 0,
  lightning: 0,
  chaos: 0,
  name: title
  }
}

function App() {
  const [slots, setSlots] = useState([
    createSlot('Helmet'),
    createSlot('Chest'),
    createSlot('Gloves'),
    createSlot('Boots')
])


function updateSlot(slot) {
  const index = slots.findIndex((s) => s.name === slot.name);
  const newSlots = [...slots];
  newSlots[index] = slot;
  setSlots(newSlots);
}




  return (
    <div className="bg-sanctum bg-cover h-screen bg-no-repeat bg-top bg-black ">
      <div className="text-yellow-50 bg-black mx-auto max-w-screen-xl py-5 px-32 bg-gradient-to-br h-fit">
        <div  className="grid grid-flow-row gap-5 text-center p-2">
          <BossPenalty />
          <RaisedCaps />
          <WeaponChoice />
          <AddResistance slots={slots} updateSlot={updateSlot}/>
          <TotalRes slots={slots}/>
        </div>
      </div>
    </div>
  );
}

export default App;
