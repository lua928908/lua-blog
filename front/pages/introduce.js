import React, { useState, useEffect } from 'react';
import { Progress, Tooltip, Row, Col, message, Collapse, Button, Timeline, Icon, Modal } from 'antd';
const { Panel } = Collapse;
import styled from 'styled-components';

// style
const Wrap = styled.div`
	overflow-y: auto;
	word-break: keep-all;

	& SkilBox:first-child {
		margin-top: 0;
	}
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
const Mbti = styled.div`
	margin: 80px -24px 0;
	padding: 30px 24px 80px;
	background-color: #212424;
	color: #e1e1e1;
	font-size: 17px;
	line-height: 1.8;

	& h2 {
		margin-bottom: 10px;
		color: #fff;
	}
	& h3 {
		font-size: 18px;
		color: #fff;
		margin-top: 40px;
	}
	& img {
		max-width: 100%;
		width: 100%;
	}
	& p {
		margin-top: 10px;
		font-size: 16px;
	}
	& button {
		float: right;
	}
`;
const Box = styled.div`
	&:first-child {
		margin-top: 0;
	}
	margin-top: 45px;
	& h3 {
		font-size: 20px;
	}
	& p {
		margin: 10px 0 0 0;
	}
`;
const History = styled.div`
	margin-top: 80px;

	& .timeline-item {
		font-weight: 500;
		line-height: 1.8;
	}
`;
const TechBox = styled.div`
	margin-top: 60px;

	& .box {
		margin-top: 30px;
	 	text-align: center;
		& p {
			text-align: center;
		}
	}
`;
const MottoWrap = styled.div`
	margin: 80px -24px 0;
	padding: 60px 0;
	color: #e1e1e1;
	font-size: 20px;
	background-color: #212424;

	& h2 {
		position: relative;
		margin-left: 90px;
		font-size: 22px;
		color: #e1e1e1;;
	}
	& h2:after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100px;
		height: 1px;
		background-color: #fff;
	}

	& .motto {
		margin-top: 80px;
		font-size: 20px;
		text-align: center;
		line-height: 2.0;
	}
	& .author {
		margin-right: 230px;
		font-size: 17px;
		text-align: right;
		line-height: 1.8;
	}
`;

// style - common
const Title = styled.h2`
	font-weight: 500;
	font-size: 20px;
	color: #1b1b1b;
`;
const ColorGreen = styled.span`
	font-weight: 500;
	font-size: 16px;
	color: #008000;
