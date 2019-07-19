import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Icon, Input, Row, Col, Tooltip, message } from 'antd';
import Router from 'next/router';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

import { LOGOUT_REQUEST } from '../reducers/user';

// style
const RootWrap = styled.div`
	display: flex;
	background-color: #212424;

	& > div {
		margin: 0 auto;
		max-width: 1200px;
		width: 100%;
	}
	& Menu.Item {
		font-size: 18px;
		cursor: pointer;
	}

	& Footer {
		background-color: #001529;
		color: #fff;
	}
`;
const SideBar = styled(Sider)`
	height: calc(100vh - (64px + 69px));
	background-color: red;
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
	const urlPath = useRef('');
	const userInfo = useSelector(state => state.user.userInfo);
	const dispatch = useDispatch();

	//method
	const logOut = () => {
		dispatch({
			type: LOGOUT_REQUEST,
		});
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
									<Menu.Item key="book"><Link href="/book"><a>Book</a></Link></Menu.Item>
								</SubMenu>
							</Menu>
						</SideBar>
						<Layout style={{ padding: '0 24px 24px' }}>
							<Breadcrumb style={{ margin: '16px 0' }}>
								<Breadcrumb.Item>{urlPath.current}</Breadcrumb.Item>
								<Breadcrumb.Item>List</Breadcrumb.Item>
								<Breadcrumb.Item>App</Breadcrumb.Item>
							</Breadcrumb>
							<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 250 }}>
								{children}
							</Content>
						</Layout>
					</Layout>
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