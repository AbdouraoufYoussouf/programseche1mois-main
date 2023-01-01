import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';



export default function Checkboxe({id,checked,handleChange}) {
  console.log('je ui clique')

  return (
    <div>
      
      <Checkbox onChange={()=> handleChange()}
        checked={checked}
        id={id}
        sx={{
          color: pink[50],
          '&.Mui-checked': {
            color: pink[100],
          },
        }}
      />
    </div>
  );
}
