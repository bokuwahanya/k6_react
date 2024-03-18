import MyClockTime from "./MyClockTime";
import MyClockimage from "./MyClockimage";

function MyClock() {
    return(
        <>
        <div className="mainArea">
        <MyClockimage/>
        <MyClockTime/>
        </div>
        
        </>
        
    );
};

export default MyClock;