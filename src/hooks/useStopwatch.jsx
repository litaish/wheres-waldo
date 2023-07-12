import { useEffect, useState } from 'react';

export function useStopwatch() {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });

  const [id, setId] = useState();

  useEffect(() => {
    let id = setInterval(updateTime, 1000);
    setId(id);

    return () => clearInterval(id);
  }, []);

  const updateTime = () => {
    setTime((prevTime) => {
      let newTime = {...prevTime};
      // update sec and check if min needs to be increased
      if (newTime.sec < 59) {
        newTime.sec += 1;
      } else {
        newTime.min += 1;
        newTime.sec = 0;
      }

      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hr += 1;
      }

      return newTime;
    });
  }

  const stop = () => clearInterval(id);

  const inputProps = {
    time: time,
    stop: stop,
  }

  return inputProps;
}