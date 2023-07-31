import React, { useState } from "react";

export function PerformanceStatistics(frameRate) {
  const [fps, setfps] = useState(0);
  //   console.log(frameRate);
  //   setfps(frameRate());
  return <div>fps:{fps}</div>;
}
