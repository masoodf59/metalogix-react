import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import Chip from '@mui/material/Chip';

export default function BadgeMax() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    return (
        <div className='mt-4 '>
            <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                {/* <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
      </Badge> */}

                <Chip label="Clickable" onClick={handleClick} />
                <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            </Stack>
        </div>
    );
}

//////////// BADGE END ///////////////


// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// export default function ImageAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//     </Stack>
//   );
// }
