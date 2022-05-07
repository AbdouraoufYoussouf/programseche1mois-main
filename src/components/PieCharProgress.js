import React from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const PieCharProgress = () => (
  <div style={{ width: '30px' }}>
    <CircularProgressbar
      percentage={50}
      strokeWidth={45}
      backgroundPadding={7}
      background
      styles={{
        path: {
          strokeLinecap: 'butt',
        },
        trail: {
          stroke: 'transparent',
        },
      }}
    />
  </div>
);