`;




const Introduce = () => {
	const [mbtiVisible, setMbtiVisible] = useState(false);

	//method
	const showMbtiDescription = () => {
		setMbtiVisible(true);
	};
	const openMbtiDescription = () => {
		setMbtiVisible(false);
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

				<Mbti>
					<Title>MBTI - 성격검사</Title>
					<img src="/MBTI.jpeg" alt="asdf"/>

					<h3>성격유형 : “청렴결백한 논리주의자” (ISTJ-A / ISTJ-T)</h3>
					<p>
						논리주의자형은 가장 다수의 사람이 속하는 성격 유형으로 인구의 대략 13%를 차지합니다. 청렴결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 이들은, 가정 내에서뿐 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다. 이 유형의 사람은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있습니다. 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리합니다.
					</p>
					<Button type="primary" onClick={showMbtiDescription}>
						전체설명 보기
					</Button>
					<Modal
						title="Lua MBTI 성격검사"
						visible={mbtiVisible}
						onOk={openMbtiDescription}
						okText="확인"
						closable={false}
						bodyStyle={{ fontSize: '17px', height: 'calc( 100vh - 320px )', lineHeight: '1.8', overflowY: 'auto' }}
					>
						<Box>
							<h3>뱉은 말에 대한 책임과 평판</h3>
							<p>논리주의자형 사람이 무언가를 하겠다고 하면 얼마나 많은 희생이 따르던지 자신이 한 말에 책임을 지고자 기어이는 해내고야 맙니다. 이런 그들이기에 자신이 내뱉은 말에 책임을 지지 않는 이들을 보면 어쩔 줄 몰라 합니다. 태만과 부도덕의 조합만큼 논리주의자형 사람의 적이 되는 가장 빠른 지름길도 없을 것입니다. 때문에 이들은 혼자 일하는 것을 선호하며, 대개 일을 진행하는 데 직장 내 토의를 거치거나 다른 이들의 견해를 들을 필요 없이 자신만의 목표를 설정하고 달성을 가능케 하는 어느 정도의 지위나 권한을 가지고 있는 경우가 많습니다.</p>
							<p>예리하며 사실에 근거하여 사고하는 경향을 가지고 있는 이들은 자율적으로 스스로 알아서 행동하고 책임지기를 원합니다. 이 때문에 이들은 누군가에게 의존하는 것은 약자의 행동이라고 여깁니다. 임무 달성을 위한 열정과 책임감, 그리고 오점 하나 없는 청렴한 이들의 성격으로 하여금 이들을 종종 이러한 오류에 쉽게 빠지게 합니다.</p>
							<p>이들의 청렴결백한 성격은 논리주의자형 사람을 정의하는 핵심사항으로, 이는 그들이 생각하는 것 이상으로 중요한 부분입니다. 얼마나 많은 희생이 따르든 이들은 일단 정해진 체계나 지침을 고수하며, 비록 사실을 있는 그대로 밝히는 것이 결과적으로 더 큰 분란을 야기할지라도 자신의 잘못을 시인하고 사실을 밝히고자 합니다. 논리주의자형 사람에게 있어 감정적인 고려보다 정직함이 보다 우선시 되기 때문입니다. 때로 이러한 그들의 대담한 행보는 사람들에게 냉정하고 로봇 같다는 잘못된 인상을 심어 주기도 합니다. 감정이나 애정을 밖으로 표출하는 것에 익숙하지 않은 이들은 혹 사람들로부터 냉혈인이라든지, 더 심하게는 ‘감정 자체가 있느냐’와 같은 말을 듣기도 하는데 이에 깊은 상처를 받기도 합니다.</p>
						</Box>
						<Box>
							<h3>백해무익한 무리와 있느니 차라리 혼자가 낫다</h3>
							<p>논리주의자형 사람의 헌신적인 성격은 매우 긍정적인 자질로 이들로 하여금 많은 것을 이루게 합니다. 하지만 이는 동시에 이들의 약점이 되기도 하는데, 간혹 비양심적인 사람들은 이러한 이들의 약점을 이용하기도 합니다. 안전하며 안정된 삶을 추구하는 논리주의자형 사람은 일이 원활하게 돌아갈 수 있도록 맡은 바 임무를 충실히 수행합니다. 뒤치다꺼리를 마다치 않는 이들의 성향을 아는 동료나 주위 사람들은 간혹 이들에게 책임을 전가하는 경우가 있습니다. 더욱이 개인적인 견해가 아닌 사실만을 얘기하고자 하는 이들의 성향 때문에 정확히 사실을 밝혀 낼 증거가 충분히 모일 때까지 시간이 오래 걸리기도 합니다.</p>
							<p>이들은 그들 자신 또한 챙기고 돌보아야 할 필요가 있음을 잊지 말아야 합니다. 갈수록 기대기만 하는 이들에게 언제고 싫은 내색 한번 않는 논리주의자형 사람들이기 때문에 일단 감정의 골이 쌓여 터진 후 돌아오기 늦어버리는 상황을 초래하기 전 안정과 효율성 추구를 위한 완강하고 헌신적인 이들의 성격을 활용하여 장기간 목표를 달성하기 위한 절충점을 찾아야 합니다. 활기차고 명료하며 안정된 삶을 추구하는 이들의 성향을 진심으로 이해하고 보듬으며 이들이 가진 단점을 보완해주는 동료나 배우자를 만난다면, 이들은 안정을 추구하는 자신의 성향으로 하여금 일을 순리대로 잘 돌아가게 하는 데 지대한 역할을 하고 있다는 생각에 큰 만족감을 느낄 것입니다.</p>
						</Box>
					</Modal>
				</Mbti>

				<History>
					<Title>TIME LINE</Title>
					<Timeline mode="alternate">
						<Timeline.Item className="timeline-item">1992.01.17 탄생</Timeline.Item>
						<Timeline.Item className="timeline-item" color="red">2002 생에 첫 RPG 게임 라그하임에 중독</Timeline.Item>
						<Timeline.Item className="timeline-item" color="green">2002.07 생에 첫 강아지, 요크셔테리어 '초롱이'와의 만남</Timeline.Item>
						<Timeline.Item className="timeline-item">2004.02 포곡초등학교 졸업</Timeline.Item>
						<Timeline.Item className="timeline-item">2007.2 영문중학교 졸업</Timeline.Item>
						<Timeline.Item className="timeline-item" color="green">2007.04 <i style={{ color: '#ff6347', fontWeight: '500' }}>True Love</i>에 눈을 뜸</Timeline.Item>
						<Timeline.Item className="timeline-item" color="red" dot={<Icon type="clock-circle-o" />}>
							공부로 스트레스 받아본적이 없음 시험날은 명절, 학교 빨리끝나는 날
						</Timeline.Item>
						<Timeline.Item className="timeline-item" color="green">2010.02 용인바이오고등학교 졸업</Timeline.Item>
						<Timeline.Item className="timeline-item" color="red">2011.12 군입대</Timeline.Item>
						<Timeline.Item className="timeline-item" color="green">2012.04 휴가를 나와보니 현재의 반려견 '초코'와 만남</Timeline.Item>
						<Timeline.Item className="timeline-item" dot={<Icon type="clock-circle-o" />}>
							군대안에서 UCLA대학, 고려대, 서강대 등등 다양한 사람들과 이야기를 나누고 여러 사람들의 성장배경을 접하면서
							공부에 대한 관심이 생김, 웹을 공부해야겠다고 생각
						</Timeline.Item>
						<Timeline.Item className="timeline-item" color="green">2013.09.05 김연아의 24번째 생일날 전역</Timeline.Item>
						<Timeline.Item className="timeline-item">2014.02 에버랜드 공연팀 입사</Timeline.Item>
						<Timeline.Item className="timeline-item" dot={<Icon type="clock-circle-o" />}>
							소속된 동물원 공연팀의 오너분이 젊은시절 와일드한 성격이였는데 많이 소프트해졌다고함 가끔씩 중요한 순간에 카리스마가 나옴
							인문학도 좋아하고 눈치100단, 처세술 만렙, 리더쉽이 강한 책임자라고 느끼며 많은걸 배움
						</Timeline.Item>
						<Timeline.Item className="timeline-item">2015.03 한국IT전문학교 웹디자인과 입학</Timeline.Item>
						<Timeline.Item className="timeline-item" color="green">코딩을 경험한 이후 개발자 취업준비</Timeline.Item>
						<Timeline.Item className="timeline-item">2017.02 웹 에이전시 (주)스튜디오블룸 입사</Timeline.Item>
						<Timeline.Item className="timeline-item" color="green" dot={<Icon type="clock-circle-o" />}>2019.04 (주)스튜디오블룸 퇴사</Timeline.Item>
					</Timeline>
				</History>
				
				<TechBox className="wowo">
					<Title>기술 선호도</Title>
					<Row>
						<div className="box">
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
						</div>
					</Row>
					<Row>
						<div className="box">
							<Col xl={4} md={4} xl={4}>
								<p><b>D3</b></p>
								<Progress type={'circle'} percent={86} strokeColor={'brown'}/>
							</Col>
						</div>
					</Row>
				</TechBox>

				<MottoWrap>
					<h2>Motto</h2>
					<p className="motto">
						나는 세상을 강자와 약자, 성공과 실패로 나누지 않는다.<br/>
						나는 세상을 배우는 사람과 배우지 않는 사람으로 나눈다.
					</p>
					<p className="author">- 벤자민 바버 -</p>
				</MottoWrap>
			</Wrap>
		</>
	);
};

export default Introduce;