import React, { useEffect, useRef, useState } from "react";
import "./ProgressBar.css";
import { Box, LinearProgress } from "@material-ui/core";
// import Box from '@mui/material/Box';

function ProgressBar({ progress, title, figure }) {
  // const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = React.useRef(() => {});

  useEffect(() => {
    if (progress) {
      setBuffer(progress + 10);
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="progressBar">
      <div className="progressBar__skills">
        <h3>{title}</h3>
        <div className="progressBar__skillsValue">
          <h5>{figure}%</h5>
          <Box className="progressBar__box">
            <LinearProgress
              className="linearProgress"
              variant="buffer"
              value={progress}
              valueBuffer={buffer}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
