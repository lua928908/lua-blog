import React from 'react';
import Link from 'next/link';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';

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
		});
	};

	render() {
	const { getFieldDecorator } = this.props.form;
	return (
		<>
			<Wrap>
				<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(
					<Input
						prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder="Username"
					/>,
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
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
					Or <Link href={{ pathname: 'register' }}><a>회원가입</a></Link>
				</Form.Item>
				</Form>
			</Wrap>
		</>
	);
	}
}
  
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const Login = () => {
	return (
		<>
			<WrappedNormalLoginForm>

			</WrappedNormalLoginForm>
		</>
	);
};

export default Login;