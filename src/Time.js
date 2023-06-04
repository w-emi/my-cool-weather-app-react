import React from "react";

export default function Time(props) {
  let unit = "";
  let hours = props.time.getHours();
  if (hours > 12) {
    hours = hours - 12;
    unit = "PM";
  } else {
    unit = "AM";
  }
  let minutes = props.time.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return (
    <div>
      {hours}:{minutes} {unit}
    </div>
  );
}
