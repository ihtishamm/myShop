/* eslint-disable react/no-unescaped-entities */

import { Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';



export default function CustomSeparator() {
    
  const breadcrumbs = [
    <Link underline="hover" key={1} color="#8B96A5" href="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#8B96A5"
    
    >
       Clothings
    </Link>,
     <Link
      underline="hover"
      key="3"
      color="#8B96A5"
    
    >
       Men's wear
    </Link>,
     <Link
      underline="hover"
      key="4"
      color="#8B96A5"
    
    >
        Summer clothing
    </Link>
  ];

  return (
<Box sx={{height:'30px',maxHeight:30, width:'auto'}} padding={2}>
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
                            
    </Stack>
    </Box>
  );
}