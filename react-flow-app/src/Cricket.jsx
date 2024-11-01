import { useState } from 'react'
function Cricket()
{
const [score,setScore]=useState(0)
return(
  <>
  <hr></hr>
  <hr></hr>
  <hr></hr>
  <h1>VIRAT KOHLI ON:{score}</h1>
  <button style={{color:'green'}} onClick={()=>setScore(score+1)}>ONE</button>
  <button style={{color:'orange'}} onClick={()=>setScore(score+2)}>TWO</button>
  <button style={{color:'gray'}} onClick={()=>setScore(score+3)}>THREE</button>
  <button style={{color:'pink'}} onClick={()=>setScore(score+4)}>FOUR</button>
  <button style={{color:'blue'}} onClick={()=>setScore(score+6)}>SIX</button>
  <button style={{color:'red'}} onClick={()=>setScore(0)}>RESET</button>
  </>
)
}
export default Cricket;