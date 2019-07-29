import React, { useState } from 'react';
import { Rate, Button, Input, Radio, Slider, Icon, Row, Col } from 'antd';
import styled from 'styled-components';

const {TextArea} = Input;

// style
const Wrap = styled.div`
	word-break: break-all;

	& section {
		margin-bottom: 40px;
	}
`;
const Title = styled.h2`
	position: relative;
	margin-bottom: 20px;
	font-size: 22px;
`;

const UserCommentForm = ({ setDrawerVisible }) => {
	const [gender, setGender] = useState('');
	const [rateState, setRateState] = useState(3);
	const [designScore, setDesignScore] = useState(0);
	const [uxScore, setUxScore] = useState(0);
	const [contentScore, setContentScore] = useState(0);
	const [speedScore, setSpeedScore] = useState(0);
	const desc = ['별로에요', '부족해요', '무난해요', '좋아요', '훌륭해요'];

	//method
	const genderChange = (e) => {
		setGender(e.target.value);
	};
	const rateChange = value => {
		setRateState(value);
	};
	const designChange = value => {
		setDesignScore(value);
	};
	const uxChange = value => {
		setUxScore(value);
	};
	const contentChange = value => {
		setContentScore(value);
	};
	const speedChange = value => {
		setSpeedScore(value);
	};
	const drawerSubmit = () => {
		setDrawerVisible(false);
	};
	

	return (
		<>
			<Wrap>
				<section className="user-info">
					<Title>당신의 정보를 알려주세요.</Title>
					<Radio.Group onChange={genderChange} value={gender}>
						<Radio value='남자'>남자</Radio>
						<Radio value='여자'>여자</Radio>
					</Radio.Group>
				</section>
				
				<section>
					<Title>사용감이 어떤가요?</Title>
					<div className="icon-wrapper">
						<Row>
							<Col span={6}>디자인</Col>
							<Col span={18}>
								<Slider min={0} max={10} onChange={designChange} value={designScore} />
							</Col>
						</Row>
					</div>
					<div className="icon-wrapper">
						<Row>
							<Col span={6}>UX/UI</Col>
							<Col span={18}>
								<Slider min={0} max={10} onChange={uxChange} value={uxScore} />
							</Col>
						</Row>
					</div>
					<div className="icon-wrapper">
						<Row>
							<Col span={6}>포스트 내용</Col>
							<Col span={18}>
								<Slider min={0} max={10} onChange={contentChange} value={contentScore} />
							</Col>
						</Row>
					</div>
					<div className="icon-wrapper">
						<Row>
							<Col span={6}>속도/성능</Col>
							<Col span={18}>
								<Slider min={0} max={10} onChange={speedChange} value={speedScore} />
							</Col>
						</Row>
					</div>
				</section>

				<section>
					<Title>제안하고 싶은 기능이 있으신가요?</Title>
					<TextArea rows={6}></TextArea>
				</section>

				<section className="rate">
					<Title>블로그 평점주기</Title>
					<span>
					<p>
						전반적인 블로그의 내용, 디자인, 사용편의성 등등 이용하기에 어떤가요?
					</p>
					<Rate tooltips={desc} onChange={rateChange} value={rateState} />
					{rateState ? <span className="ant-rate-text">{desc[rateState - 1]}</span> : ''}
					</span>
				</section>

				<Button onClick={drawerSubmit} style={{ float: 'right' }}>Submit</Button>
			</Wrap>
		</>
	);
};

export default UserCommentForm;