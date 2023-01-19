import { useEffect, useReducer } from 'react';
// 상태 초기화
const initialState= {
	Loading: false, // Loading 일때 상태
	data: null, // data를 성공적으로 받았을 때 상태
	error: null // error가 발생했을 경우 상태
}

// reducer 구현
function reducer(state,action){
	switch (action.type) {
		case 'LOADING':
			return {
				Loading: true,
				data: null,
				error: null
			}
		case 'SUCCESS':
			return {
				Loading: false,
				data: action.data,
				error: null
			}
		case 'ERROR':
			return {
				Loading: false,
				data: null,
				error: action.error
			}
	
		default:
			break;
	}
}
const useAsync = (callback, deps=[]) => {
	const [state,dispatch]= useReducer(reducer,initialState)
	// 데이터 요청 함수
	const fetchData= async ()=>{
		// Loading값을 true
		dispatch({type:"LOADING"});
		// error
		try{
			const data= await callback();
			dispatch({type:"SUCCESS", data})
			// data는 data:data 를 줄여쓴 것이다.
		}
		catch(e){
			dispatch({type:"ERROR", error: e})
		}
	};
	useEffect(()=>{
		fetchData();
	},deps)


	return state;
};



export default useAsync;