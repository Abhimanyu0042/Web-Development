import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, loadProducts } from '../../Redux/Slices/ProductSlice';
import SingleProduct from './SingleProduct';
import './ProductList.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; 

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    const status = useSelector(state => state.productReducer.status);

    useEffect(() => {
        dispatch(fetchData());
    },[])

    if(status === "loading"){
        return<AiOutlineLoading3Quarters/>
    }


  return (
    <div className='productList'>{products.map(item=><SingleProduct key={item.id} product={item}/>)}</div>
  )
}

export default ProductList