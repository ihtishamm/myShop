
import ProductCard2 from './ProductCard2'

 import {useSelector} from 'react-redux'
 
export default function ItemCard() {

     const items = useSelector((state) => state.CartAll.items)
    return (
        
             <ul style={{marginRight:'15px'}}>
             
                {items.map((item) => (
                    <ProductCard2
                          {...item} key={item.id}
                    />
                ))}
            </ul>
        
    );
}

