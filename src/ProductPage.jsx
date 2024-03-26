import { Box, Container, Divider, Stack } from "@mui/material";
import Newletter from "./Components/Maincomponents/Newletter";
import Header from "./Components/Maincomponents/Header";

import Footer from "./Components/Maincomponents/Footer";
import NavBar from "./Components/Maincomponents/Navbar";
// import Pagination from "./Components/Products/Pagination";
 import BreadCrumb from './Components/Products/BreadCrumb'
import FeaturedCard from "./Components/Products/FeaturedCard";
import CategoryFilter from "./Components/Filter/CatergoryFilter";
import BrandFilter from "./Components/Filter/BrandFilter";
import FeaturesFilter from "./Components/Filter/FeaturesFilter";
import ConditionFilter from "./Components/Filter/ConditionFilter";
import StarFilter from "./Components/Filter/StarFilter";
import ItemCard from "./Components/Products/itemCard";


export default function ProductPage() {
  
  
  return (
            
            <Box sx={{backgroundColor:"#F7FAFC"}}>
             
            <NavBar/>
             <Header/>
              
            <Container sx={{mb:2}} > 
            <BreadCrumb/>

             <Stack direction={"row"}>
               <Stack>
                <Divider sx={{ml:2}} orientation="horizontal" />
               <CategoryFilter/>
                <Divider sx={{ml:2}} orientation="horizontal" />
                 <BrandFilter/>
                 <Divider sx={{ml:2}} orientation="horizontal" />
                 <FeaturesFilter/>
                  <Divider sx={{ml:2}} orientation="horizontal" />
                  <ConditionFilter/>
                  <Divider sx={{ml:2}} orientation="horizontal" />
                  <StarFilter/>
                  <Divider sx={{ml:2}} orientation="horizontal" />
               </Stack>
              <Stack>
               <FeaturedCard/>
                 <ItemCard/>
                
                 </Stack>
                
            </Stack>
              
            </Container>
             <Newletter/> 
            <Footer/>
               </Box>
  )
}
