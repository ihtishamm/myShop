import { Box, Typography} from "@mui/material";
import { Image } from 'mui-image'

export default function SuppliersCountry() {
  return (
             
            <Box height="36px" width={218} mb={2}>
                <Box display={"flex"} mt={1}>
                <Image src="https://flagicons.lipis.dev/flags/4x3/bt.svg" width={25}   height={25}/>
                <Typography variant="h6" mt={-1}  ml={2}>Keniya</Typography>
                 <Typography variant="body2" ml={-8} pt={3}>shopeme.ken</Typography>
                 </Box>
            </Box>
  )
}
