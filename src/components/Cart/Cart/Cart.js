import React from 'react';
import classes from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import {useSelector} from 'react-redux';
 
export default function Products(props) {

    const items = useSelector(state => state.cartReducer.items);
  
    return (
        <div className = {classes.cart}>
            {
                items && items.map(product => {
                    return <CartItem 
                    id = {product.id}
                    title = {product.title} 
                    size = {product.size} 
                    color = {product.color}
                    price = {product.price}
                    image = {product.image}
                    /> 
                    
                })
            }                         
        </div>
    )
}
