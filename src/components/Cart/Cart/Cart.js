import React from 'react';
import classes from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import {useSelector} from 'react-redux';
 
export default function Products(props) {

    let items = useSelector(state => state.cartReducer.items);
 
    if(items.length < 1){
        items =   <h4 className = {classes.emptyCart}>Empty Cart</h4>;                                  
    }else{
        items = items.map(product => {
            return <CartItem 
            id = {product.id}
            title = {product.title} 
            size = {product.size} 
            color = {product.color}
            price = {product.price}
            image = {product.image}
            /> 
            
        });
    }
    
  
    return (
        <div className = {classes.cart}>
            {items}                  
        </div>
    )
}
