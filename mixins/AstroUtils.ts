import DegMin from "../astro/DegMin"
import DegMinSec from "../astro/DegMinSec"

export function toDegMin(val : number): DegMin {
  const absVal = Math.abs(val)
  const deg = Math.floor(absVal)
  const rem = (absVal - deg) * 60
  const min = Math.floor(rem)
  return { deg , min}
}

export function toDegMinSec(val : number): DegMinSec {
  const absVal = Math.abs(val)
  const deg = Math.floor(absVal)
  const rem = (absVal - deg) * 60
  const min = Math.floor(rem)
  const sec = Math.floor((rem - min) * 60)
  return { deg, min , sec}
}