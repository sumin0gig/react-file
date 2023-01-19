import axios from 'axios';
import React from 'react';
import useAsync from '../customHook/useAsync';

 async function getProducts(){
	const response= await axios.get(
		'http://localhost:8080/products' // 만든 서버 주소
	)
	return response.data;
}
const Products = () => {
	const state=useAsync(getProducts,[])
	const {Loading,data,error}=state;
	if(Loading) return <div>로딩중</div>;
	if(error) return <div>에러</div>;
	if(!data) return null;

	return (
		<div>
			{data.products.map(v=><div>
				<p>{v.name}</p>
				<p>{v.price}</p>
				<p>{v.seller}</p>
			</div>)}
		</div>
	);
};

export default Products;