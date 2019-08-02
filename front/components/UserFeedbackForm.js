import React, { useState, useRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rate, Button, Input, Radio, Slider, Icon, Row, Col, Select } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;
const { Option } = Select;

import { USER_FEEDBACK_REQUEST } from '../reducers/user';

// style
const Wrap = styled.div`
	word-break: break-all;

	& section {
		margin-bottom: 40px;
	}

	& .email {
		margin-top: 20px;
	}
	& .tech-wrap {
		margin-top: 20px;
	}
	& .book-wrap {
		margin-top: 20px;
	}
`;
const Title = styled.h2`
	position: relative;
	margin-bottom: 20px;
	font-size: 22px;
`;

const UserFeedbackForm = memo(({ setDrawerVisible }) => {
	const [gender, setGender] = useState('');
	const [email, setEmail] = useState('');
	const [rateState, setRateState] = useState(3);
	const [designScore, setDesignScore] = useState(0);
	const [uxScore, setUxScore] = useState(0);
	const [contentScore, setContentScore] = useState(0);
	const [speedScore, setSpeedScore] = useState(0);
	const [userText, setUserText] = useState('');
	const desc = ['별로에요', '부족해요', '무난해요', '좋아요', '훌륭해요'];
	const techList = useRef([]);
	const bookList = useRef([]);
	const dispatch = useDispatch();

	//method
	const genderChange = (e) => {
		setGender(e.target.value);
	};
	const emailChange = (e) => {
		setEmail(e.target.value);
	};
	const addTech = (value) => {
		// sequelize에 array가 postgresSQL만 지원, string으로 변환
		let transString = '';
		let len = value.length;
		value.map((v, i) =>{
			if( len === i+1 ){
				return transString += v;
			}else {
				return transString += v + ',';
			}
		})
		techList.current = transString;
	}
	const addBook = (value) => {
		// sequelize에 array가 postgresSQL만 지원, string으로 변환
		let transString = '';
		let len = value.length;
		value.map((v, i) =>{
			if( len === i+1 ){
				return transString += v;
			}else{
				return transString += v + ',';
			}
		})
		bookList.current = transString;
	}
	const rateChange = (value) => {
		setRateState(value);
	};
	const designChange = (value) => {
		setDesignScore(value);
	};
	const uxChange = (value) => {
		setUxScore(value);
	};
	const contentChange = (value) => {
		setContentScore(value);
	};
	const speedChange = (value) => {
		setSpeedScore(value);
	};
	const userTextChange = (e) => {
		setUserText(e.target.value);
	}
	const drawerSubmit = () => {
		dispatch({
			type: USER_FEEDBACK_REQUEST,
			data: {
				gender,
				email,
				rateState,
				designScore,
				uxScore,
				contentScore,
				speedScore,
				techList: techList.current,
				bookList: bookList.current,
				userText,
			}
		});
		
		// form init
		setDrawerVisible(false);
		setGender('');
		setEmail('');
		setRateState(3);
		setDesignScore(0);
		setUxScore(0);
		setContentScore(0);
		setSpeedScore(0);
		techList.current = [];
		bookList.current = [];
		setUserText('');
	};
	

	return (
		<>
			<Wrap>
				<section className="user-info">
					<Title>당신의 정보를 알려주세요.</Title>
					<div>
						<Radio.Group onChange={genderChange} value={gender}>
							<Radio value='남자'>남자</Radio>
							<Radio value='여자'>여자</Radio>
						</Radio.Group>
					</div>
					<div className="email">
						<Input value={email} type="email" onChange={emailChange} placeholder="e-mail" />
					</div>
					<div className="tech-wrap">
						추천하는 기술이 있나요?
						<Select mode="tags" style={{ width: '100%' }} onChange={addTech} tokenSeparators={[',']}>
  						</Select>
					</div>
					<div className="book-wrap">
						추천하는 책이 있나요?
						<Select mode="tags" style={{ width: '100%' }} onChange={addBook} tokenSeparators={[',']}>
  						</Select>
					</div>
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
					<TextArea value={userText} onChange={userTextChange} rows={6}></TextArea>
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
});

export default UserFeedbackForm;