import React from 'react';
import classes from './Paging.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productsActions } from '../../../redux/reducers/products-reducer';

export default function Paging() {

    const totalPages = useSelector(state => state.productsReducer.totalPages)
    const currentPage = useSelector(state => state.productsReducer.currentPage)

    const dispatch = useDispatch()

    const pageHandler = (page) => {
        dispatch(productsActions.paginator(page));
    }


    return (
        <div className={classes.paging}>
            <ul className = {classes.pages}>
            {Array.from(Array(totalPages), (e, i) => {
                return <li key={i + 1} className={classes.page} onClick = {e => pageHandler(i + 1)}>{i + 1}</li>
            })}
            </ul>          
        </div>
    )
}
