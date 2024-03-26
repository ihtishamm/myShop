import styled from "@emotion/styled";
import { Box, Button, Card ,Typography} from "@mui/material";


export default function Newletter() {

    const Buttons = styled(Button)({
        height:"40px",
        width:"100px"
    })
  return (
         <Box height={190} width={'100%'} bgcolor="#EFF2F4" textAlign="center" justifyContent="center" pt={6}>
              <Typography variant="h6" fontWeight="bolder">Subscribe on our newsletter</Typography>
              <Typography variant="body2" color="grey">Get many news from different suppliers from all over the world</Typography>
               <Box display="flex" justifyContent="center" textAlign="center" mt={4}>
                 <Card sx={{height:'40px', width:"274px"}}  >
                   <Typography p={1}  ml={-20} variant="body1" color="gray">Email</Typography>
                 </Card>
                  
                  <Buttons sx={{ml:2}} variant="contained">Subscribe</Buttons>
               </Box>
         </Box>
  )
}
    