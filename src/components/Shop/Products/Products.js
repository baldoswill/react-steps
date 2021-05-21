import React, {useEffect} from 'react';
import classes from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';
import {useSelector} from 'react-redux';
 
export default function Products(props) {
 
    useEffect(() => {
      
    }, []);

    document.title = 'Products';
    const products = useSelector(state => state.productsReducer.products)
 
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
