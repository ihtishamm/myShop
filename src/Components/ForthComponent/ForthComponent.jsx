import { Box, Card, Grid } from "@mui/material";
import GedgetSource from "./GedgetsSource";
import SourceProduct from "../Maincomponents/SourceProduct";
import styled from "@emotion/styled";


export default function ForthComponent() {
    const Boxx = styled(Box)({
        display: "flex",
        flexWrap: 'wrap'
    })
  return (
            <Card sx={{ mt: 3 }}>
            <Boxx sx={{ height: "257px", maxHeight: "257px", width: "1180px", maxWidth: "1180px", }}>


                <Grid container  spacing={0}>
                    <Grid item xs={2.9}>
                        <Box>
                         <GedgetSource/>
                        </Box>
                    </Grid>
                    <Grid item  xs={9.1}>
                        <Grid Container spacing={0}   height="127px"  display="flex" 
                        rowGap={0}
                         >
                            <Grid item xs={4} >
                                <SourceProduct/>
                            </Grid>
                            <Grid item xs={4} > <SourceProduct/></Grid>
                            <Grid item xs={4} > <SourceProduct/></Grid>
                            <Grid item xs={4} > <SourceProduct/></Grid>
                        </Grid>
                        <Grid Container spacing={0} height="127px"  display="flex" 
                        rowSpacing={3} mt={1}
                        >
                            <Grid item xs={4} ><SourceProduct/></Grid>
                            <Grid item xs={4}><SourceProduct/></Grid>
                            <Grid item xs={4}><SourceProduct/></Grid>
                            <Grid item xs={4}><SourceProduct/></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Boxx>

        </Card>
  )
}
