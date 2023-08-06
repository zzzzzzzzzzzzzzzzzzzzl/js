import React, { useState } from "react";

export function PerformanceStatistics(frameRate) {
  const [fps, setfps] = useState(0);

  return <div>fps:{fps}</div>;
}
