import HomePage from "./HomePage"
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductPage from "./ProductPage"
import ProductDEtailsPage from "./ProductDEtailsPage"

// import ProductPage from "./ProductPage"

import CartPage from "./CartPage"
import ScrollToTop from "./Components/ScrollToTop"
function App() {
  return (

            <BrowserRouter>
             
                <ScrollToTop>
                   <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/productpage" element={<ProductPage/>}/>
                <Route path="/productDescription/:productId" element={<ProductDEtailsPage/>}/>
                <Route path="/productDescription" element={<ProductDEtailsPage/>}/>
                <Route path="/Cart" element={<CartPage/>}/>
                
               
              </Routes>
               </ScrollToTop>
              </BrowserRouter> 
            
            
          //  <ProductPage/>

   )
}

export default App
