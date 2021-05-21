import React, {useEffect} from 'react';
import classes from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';



const products = [{
    id : 1,
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
    id : 2,
    images: {'#0E0E0E': 'shoe1-0E0E0E.png', 
    '#5E2337' : 'shoe1-5E2337.png', 
    '#64CBB6' : 'shoe1-64CBB6.png', 
    '#C9BF2F' : 'shoe1-C9BF2F.png'},    
    title: 'Meeflo',
    sizes: [7,8,9,10],
    colors: ['#0E0E0E', '#5E2337',  '#64CBB6', '#C9BF2F'],
    price: 17.23,
    
}]


export default function Products(props) {

    useEffect(() => {
      document.title = 'Products';
    }, []);
 
    return (
        <div className = {classes.products}>
            {
                products && products.map(product => {
                    return <ProductItem 
                    key = {product.id}
                    title = {product.title} 
                    sizes = {product.sizes} 
                    colors = {product.colors}
                    price = {product.price}
                    images = {product.images}
                    id = {product.id}
                    /> 
                    
                })
            }                         
        </div>
    )
}
