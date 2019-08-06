import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Icon, Input, Row, Col, Tooltip, message, Button, Drawer } from 'antd';
import Router from 'next/router';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

import UserFeedbackForm from './UserFeedbackForm';

import { LOGOUT_REQUEST } from '../reducers/user';

// style
const RootWrap = styled.div`
	display: flex;
	background-color: #212424;

	& > div {
		position: relative;
		margin: 0 auto;
		padding: 64px 0 70px;
		max-width: 1200px;
		width: 100%;
		height: 100vh;
	}

	& Header {
		position: fixed;
		top: 0;
		left: 50%;
		max-width: 1200px;
		width: 100%;
		transform: translate(-50%, 0);
		z-index: 100;
	}

	& Menu.Item {
		font-size: 18px;
		cursor: pointer;
	}

	& Footer {
		position: fixed;
		bottom: 0;
		left: 50%;
		max-width: 1200px;
		width: 100%;
		background-color: #001529;
		color: #fff;
		transform: translate(-50%, 0);
		z-index: 100;
	}
`;
const SideBar = styled(Sider)`
	position: fixed;
	height: calc(100vh - (64px + 69px));

	& .investigation {
		position: absolute;
    	bottom: 30px;
    	left: 50%;
    	transform: translate(-50%,0);
	}
`;
const ViewSection = styled(Layout)`
	position: absolute;
	top: 0;
	right: 0;
	margin-left: 200px;
	padding: 67px 24px 70px;
	width: calc(100% - 200px);
	height: 100%;
`;
const SkillList = styled.ul`
	display: inline-block;
	margin: 0;

	& li {
		position: relative;
		display: inline-block;
		padding: 0 10px;
		font-size: 15px;
	}
	& li:after {
		content: "";
		position: absolute;
		top: calc(50% + 1px);
		right: 0;
		width: 1px;
		height: 12px;
		background-color: #fff;
		transform: translate(0, -50%);
	}
	& li:last-child:after {
		display: none;
	}
`;


const AppLayout = ({children}) => {
	const [drawerVisible, setDrawerVisible] = useState(false);
	const urlPath = useRef('');
	const userInfo = useSelector(state => state.user.userInfo);
	const dispatch = useDispatch();

	//method
	const logOut = () => {
		dispatch({
			type: LOGOUT_REQUEST,
		});
	};
	const openDrawer = () => {
		setDrawerVisible(true);
	};
	const closeDrawer = () => {
		setDrawerVisible(false);
	};

	useEffect(() => {
		urlPath.current = Router.pathname;
	}, [urlPath.current]);

	return (
		<>
		<RootWrap>
			<div>
				<Layout>
					<Header className="header">
						<Row gutter={8}>
							<Col xs={14} md={12} xl={12}>
								<div className="logo" />
								<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }} >
									<Menu.Item key="home"><Link href="/"><a>로고</a></Link></Menu.Item>
									<Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
									{
										userInfo ?
										<Menu.Item key="logout" onClick={logOut}>Logout</Menu.Item>
										:
										<Menu.Item key="login"><Link href="/login"><a>Login</a></Link></Menu.Item>
									}
								</Menu>
							</Col>
							<Col xs={10} md={12} xl={12}>
								<div style={{ "float":"right" }}>
									<Tooltip title={'준비중 입니다.'}>
										<Input.Search enterButton style={{ verticalAlign: 'middle' }} />
									</Tooltip>
								</div>
							</Col>
						</Row>
					</Header>
					<Layout>
						<SideBar>
							<Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
								<SubMenu key="sub1" title={ <span><Icon type="user" />Lua</span> }>
									<Menu.Item key="introduce"><Link href="/introduce"><a>소개</a></Link></Menu.Item>
									<Menu.Item key="portfolio"><Link href="/portfolio"><a>Portfolio</a></Link></Menu.Item>
									<Menu.Item key="archive"><Link href="/archive"><a>Archive</a></Link></Menu.Item>
									<Menu.Item key="support"><Link href="/support"><a>Support</a></Link></Menu.Item>
								</SubMenu>
								<SubMenu key="sub2" title={ <span><Icon type="laptop"/>Development</span> }>
									<Menu.Item key="javascript"><Link href="/javascript"><a>Javascript</a></Link></Menu.Item>
									<Menu.Item key="c++"><Link href="/c++"><a>C++</a></Link></Menu.Item>
									<Menu.Item key="python"><Link href="/python"><a>Python</a></Link></Menu.Item>
									<Menu.Item key="etc"><Link href="/etc"><a>ETC</a></Link></Menu.Item>
								</SubMenu>
								<SubMenu key="sub3" title={ <span><Icon type="notification" />Inspiration</span> }>
									<Menu.Item key="inspiration"><Link href="/inspiration"><a>Inspiration</a></Link></Menu.Item>
								</SubMenu>
							</Menu>

							<Button className="investigation" onClick={openDrawer}>의견 내기 <Icon type="book" /></Button>
						</SideBar>
						<ViewSection>
							<Breadcrumb style={{ margin: '16px 0' }}>
								<Breadcrumb.Item>{urlPath.current}</Breadcrumb.Item>
								<Breadcrumb.Item>List</Breadcrumb.Item>
								<Breadcrumb.Item>App</Breadcrumb.Item>
							</Breadcrumb>
							<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 250, overflowY: 'auto' }}>
								{children}
							</Content>
						</ViewSection>
					</Layout>
					
					<Drawer
						className="investigation-drawer"
						title="여러분의 의견을 공유해 주세요."
						width={520}
						placement="right"
						closable={false}
						onClose={closeDrawer}
						visible={drawerVisible}
					>
						<UserFeedbackForm setDrawerVisible={setDrawerVisible} />
					</Drawer>

					<Footer>
						사용된 개발스택
						<SkillList>
							<li>React</li>
							<li>Redux</li>
							<li>Redux-Saga</li>
							<li>Next</li>
							<li>Node</li>
							<li>Webpack</li>
							<li>Styled-Components</li>
							<li>AntDesign</li>
							<li>Amazon</li>
						</SkillList>
					</Footer>
				</Layout>
			</div>
		</RootWrap>
		</>
	);
};



export default AppLayout;