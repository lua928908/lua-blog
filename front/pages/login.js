import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import styled from 'styled-components';

import { LOG_IN_REQUEST } from '../reducers/user';


// style
const Wrap = styled.div`
	margin: 0 auto;
	max-width: 450px;
	width: 100%;

	& .login-form-forgot {
		float: right;
	}
	& Button {
		width: 100%;
	}
`;

class NormalLoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
			this.props.dispatch({
				type: LOG_IN_REQUEST,
				data: values,
			});
		});
	};

	componentDidUpdate() {
		if( this.props.userInfo ){
			// 로그인
			Router.back();
		}else{
			// 비로그인
		}
	}

	render() {
	const { getFieldDecorator } = this.props.form;
	return (
		<>
			<Wrap>
				<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{getFieldDecorator('email', {
						rules: [{
							type: 'email',
							message: '이메일 형식이 부적절합니다.',
						},{
							required: true,
							message: '이메일을 입력해주세요.',
						}],
					})(
					<Input
						prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder="E-mail"
					/>,
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: '패스워드를 입력해주세요' }],
					})(
					<Input
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password"
						placeholder="Password"
					/>,
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(<Checkbox>Remember me</Checkbox>)}
					<a className="login-form-forgot" href="">
						비밀번호 찾기
					</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
					<Link href={{ pathname: 'register' }}><a>회원가입</a></Link>
				</Form.Item>
				</Form>
			</Wrap>
		</>
	);
	}
}
  
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const Login = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector(state => state.user.userInfo);

	return (
		<>
			<WrappedNormalLoginForm dispatch={dispatch} userInfo={userInfo}>

			</WrappedNormalLoginForm>
		</>
	);
};

export default Login;