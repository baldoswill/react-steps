import React from 'react';
import classes from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';


const products = [{
    key : 1,
    images: ['shoe1-0E0E0E.png', 'shoe1-5E2337.png', 'shoe1-64CBB6.png', 'shoe1-C9BF2F.png'],
    title: 'Meeflo',
    sizes: [7,8,9,10],
    colors: ['#0E0E0E', '#5E2337',  '#64CBB6', '#C9BF2F'],
    price: 17.23,
    
}]


export default function Products(props) {
    return (
        <div className = {classes.products}>
            {
                products && products.map(product => {
                    return <ProductItem 
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
