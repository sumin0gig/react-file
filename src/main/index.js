import axios from 'axios';
import React from 'react';
import ProductList from '../component/ProductList';
import './index.css'
import useAsync from '../customHook/useAsync';

async function productFetch(){
	const response= await axios.get('http://localhost:8080/products');
	return response.data;
}
const Mainpage = () => {
	const state=useAsync(productFetch,[]);
	const {Loading,data,error}= state;
	if(Loading) return <div>로딩중</div>;
	if(error) return <div>에러발생</div>;
	if(!data) return null;
	return (
		<div className='main'>
			<div className='visual'>
				<img src='images/banner1.jpg' alt='배너이미지'/>
			</div>
			<div className='product'>
				<h2>신상품</h2>
				<ul>
					{data.map(v=> <ProductList 
					p_id={v.p_id} 
					p_name={v.p_name} 
					p_price={v.p_price} 
					p_desc={v.p_desc}
					p_img={v.p_img}
					/>)}
				</ul>
			</div>
		</div>
	);
};

export default Mainpage;