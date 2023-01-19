import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='info'>
				<div className='inner'>
					<div>
						<h2>무통장 입금 계좌</h2>
						<div>
							<p>BANK ACCOUNT</p>
							<p>301-1234-5678-01</p>
							<p>예금주 김헤라</p>
							</div>
					</div>
					<div>
						<h2>고객센터</h2>
						<div>
							<p>rhrortpdfksjdifjdijskdfkdifsisisi</p>
							<p>02-1263-1245</p>
						</div>
					</div>
					<div>
						<h2>공지사항</h2>
						<ul>
							<li>화장품 가이드 2023-01-19</li>
							<li>화장품 입고 안내 2023-01-11</li>
							<li>몰 오픈을 축하드립니다 2023-01-05</li>
						</ul>
					</div>
				</div>

			</div>
			<div className='footermenu'>
				<div className='inner'>
					<ul>
						<li>HOME</li>
						<li>매장 안내</li>
						<li>이용약관</li>
						<li>개인정보 처리방침</li>
					</ul>
				</div>
			</div>
			<div className='address'>
				<div className='inner'>
					상호:어저구저저구 주소:어저구적저겆갸자갸가주 저가자 대표전화:엊냐냐냐냐
				</div>
			</div>
		</div>
	);
};

export default Footer;