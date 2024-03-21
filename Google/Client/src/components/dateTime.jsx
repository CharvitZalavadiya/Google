import React, { useState, useEffect, useMemo } from "react";

function DateTime() {
 const [currentTime, setCurrentTime] = useState(new Date());

 useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
 }, []);

 const formattedTime = useMemo(() => currentTime.toLocaleTimeString(), [currentTime]);
 const formattedDate = useMemo(() => currentTime.toLocaleDateString(), [currentTime]);

 return (
    <div>
      {formattedTime}
      <br />
      {formattedDate}
    </div>
 );
}

export default DateTime;