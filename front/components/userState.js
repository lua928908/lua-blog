import react, { useState } from 'react';
import { Rate } from 'antd';

const userState = () => {
	const [rateState, setRateState] = useState(3);
	const desc = ['별로에요', '부족해요', '무난해요', '좋아요', '훌륭해요'];

	//method
	const handleChange = (value) => {
		setRateState(value);
	};

	<RateWrap>
		<Title>Lua의 첫인상 평가하기</Title>
		<span>
			<Rate tooltips={desc} onChange={handleChange} value={rateState} />
			{rateState ? <span className="ant-rate-text">{desc[rateState - 1]}</span> : ''}
		</span>
		<Button type="primary">등록</Button>
	</RateWrap>
};