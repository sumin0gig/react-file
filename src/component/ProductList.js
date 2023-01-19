import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = ({p_id,p_name,p_price,p_desc,p_img}) => {
	return (
		<div>
			<li key={p_id}>
				<Link to={`/detailView/${p_id}`}>
					<img src={p_img} alt=''/>
					<h3>{p_name}</h3>
					<p>가격: {p_price}원</p>
					<p>{p_desc}</p>
				</Link>
			</li>
		</div>
	);
};

export default ProductList;