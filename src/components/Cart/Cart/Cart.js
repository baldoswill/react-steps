import React, {useState, useEffect, useCallback, useRef} from 'react';
import classes from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import {useSelector, useDispatch} from 'react-redux';
import { getItemsFromCart } from '../../../redux/actions/cart-action';

export default function Products(props) {

    const [pageNumber, setPageNumber] = useState(1);
    let lastIndexRef = useRef(3);
    const dispatch = useDispatch();

    let items = useSelector(state => state.cartReducer.items);
    let hasMore = useSelector(state => state.cartReducer.hasMore);
    let loading = useSelector(state => state.cartReducer.loading);    
 
    useEffect(() => {	
		dispatch(getItemsFromCart(pageNumber, lastIndexRef.current));						
	}, [pageNumber, lastIndexRef.current]);

    const observer = useRef();
	const lastItemRef = useCallback(node => {
        
		if(loading) return
		if(observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting && hasMore > 0){
				setPageNumber(prevPageNumber => lastIndexRef.current + 1);
                lastIndexRef.current = lastIndexRef.current + 3;
			}
		});

		if(node) observer.current.observe(node)

	}, [loading, hasMore]);


    if(items.length < 1){
        items =   <h4 className = {classes.emptyCart}>Empty Cart</h4>;                                  
    }else{       
        items = items.map((product, index) => {               
            if(items.length === index + 1){      
                                        
                return <CartItem 
                lastItemRef = {lastItemRef}
                id = {product.id}
                title = {product.title} 
                size = {product.size} 
                color = {product.color}
                price = {product.price}
                image = {product.image}
                key = {product.id}
                />    
            }else{
              
                return <CartItem 
                id = {product.id}
                title = {product.title} 
                size = {product.size} 
                color = {product.color}
                price = {product.price}
                image = {product.image}
                key = {product.id}
                />     
            }				
                   
        });
    }
    
  
    return (
        <div className = {classes.cart}>
            {items}                                    
        </div>
    )
}
