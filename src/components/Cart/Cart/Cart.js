import React from 'react';
import classes from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
 
const products = [{
    key : 1,
    images: {'#0E0E0E': 'shoe1-0E0E0E.png', 
    '#5E2337' : 'shoe1-5E2337.png', 
    '#64CBB6' : 'shoe1-64CBB6.png', 
    '#C9BF2F' : 'shoe1-C9BF2F.png'},    
    title: 'Meeflo',
    sizes: [7,8,9,10],
    colors: ['#0E0E0E', '#5E2337',  '#64CBB6', '#C9BF2F'],
    price: 17.23,
    
},
{
    key : 2,
    images: {'#0E0E0E': 'shoe1-0E0E0E.png', 
    '#5E2337' : 'shoe1-5E2337.png', 
    '#64CBB6' : 'shoe1-64CBB6.png', 
    '#C9BF2F' : 'shoe1-C9BF2F.png'},    
    title: 'Meeflo',
    sizes: [7,8,9,10],
    colors: ['#0E0E0E', '#5E2337',  '#64CBB6', '#C9BF2F'],
    price: 17.23,    
}];

export default function Products(props) {

    
  
    return (
        <div className = {classes.cart}>
            {
                products && products.map(product => {
                    return <CartItem 
                    key = {product.key}
                    title = {product.title} 
                    sizes = {product.sizes} 
                    colors = {product.colors}
                    price = {product.price}
                    images = {product.images}
                    /> 
                    
                })
            }                         
        </div>
    )
}
