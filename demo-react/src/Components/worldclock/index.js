import "./worldclock.css"
function WorldClock ({tenThanhPho, muiGio}){

    function convertTime(offset) {
        // create Date object for current location
        var localTime = new Date();
  
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        const utcTime = localTime.getTime() + (localTime.getTimezoneOffset() * 60000);
  
        // create new Date object for different city
        // using supplied offset
        const cityTime  = new Date(utcTime + (3600000*offset));
  
        // return time as a string
        return cityTime.toLocaleString()
    }  

    return(
        <div className = "worldClock">
            <div className = "component">
            <div className = "country">{tenThanhPho}</div>
            <div className = "time">{convertTime(muiGio)}</div>
            </div>
        </div>
    )
}

export default WorldClock