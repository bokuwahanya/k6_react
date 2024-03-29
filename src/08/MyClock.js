import MyClockimage from "./MyClockimage";
import MyClockTime from "./MyClockTime";
import "./MyClock.css" ;

function MyClock() {
  return (
    <div className="mainArea">
    <h1 className="font-bold text-2xl">똑딱똑딱 시계는 와치 시계는 와치</h1>
      <MyClockimage />
      <MyClockTime />
    </div>
  )
}

export default MyClock ;