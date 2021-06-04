import React, {useState, useState} from 'react';
import classes from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import {useSelector} from 'react-redux';
import { getItemsFromCart } from '../../../redux/actions/cart-action';


let initialLoad = true;
 
export default function Products(props) {

    const [pageNumber, setPageNumber] = useState(1);

    let items = useSelector(state => state.cartReducer.items);
    let hasMore = useSelector(state => state.cartReducer.hasMore);
    let loading = useSelector(state => state.cartReducer.loading);
    
 
    useEffect(() => {
		if(initialLoad){
			dispatch(getItemsFromCart(pageNumber));
		}				
	}, [pageNumber]);

    const observer = useRef();
	const lastItemRef = useCallback(node => {
		if(loading) return
		if(observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting && hasMore){
				setPageNumber(prevPageNumber => prevPageNumber + 1);
			}
		});

		if(node) observer.current.observe(node)

	}, [loading, hasMore]);

    if(items.length < 1){
        items =   <h4 className = {classes.emptyCart}>Empty Cart</h4>;                                  
    }else{       
        items = items.map(product => {   
            
            if(items.length === index + 1){                 
                return <CartItem 
                ref = {lastItemRef}
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
