import React from 'react'

function BossPenalty() {
  return (
    <div>
        <h2>Have you beaten major bosses?</h2>
        <input type="checkbox" name="Part one completion" id="partOneCompletion" />Completed Kitava part 1{"(-30% to all resistances)"}
        <br />
        <input type="checkbox" name=" Part two completion" id="partTwoCompletion" />Completed Kitava part 2{"(-30% to all resistances)"}
    </div>
  )
}

export default BossPenalty