import { Card, Checkbox, FormControl, FormLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function FeaturedCard() {
    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
          <Card sx={{height:'62px', width:'920px', maxHeight:'62px', ml:5, maxWidth:'920px', justifyContent:'flex-end'}}>
             
            <Stack direction={"row"}>
             <Typography display={"flex"} m={2} mt={2.5}>12,911 items in    <span > <Typography ml={1}  fontWeight="bold">Mobile accessory</Typography>  </span></Typography>
               <Checkbox {...FormLabel} defaultChecked  sx={{ml:35}}/>
               <Typography mt={2.5}>Verfied only</Typography>
                <FormControl sx={{m:0.5,  ml:2,width:'172px'}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          sx={{width:172, height:40,mt:1,}}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Featured</em>
          </MenuItem>
          <MenuItem value={10}>Mobile Accessories</MenuItem>
          <MenuItem value={20}>Automobile cars</MenuItem>
          <MenuItem value={30}>Jet Engine</MenuItem>
        </Select>
      </FormControl>
             </Stack>
          </Card>
  )
}
