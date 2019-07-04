import React from 'react';
import PostList from '../components/PostList';
import { TEST_SAGA_REQUEST } from '../reducers/post';
import { useSelector, useDispatch } from 'react-redux';
import { Progress, Tooltip, Row, Col, message } from 'antd';
import styled from 'styled-components';

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
const SkilBox = styled.div`
 	margin-top: 30px;
	 text-align: center;
	& p {
		text-align: center;
	}
`;

const dongik = () => {
	message.info('테스트 성공입니다.');
}


const Introduce = () => {
	
	return (
		<>
			<Wrap>
				<button onClick={dongik}>TEST CLICK</button>
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
							<Progress type={'circle'} percent={86} strokeColor={'blbrownack'}/>
						</Col>
					</SkilBox>
				</Row>
			</Wrap>
		</>
	);
};

export default Introduce;