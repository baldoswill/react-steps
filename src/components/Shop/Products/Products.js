import React, { useEffect, useState } from 'react';
import classes from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Paging from '../../Shared/Paging/Paging';


export default function Products() {
    const productItems = useSelector(state => state.productsReducer.products);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        document.title = 'Products';
        setProducts(productItems);
    }, [productItems]);

    return (
        <>
            <div className={classes.products}>
                {
                    products && products.map(product => {
                        return <ProductItem
                            key={uuidv4()}
                            title={product.title}
                            sizes={product.sizes}
                            colors={product.colors}
                            price={product.price}
                            images={product.images}
                            id={product.id}
                        />

                    })
                }
            </div>
            <Paging />
        </>
    )
}
