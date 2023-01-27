import React from 'react'

function WeaponChoice() {
  return (
    <div>
        <h2>Are you using a 2 handed weapon?</h2>
        <input type="radio" name="weaponChoice" id="weaponChoice1" value='yes' />Yes
        <br />
        <input type="radio" name="weaponChoice" id="weaponChoice2" value='no'/>No
    </div>
  )
}

export default WeaponChoice