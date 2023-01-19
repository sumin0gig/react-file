import React from 'react';
import './index.css'

const UpladPage = () => {
	return (
		<div className='upload'>
			<h2>제품등록하기</h2>
			<form action='' method=''>
				<table>
					<tbody>
					<tr>
						<td>
							상품 사진
						</td>
						<td>
							<input type="file" name='p_img'/>
						</td>
					</tr>
					<tr>
						<td>
							상품 명
						</td>
						<td>
							<input type="text" name='p_name'/>
						</td>
					</tr>
					<tr>
						<td>
							상품 소개
						</td>
						<td>
							<input type="text" name='p_info'/>
						</td>
					</tr>
					<tr>
						<td>
							상품 가격
						</td>
						<td>
							<input type="number" name='p_price'/>
						</td>
					</tr>
					<tr>
						<td>
							상품 수량
						</td>
						<td>
							<input type="number" name='p_quantity'/>
						</td>
					</tr>
					<tr>
						<td>
							상세설명
						</td>
						<td>
							<textarea name="p_desc"></textarea>
						</td>
					</tr>
					<tr>
						<td colSpan={2}>
							<button>등록</button>
							<button>취소</button>
						</td>
					</tr>
					</tbody>
				</table>
			</form>
		</div>
	);
};

export default UpladPage;