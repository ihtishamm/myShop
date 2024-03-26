import DoneTwoTone from "@mui/icons-material/DoneTwoTone";
import {   Card, Divider, Stack, Table, TableBody, TableCell, Typography } from "@mui/material";

export default function ProductDescription() {
  return (
    <Card sx={{ width: '880px', minWidth:'880px', height: '618px', mt: 2 }}>

      <Stack direction={"row"} spacing={4} m={2} ml={4}  >
        <Typography fontSize={16} sx={{ color: "#8B96A5" }}  >Description</Typography>
        <Typography fontSize={16} sx={{ color: "#8B96A5" }}  >Reviews</Typography>
        <Typography fontSize={16} sx={{ color: "#8B96A5" }}  >Shipping</Typography>
        <Typography fontSize={16} sx={{ color: "#8B96A5" }}  >About Seller</Typography>

      </Stack>
      <Divider sx={{ mt: 1 }} orientation="horizontal" />

      <Typography sx={{ color: '#606060', m: 4, mb:2,  mt:1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio non repudiandae recusandae voluptates placeat adipisci tempore rem modi sit, repellendus fuga nam nulla vel cumque voluptas iure omnis officiis!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus minus minima itaque sed ad iure, sapiente, unde cum exercitationem deserunt vero similique voluptatum deleniti libero rerum sequi aliquam odit quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem debitis veritatis delectus magni, sapiente nisi rerum. Beatae fugit expedita quidem repudiandae quis facere repellendus vitae voluptas odio, reiciendis explicabo aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae sequi aut, rem ea ipsum sit mai</Typography>

       <Table sx={{width:"567px", height:"180px",maxHeight:"180px", borderCollapse:'collapse', border:'1px solid  #E0E0E0', ml:4, mt:0.4}}>
                 <TableBody sx={{maxHeight:'36px', height:'36px', borderCollapse:'collapse'}}>
    <TableCell  sx={{borderCollapse:'collapse', bgcolor:'#EFF2F4',width:'40%', height:'15px'}} ><Typography>Modal</Typography></TableCell>
   <TableCell sx={{ml:1}}><Typography>#453443</Typography></TableCell>
  </TableBody>
     <TableBody sx={{maxHeight:'36px', height:36, borderCollapse:'collapse'}}>
    <TableCell sx={{borderCollapse:'collapse', bgcolor:'#EFF2F4',width:'40%'}} ><Typography>Style</Typography></TableCell>
   <TableCell sx={{ml:1}}><Typography> Classice style</Typography></TableCell>
  </TableBody>
  <TableBody sx={{maxHeight:'36px', height:36, borderCollapse:'collapse'}}>
    <TableCell sx={{borderCollapse:'collapse', bgcolor:'#EFF2F4',width:'40%'}} ><Typography>Certificate</Typography></TableCell>
   <TableCell sx={{ml:1}}><Typography>ISO-54435435</Typography></TableCell>
  </TableBody>
  <TableBody sx={{maxHeight:'36px', height:36, borderCollapse:'collapse'}}>
    <TableCell sx={{borderCollapse:'collapse', bgcolor:'#EFF2F4',width:'40%'}} ><Typography>Size</Typography></TableCell>
   <TableCell sx={{ml:1}}> <Typography>360mm x 540mm x 435mm </Typography></TableCell>
  </TableBody>
  <TableBody sx={{maxHeight:'36px', height:36, borderCollapse:'collapse'}}>
    <TableCell sx={{borderCollapse:'collapse', bgcolor:'#EFF2F4',width:'40%'}} ><Typography>Memory</Typography></TableCell>
   <TableCell sx={{ml:1}}><Typography>36gb Ram</Typography></TableCell>
  </TableBody>
       </Table>
  
           <Stack>
      <Stack direction={"row"} mt={1} ml={4}>
                         <DoneTwoTone sx={{color:'gray'}} />
                          <Typography ml={1} >Some great features name here</Typography>
                      </Stack>
                      <Stack direction={"row"} ml={4}>
                         <DoneTwoTone sx={{color:'gray'}} />
                          <Typography ml={1} >Some great features name here</Typography>
                      </Stack>

               </Stack>
    </Card>

  )
}
