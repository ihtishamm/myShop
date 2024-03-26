import { Box, Container, Divider, Stack } from "@mui/material";

 import ProductDetail from "./Components/Products/ProductDetail"
import ProductDescription from "./Components/Products/ProductDescription"
import Maylike from "./Components/Products/Maylike";
import RelatedProduct from "./Components/Products/RelatedProduct";
import DiscountCard from "./Components/Products/DiscountCard";
import Footer from "./Components/Maincomponents/Footer";
import Header from "./Components/Maincomponents/Header";
import NavBar from "./Components/Maincomponents/Navbar";
import { useParams } from "react-router-dom";
// import SaveForLater from "./Components/Cart/SaveForLater";
export default function ProductDEtailsPage() {
const Param = useParams();

  const ParamId =   Param.productId;
   
  return (
   
         <Box sx={{backgroundColor:"#F8F9FA", width:'100%'}}>
          <Header/> 
          <NavBar/>
          
          <Container sx={{mb:2}}>
               
             <Divider orientation="vertical" flexItem></Divider>
                <ProductDetail  Param = {ParamId}  />
                 <Stack direction={"row"}>
                      <ProductDescription/>
                      <Maylike/>
                     </Stack>
                 <RelatedProduct/>
                 <DiscountCard/>
          </Container>
            <Footer/>
            </Box>
  )
}
