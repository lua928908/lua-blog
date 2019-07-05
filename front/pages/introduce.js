import React, { useState } from 'react';
import PostList from '../components/PostList';
import { TEST_SAGA_REQUEST } from '../reducers/post';
import { useSelector, useDispatch } from 'react-redux';
import { Progress, Tooltip, Row, Col, message, Rate, Collapse, Button } from 'antd';
const { Panel } = Collapse;
import styled from 'styled-components';

// style
const Wrap = styled.div`
	& SkilBox:first-child {
		margin-top: 0;
	}
`;
const Title = styled.h2`
	font-weight: 500;
	font-size: 20px;
	color: #1b1b1b;
`;
const QuestionBox = styled.div`
	& Collapse {
		margin-top: 40px;
	}
`;
const ColorGreen = styled.span`
	font-weight: 500;
	font-size: 16px;
	color: #008000;
`;
const SkilBox = styled.div`
 	margin-top: 30px;
	 text-align: center;
	& p {
		text-align: center;
	}
`;
const TechBox = styled.div`
	margin-top: 60px;
`;
const RateWrap = styled.div`
	margin-top: 60px;
`;


const Introduce = () => {
	const [rateState, setRateState] = useState(3);
	const desc = ['별로에요', '부족해요', '무난해요', '좋아요', '훌륭해요'];

	//method
	const handleChange = (value) => {
		setRateState(value);
	};
	const dongik = () => {
		message.info('테스트 성공입니다.');
	}
	
	return (
		<>
			<Wrap>
				<QuestionBox>
					<Title>I'm</Title>
					<Collapse accordion>
						<Panel header="적성에 맞아요" key="적성에 맞아요">
							<p>
								초,중,고 유년시절동안 스스로가 외향적이고 몸으로 하는일이 적성에 맞다고 생각하면서 공부는 거리가 멀다고 생각하고 살았는데
								근자감으로 시작한 웹에 대한 공부가 흥미있었고, 지인의 추천으로 읽었던 헤이스케의 <b>'학문의 즐거움'</b>을 읽으며 배운다는게 매력적인 일이구나 느꼇다.
								어렸을때 공부를 안해 영어,수학의 기본지식이 적은것에 아쉬움을 가지지만 어렸을때 놀기만했기에 이젠 배우는일에 많은 시간을 할애하려 한다.
							</p>
						</Panel>
						<Panel header="솔직히..." key="솔직히">
							<p>
								<b>" 개발자의 삶을 살아야겠다 "</b> 생각하면서 <Tooltip title="C언어 창시자"><ColorGreen>Dennis Ritchie</ColorGreen></Tooltip>혹은 <Tooltip title="javascript의 아버지, JSON 창시자"><ColorGreen>Douglas Crockford</ColorGreen></Tooltip> 처럼 무언가 엄청난걸 이뤄야겠다고 생각한적은 없다.
								될수도 없지만.... 다만 어느날 아이디어가 떠올랐을때 만들어보고 싶은걸 만들수 있었으면 좋겠다고 생각한다.
							</p>
						</Panel>
						<Panel header="아인슈타인에 연봉을 후려쳤다면? " key="아인슈타인에 연봉을 후려쳤다면?">
							<p>
								아인슈타인이 프린스턴 대학에 자리를 잡으려할때 아인슈타인은 연봉을 3,000달러로 제시했다, 그런데 플렉스너는 10,000달러를 제시하며 아인슈타인의 신뢰를 얻었다.
								아인슈타인의 실력이 어느정도인지 알고있었기에 몸값이 오르는건 시간문제였고 저평가 되어있던 아인슈타인에게 고액의 연봉을 제시하며 신임을 얻었고 아인슈타인이 통일장 이론을 정립,발전시키며
								루즈벨트 대통령에게 독일보다 먼저 원자폭탄을 개발해야 한다고 설득하기도 했다. 이처럼 회사와 직원이 신뢰를 구축하기 위해 서로 노력하는건 아주 중요한 문제라고 생각한다.
							</p>
						</Panel>
						<Panel header="직장이 어디세요?" key="직장이 어디세요?">
							<p>
								<img src="uploads/download.jpg" alt="spain bull"/>
								<p style={{'marginTop':'15px'}}>여긴가?</p>
							</p>
						</Panel>
					</Collapse>
				</QuestionBox>
				
				<TechBox className="wowo">
					<Title>기술 선호도</Title>
					<Row>
						<SkilBox className="box">
							<Col xl={4} md={4} xl={4}>
								<p><b>React</b></p>
								<Progress type='circle' percent={91} strokeColor={'black'}/>
							</Col>
							<Col xl={4} md={4} xl={4}>
								<p><b>Angular</b></p>
								<Progress type='circle' percent={8}/>
							</Col>
							<Col xl={4} md={4} xl={4}>
								<p><b>Vue</b></p>
								<Progress type={'circle'} percent={50} strokeColor={'pink'}/>
							</Col>
							<Col xl={4} md={4} xl={4}>
								<p><b>Node</b></p>
								<Progress type={'circle'} percent={88} strokeColor={'green'}/>
							</Col>
							<Col xl={4} md={4} xl={4}>
								<p><b>Mysql</b></p>
								<Progress type={'circle'} percent={81} strokeColor={'orange'}/>
							</Col>
							<Col xl={4} md={4} xl={4}>
								<p><b>MongoDB</b></p>
								<Progress type={'circle'} percent={34} strokeColor={'blue'}/>
							</Col>
						</SkilBox>
					</Row>
					<Row>
						<SkilBox className="box">
							<Col xl={4} md={4} xl={4}>
								<p><b>D3</b></p>
								<Progress type={'circle'} percent={86} strokeColor={'brown'}/>
							</Col>
						</SkilBox>
					</Row>
				</TechBox>

				<RateWrap>
					<Title>Lua의 첫인상 평가하기</Title>
					<span>
						<Rate tooltips={desc} onChange={handleChange} value={rateState} />
						{rateState ? <span className="ant-rate-text">{desc[rateState - 1]}</span> : ''}
					</span>
					<Button type="primary">등록</Button>
				</RateWrap>
			</Wrap>
		</>
	);
};

export default Introduce;