import { Box, Card,  CardMedia, Stack, Typography } from "@mui/material";


export default function Maylike() {
  return (
             <Card sx={{width:'280px', minWidth:'280px', height:'553px', m:2, ml:2.4}}>
                  <Typography variant="h6" sx={{m:2}} fontWeight="bold">You may like</Typography>
               
                 <Stack spacing={1}>
                           <Box display={"flex"}>
                        <Card sx={{width:80, height:80,  ml:2,}}>
                            <CardMedia
                                 sx={{ height: " 70px",minHeight:'70px' , width:"70px", minWidth:'70px' ,ml:0.6, mt:0.7}}
                                  image="src/Components/Resources/image33.png"
                                title="iphone 11" />
                             </Card>
                                 <Stack ml={2}>
                                    <Typography sx={{color:'#ICICIC'}} fontSize={16}>Men Suit Cot</Typography>
                                <Typography  sx={{color:'#ICICIC'}} fontSize={16}>Elegant Formal</Typography>
                                <Typography sx={{color:"#8B96A7"}}>$7.0 - $99.0</Typography>
                                 </Stack>
                              </Box>
                              <Box display={"flex"}>
                        <Card sx={{width:80, height:80,  ml:2,}}>
                            <CardMedia
                                 sx={{ height: " 70px",minHeight:'70px' , width:"70px", minWidth:'70px' ,ml:0.6, mt:0.7}}
                                  image="src/Components/Resources/image33.png"
                                title="iphone 11" />
                             </Card>
                                 <Stack ml={1}>
                                    <Typography sx={{color:'#ICICIC'}} fontSize={16}>Men Suit Cot</Typography>
                                <Typography  sx={{color:'#ICICIC'}} fontSize={16}>Elegant Formal</Typography>
                                <Typography sx={{color:"#8B96A7"}}>$7.0 - $99.0</Typography>
                                 </Stack>
                              </Box>
                              <Box display={"flex"}>
                        <Card sx={{width:80, height:80,  ml:2,}}>
                            <CardMedia
                                 sx={{ height: " 70px",minHeight:'70px' , width:"70px", minWidth:'70px' ,ml:0.6, mt:0.7}}
                                  image="src/Components/Resources/image33.png"
                                title="iphone 11" />
                             </Card>
                                 <Stack ml={1}>
                                    <Typography sx={{color:'#ICICIC'}} fontSize={16}>Men Suit Cot</Typography>
                                <Typography  sx={{color:'#ICICIC'}} fontSize={16}>Elegant Formal</Typography>
                                <Typography sx={{color:"#8B96A7"}}>$7.0 - $99.0</Typography>
                                 </Stack>
                              </Box>
                              <Box display={"flex"}>
                        <Card sx={{width:80, height:80,  ml:2,}}>
                            <CardMedia
                                 sx={{ height: " 70px",minHeight:'70px' , width:"70px", minWidth:'70px' ,ml:0.6, mt:0.7}}
                                  image="src/Components/Resources/image33.png"
                                title="iphone 11" />
                             </Card>
                                 <Stack ml={1}>
                                    <Typography sx={{color:'#ICICIC'}} fontSize={16}>Men Suit Cot</Typography>
                                <Typography  sx={{color:'#ICICIC'}} fontSize={16}>Elegant Formal</Typography>
                                <Typography sx={{color:"#8B96A7"}}>$7.0 - $99.0</Typography>
                                 </Stack>
                              </Box>
                              <Box display={"flex"}>
                        <Card sx={{width:80, height:80,  ml:2,}}>
                            <CardMedia
                                 sx={{ height: " 70px",minHeight:'70px' , width:"70px", minWidth:'70px' ,ml:0.6, mt:0.7}}
                                  image="src/Components/Resources/image33.png"
                                title="iphone 11" />
                             </Card>
                                 <Stack ml={1}>
                                    <Typography sx={{color:'#ICICIC'}} fontSize={16}>Men Suit Cot</Typography>
                                <Typography  sx={{color:'#ICICIC'}} fontSize={16}>Elegant Formal</Typography>
                                <Typography sx={{color:"#8B96A7"}}>$7.0 - $99.0</Typography>
                                 </Stack>
                              </Box>
                 </Stack>
             </Card>
  )
}
