import React, { useState, useEffect, useRef } from 'react';
import { Progress, Tooltip, Row, Col, message, Rate, Collapse, Button, Timeline, Icon } from 'antd';
const { Panel } = Collapse;
import styled from 'styled-components';

import CurrentTime from '../components/CurrentTime';

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

	& .innerList {
		margin: 30px auto;
		max-width: 780px;
		width: 100%;
	}
`;
const History = styled.div`
	margin-top: 80px;
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
	
	return (
		<>
			<Wrap>
				<QuestionBox>
					<Title>소개</Title>
					<Collapse accordion>
						<Panel header="적성에 맞아요" key="적성에 맞아요">
							<p>
								초,중,고 유년시절동안 스스로가 외향적이고 몸으로 하는일이 적성에 맞다고 생각하면서 공부는 거리가 멀다고 생각하고 살았는데
								근자감으로 시작한 웹에 대한 공부가 흥미있었고, 지인의 추천으로 읽었던 헤이스케의 <b>'학문의 즐거움'</b>을 읽으며 배운다는게 매력적인 일이구나 느꼇다.
								어렸을때 공부를 안해 영어,수학의 기본지식이 적은것에 아쉬움을 가지지만 어렸을때 놀기만했기에 이젠 배우는일에 많은 시간을 할애하고 싶다.
							</p>
						</Panel>
						<Panel header="장기전에 대비하기" key="장기전에 대비하기">
							<p>
								<h3>영어공부</h3>
								웹개발은 여러개의 톱니바퀴가 서로 맞물려 있는 것 같다. 한가지를 배우다보면 그배경지식과 해당기술에 연관되어 있는 다른 기술에 대해 알아야 전체적인
								그림이 머릿속에 그려지는것 같다. 프론트엔드와 관련된 여러가지를 공부하면서 장기적으로 오랫동안 개발자로 일하고 싶다면 두가지를 준비해야 될것 같다는 생각이 들었다.
								첫번째로 영어공부를 해야 한다는 점이다. 초반에는 영어보다 수학이 더 재밌는것 같아서 수학을 기초부터 공부하고 있었는데 막상 시간이 흐를수록 수학을 공부할게 아니라
								영어가 제일 핵심인것 같다는 생각이 들었다. 프레임워크·라이브러리의 사용법, 디버깅, 새로운 기술학습, 페이스북·아마존·구글·여러 프로젝트 등에서 발표하는
								각종 레퍼런스, 양질의 자료, 하다못해 변수명을 짓거나 DB관계형을 지정하는 것에서도 영어를 잘하는것이 훨씬 유리하다고 생각이 들었다. 그래서 ebs를 통해
								영어공부를 시작했는데 아무래도 시원스쿨이 필요할 것 같다.

								<h3 style={{ marginTop: '20px', marginBottom: '10px' }}>C++ 배우기</h3>
								유튜브의 '포프' 라는 게임개발자가 운영하는 채널에서 매지니먼트 언어와 언매니지먼트 언어를 학습하라는 내용의 동영상을 봤다. 이걸 보는순간 너무 공감이 됐고
								어느 구글의 프론트개발자가 쓴 how to become a great frontend-engineer 라는 글을 보면서 c언어를 공부하는 것이 어떤 함수의 동작이나 코드를 이해함에 있어 매우 도움이되었고
								본인의 대학시절 c언어를 배웠던걸 잘한일이라고 생각다는 내용이었다. 또, 前건국대 교수이자 현재는 미국에 어느회사 연구원으로 활동중인 '홍정모'님의 유튜브에서도 c++을 배우면서
								메모리에 대한 개념을 익히면 재귀함수를 이해하는데 도움이 된다는 내용의 영상을 봤었다. 나는 처음 재귀함수를 봤을때 너무 이상해 보였다 아직 명세(선언)를 끝내지도 않는 함수 자신을 다시
								호출한다는게 너무 이상하게 생각이 됐다. 하지만 메모리의 개념을 알고나면 재귀함수가 같은 메모리값을 참조한다는걸 알게되고 이해하는게 도움이 될거라는 내용이였다.
								이런 여러 간접경험을 통해 당장은 아니지만 꼭 c++을 배워야겠다는 생각을 했다. 내가 어떤 VR회사에 면접을 봤었을때 이와 비슷한 이야기를 했는데 면접관 분이 c++배워도 회사에서 안쓰는데
								굳이 c언어나 c++을 배울필요가 있느냐 어떤 언어든 한가지 언어만 잘다루면 굳이 필요없을것 같다는 이야기를 하셨다. 그분의 말도 맞다고 생각하지만 나는 코드를 바라보는 시각을 늘리고 낮은 수준의 언어를 직접
								접하면서 생기는 총체론적 효과를 누릴수 있다고 거의 확신한다.
							</p>
						</Panel>
						<Panel header="내가 회사를 고르는 기준" key="내가 회사를 고르는 기준">
							<p>
								<div className="innerList">
									<Collapse accordion defaultActiveKey="업무">
										<Panel header="01. 내가 맡게될 업무가 무엇인지" key="업무">
											<p>
												내가 근무하는 회사에서 맡은 역할이 얼마나 내가 원하는 방향과 같은지, 매일 8시간이상 근무하게될
												회사의 개발환경이 개인에게 주는 영향도 크다고 생각한다.
											</p>
										</Panel>
										<Panel header="02. 야근을 얼마나 하는지" key="야근">
											<p>
												야근을 많이 한다는건 단순히 업무를 많이하는것 회사에 오래있는것 그 이상의 의미라고 여긴다. 성과를 내야하는 회사에서
												필요하다면 야근이 발생하는건 자연스러운 일이지만 잦은 야근에 노출되는것은 장기적으로 공부하기 어려운 환경에 처하는것 이라고 느낀다.
											</p>
										</Panel>
										<Panel header="03. 주목할 개발자가 있는지" key="개발자가 있는지">
											<p>
												기본적으로 개발자가 많고 경험이 많은 개발자가 그 회사에 있는지, 개발분야가 다를지라도 어깨너머로 보고 배울만한 주목할 개발자가 있다면
												큰 행운이라고 생각한다.
											</p>
										</Panel>
										<Panel header="04. 출퇴근 루트" key="출퇴근 루트">
											<p>
												첫 회사를 다닐때에는 출퇴근 정도는 감수해야 하지않나 생각했는데 현실적으로 출퇴근 거리도 중요한것 같다. 출퇴근 시간이 길어지는건 어느정도 감수할 수 있지만
												출퇴근 하는 과정에서 사람이 많고 환승을 많이하게 되면 그만큼 피도로가 생기고 아무것도 안하고 출근만 했는데 벌써 지치는 상황이 생기는것 같다.
												<p style={{ marginTop: '20px' }}>
													<Tooltip title="원주가 적당한것 같다.">
														<ColorGreen>
															<b>정부에서 인구밀도가 적당한 지방에 IT밸리 크게 지어줬으면 좋겠다.</b>
														</ColorGreen>
													</Tooltip>
												</p>
											</p>
										</Panel>
									</Collapse>
								</div>
							</p>
						</Panel>
						<Panel header="천재적인 사람들을 보면" key="천재적인 사람들을 보면">
							<p>
								<b>" 개발자의 삶을 살아야겠다 "</b> 생각하면서 <Tooltip title="C언어 창시자"><ColorGreen>Dennis Ritchie</ColorGreen></Tooltip>혹은 <Tooltip title="javascript의 아버지, JSON 창시자"><ColorGreen>Douglas Crockford</ColorGreen></Tooltip> 처럼 무언가 엄청난걸 이뤄야겠다고 생각한적은 없다.
								다만 만들어 보고 싶은게 있을때 만들수 있는 능력이 갖추어 지도록 노력하고 있다.
							</p>
						</Panel>
					</Collapse>
				</QuestionBox>

				<History>
					<Timeline mode="alternate">
						<Timeline.Item>1992.01.17 탄생</Timeline.Item>
						<Timeline.Item color="red">2002 생에 첫 RPG 게임 라그하임에 중독</Timeline.Item>
						<Timeline.Item color="green">2002.07 생에 첫 강아지, 요크셔테리어 초롱이와의 만남</Timeline.Item>
						<Timeline.Item>2004.02 포곡초등학교 졸업</Timeline.Item>
						<Timeline.Item>2007.2 영문중학교 졸업</Timeline.Item>
						<Timeline.Item color="green">2007.04 <i style={{ color: '#ff6347', fontWeight: '500' }}>True Love</i>에 눈을 뜸</Timeline.Item>
						<Timeline.Item dot={<Icon type="clock-circle-o" />}>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
							beatae vitae dicta sunt explicabo.
						</Timeline.Item>
						<Timeline.Item color="green">2010.02 용인바이오고등학교 졸업</Timeline.Item>
						<Timeline.Item color="red">2011.12.06 군입대</Timeline.Item>
						<Timeline.Item dot={<Icon type="clock-circle-o" />}>
							군대안에서 UCLA대학, 고려대, 서강대 등등 다양한 사람들과 이야기를 나누고 여러 사람들의 성장배경을 접하면서
							공부에 대한 관심이 생김
						</Timeline.Item>
						<Timeline.Item color="green">2013.09.05 김연아의 24번째 생일날 전역</Timeline.Item>
						<Timeline.Item>2014.02 에버랜드 공연팀 입사</Timeline.Item>
						<Timeline.Item dot={<Icon type="clock-circle-o" />}>
							소속된 동물원 공연팀의 오너분이 젊은시절 와일드한 성격이였는데 많이 소프트해졌다고함 가끔씩 중요한 순간에 카리스마가 나옴
							인문학도 좋아하고 눈치100단, 처세술 만렙, 리더쉽이 강한 책임자라고 느끼며 많은걸 배움
						</Timeline.Item>
						<Timeline.Item>2015.03 한국IT전문학교 웹디자인과 입학</Timeline.Item>
						<Timeline.Item>코딩을 경험한 이후 개발자 취업준비</Timeline.Item>
						<Timeline.Item>2017.02 웹 에이전시 (주)스튜디오블룸 입사</Timeline.Item>
						<Timeline.Item dot={<Icon type="clock-circle-o" />}>
							<Tooltip title="음, 너무멋있고">
								<ColorGreen>
									<b>
									나는 세상을 강자와 약자, 성공과 실패로 나누지 않는다. 나는 세상을 배우는 사람과 배우지 않는 사람으로 나눈다.
									<p style={{marginTop: '10px'}}>- 벤자민 바버 -</p>
									</b>
								</ColorGreen>
							</Tooltip>
						</Timeline.Item>
					</Timeline>
				</History>
				
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