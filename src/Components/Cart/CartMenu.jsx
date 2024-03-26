// import { Box, Button, Card, CardMedia, Divider, Stack, Typography } from "@mui/material";
//  import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// // import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { removeAllCart, removeFromCart } from "../../Featuers/cartSlice";


// export default function CartMenu() {
//   const  {cart, totalQuantity} = useSelector((state) => state.CartAll)
//   const dispatch= useDispatch();
//     const [age, setAge]  = useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
//   return (
    
//             <Card sx={{height:552, width:880, maxWidth:880, maxHeight:552, mt:2}}>
             
//               {cart.map((data) => (
//              <><Box sx={{ width: 840, height: 136, m: 2, display: "flex" }}>

//                   <Card sx={{ width: 80, height: 80, ml: 2, }}>
//                     <CardMedia
//                       sx={{ height: " 70px", minHeight: '70px', width: "70px", minWidth: '70px', ml: 0.6, mt: 0.7 }}
//                       image={data.image}
//                       title="iphone 11" />
//                   </Card>
//                   <Stack ml={2}>

//                     <Stack direction={"row"}>
//                       <Typography variant="h6">{data.name}</Typography>
//                       <Typography sx={{ ml: 40 }} variant="h6">${data.price}</Typography>
//                     </Stack>


//                     <Typography sx={{ color: "#8B96A7" }}>Design:{data.Design}, Materail:{data.Material}</Typography>
//                     <Typography sx={{ color: "#8B96A7" }}>Type: {data.Type}</Typography>
//                     <Stack direction={"row"} justifyContent='flex-end' mt={-5} mr={-2}>
//                       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//                         <InputLabel id="demo-select-small-label">Qty</InputLabel>
//                         <Select
//                           labelId="demo-select-small-label"
//                           id="demo-select-small"
//                           value={age}
//                           label="Age"
//                           onChange={handleChange}
//                         >
//                           <MenuItem Qty="9">
//                             <em>None</em>
//                           </MenuItem>
//                           <MenuItem value={10}>3</MenuItem>
//                           <MenuItem value={20}>6</MenuItem>
//                           <MenuItem value={30}>9</MenuItem>
//                         </Select>
//                       </FormControl>
                            
//                     </Stack>
//                     <Stack direction="row" spacing={2}>
//                       <Button onClick={()=> dispatch(removeFromCart(data.id))} variant="outlined" sx={{ color: 'red', height: 30, width: 70, textTransform: 'lowercase' }}>remove</Button>
//                       <Button variant="outlined" sx={{ height: 30, width: 120, textTransform: 'lowercase' }}>Save for later</Button>
//                     </Stack>
//                   </Stack>




//                 </Box><Divider orientation="horizontal" sx={{ mt: -2 }} variant="middle" /></>
//               ))}
             

             
            

//              <Stack>
//                  <Stack direction={"row"} justifyContent="space-between" m={2} mt={4}>
//                <Link to="/productpage" style={{textTransform:'none'}}> <Button variant="contained" startIcon={<KeyboardBackspaceIcon  sx={{color:'white', height:30,borderRadius:'3px', width:"60px"}} />}>
//   Back to shop
// </Button> </Link>
//     <Button onClick={() => dispatch(removeAllCart())} variant="outlined" sx={{height:30, width:120, textTransform:'lowercase'}}>Remove all</Button>
                             
//                  </Stack>
//              </Stack>
//             </Card>
//               )
// }


import  { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, removeAllCart } from '../../Featuers/cartSlice';
  

export default function CartMenu() {
  const { cart, totalQuantity } = useSelector((state) => state.CartAll);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(totalQuantity);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Card sx={{ height: 552, width: 880, maxWidth: 880, maxHeight: 552, mt: 2 }}>
      {cart.map((data) => (
        <Box
          key={data.id}
          sx={{ width: 840, height: 136, m: 2, display: 'flex', alignItems: 'center' }}
        >
          <Card sx={{ width: 80, height: 80, ml: 2 }}>
            <CardMedia
              sx={{ height: '70px', minHeight: '70px', width: '70px', minWidth: '70px', ml: 0.6, mt: 0.7 }}
              image={data.image}
              title="iphone 11"
            />
          </Card>
          <Stack ml={2}>
            <Stack direction="row">
              <Typography variant="h6" ml='40'>{data.name}</Typography>
              <Typography sx={{ml:40 }} variant="h6">
               ${data.price}
              </Typography>
            </Stack>
            <Typography sx={{ color: '#8B96A7' }}>
              Design: {data.Design}, Material: {data.Material}
            </Typography>
            <Typography sx={{ color: '#8B96A7' }}>Type: {data.Type}</Typography>
            <Stack direction="row" justifyContent="flex-end" mt={-5} mr={-2} ml="50%">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Qty</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={quantity}
                  label="Quantity"
                  defaultValue={quantity}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => dispatch(removeFromCart(data.id))}
                variant="outlined"
                sx={{ color: 'red', height: 30, width: 70, textTransform: 'lowercase' }}
              >
                remove
              </Button>
              <Button variant="outlined" sx={{ height: 30, width: 120, textTransform: 'lowercase' }}>
                Save for later
              </Button>
            </Stack>
          </Stack>
        </Box>
      ))}
      <Divider orientation="horizontal" sx={{ mt: -2 }} variant="middle" />
      <Stack>
        <Stack direction="row" justifyContent="space-between" m={2} mt={4}>
          <Link to="/productpage" style={{ textTransform: 'none' }}>
            <Button
              variant="contained"
              startIcon={<KeyboardBackspaceIcon sx={{ color: 'white', height: 30, borderRadius: '3px', width: '60px' }} />}
            >
              Back to shop
            </Button>
          </Link>
          <Button onClick={() => dispatch(removeAllCart())} variant="outlined" sx={{ height: 30, width: 120, textTransform: 'lowercase' }}>
            Remove all
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
