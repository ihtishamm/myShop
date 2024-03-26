import { Box } from '@mui/material'
import Container from '@mui/material/Container'
 import Header from "./Components/Maincomponents/Header"
import Navbar from "./Components/Maincomponents/Navbar"
import FirstComponent from "./Components/FirstComponent/FirstComponent"
import SecondComponent from "./Components/SecondComponent/SecondComponent"
import ThirdComponent from "./Components/ThirdComponent/ThirdComponent"
import ForthComponent from "./Components/ForthComponent/ForthComponent"
import RecomemdedItems from "./Components/Recomemded_Items/RecomemdedItems"
import ExtraServices from "./Components/ExtraServices/ExtraServices"
import Suppliers from "./Components/Suppliers/Suppliers"
import Newletter from "./Components/Maincomponents/Newletter"
import Footer from './Components/Maincomponents/Footer'
   
export default function HomePage() {
  return (
             
       <Box sx={{backgroundColor:"#F7FAFC"}}>
          
            <Navbar/>
             <Header/>
            <Container sx={{mb:2}} > 
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <ForthComponent/>
            <RecomemdedItems/>
            <ExtraServices/> 
             <Suppliers/> 
            </Container>
             <Newletter/>
            <Footer/>
               </Box>
  )
}
