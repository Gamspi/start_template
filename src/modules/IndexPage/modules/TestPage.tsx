import React,{memo} from 'react';
import {useAction} from "../../Core/hooks/useActions";
import {useTypeSelector} from "../../Core/hooks/useTypeSelector";

const TestPage = () => {
	const {setIsLoading} = useAction()
	const {isLoading} = useTypeSelector(state => state.test)
	const clickHandler = () => {
		setIsLoading(!isLoading)
	}
	return (
		<div>
			{isLoading && <h2>isLoading</h2>}
			<button onClick={clickHandler} style={{padding:12, border: '1px solid black'}}>setIsLoadingRedux</button>
		</div>
	);
};

export default memo(TestPage);
