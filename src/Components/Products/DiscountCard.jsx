
import { Button, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const DiscountCardWrapper = styled(Card)({
    background: "linear-gradient(90deg, rgba(35,124,255,1) 65%, rgba(0,90,222,1) 66%)",
});

export default function DiscountCard() {
    return (
        <DiscountCardWrapper sx={{width:"1180px", height:'120px', mt:2,}}>
             
              <Stack direction={"row"} justifyContent={"space-between"}>
               <Stack>
            <Typography variant="h6" sx={{color:'white', m:4, mb:1}}>Super discount on more than 100 USD</Typography>
            <Typography  fontSize={12} sx={{color:'white', ml:4, mt:-1}}>Have you ever just write a dummy website </Typography>
            </Stack>
             <Button sx={{bgcolor:'orange', color:'white', width:'100px',  height:40 ,mt:4, mr:4}}>Shop now</Button>
</Stack>
        </DiscountCardWrapper>
    );
}
