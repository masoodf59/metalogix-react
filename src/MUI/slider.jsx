import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      
    </div>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Slider from '@mui/material/Slider';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';

// export default function ContinuousSlider() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: 200 }}>
//       <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
//         <VolumeDown />
//         <Slider aria-label="Volume" value={value} onChange={handleChange} />
//         <VolumeUp />
//       </Stack>
      
//     </Box>
//   );
// }