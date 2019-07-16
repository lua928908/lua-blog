import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Tooltip, Icon, Cascader, Select, Alert, Checkbox, Button, AutoComplete, } from 'antd';
import { SIGNUP_REQUEST, INIT_USER_FLAG } from '../reducers/user';
import Router from 'next/router';
import styled from 'styled-components';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

// Hooks 로 바꾸려했는데 validateFieldsAndScroll가 작동안함.
class RegistrationForm extends React.Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: [],
	};
  
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}else {
				console.error(err);
			}
			this.props.dispatch({
				type: SIGNUP_REQUEST,
				data: values,
			});
		});
	};
  
	handleConfirmBlur = e => {
		const { value } = e.target;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};
  
	compareToFirstPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue('password')) {
			callback('패스워드가 일치하지 않습니다.');
		} else {
			callback();
		}
	};
  
	validateToNextPassword = (rule, value, callback) => {
	const { form } = this.props;
	if (value && this.state.confirmDirty) {
		form.validateFields(['confirm'], { force: true });
	}
	callback();
	};
  
	handleWebsiteChange = value => {
		let autoCompleteResult;
		if (!value) {
			autoCompleteResult = [];
		} else {
			autoCompleteResult = ['.com', '.org', '.net', '.io', '.kr'].map(domain => `${value}${domain}`);
		}
		this.setState({ autoCompleteResult });
	};
  
	render() {
		const { getFieldDecorator } = this.props.form;
		const { autoCompleteResult } = this.state;
  
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 8,
				},
			},
		};
		const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '010',
		})(
			<Select style={{ width: 70 }}>
				<Option value="010">010</Option>
				<Option value="011">011</Option>
				<Option value="070">070</Option>
			</Select>,
		);
  
		const websiteOptions = autoCompleteResult.map(website => (
			<AutoCompleteOption key={website}>{website}</AutoCompleteOption>
		));
  
		return (
		<Form {...formItemLayout} onSubmit={this.handleSubmit}>
			<Form.Item label="E-mail">
				{getFieldDecorator('email', {
					rules: [
						{
							type: 'email',
							message: '이메일 형식이 부적절합니다.',
						},
						{
							required: true,
							message: '이메일을 입력해주세요.',
						},
					],
				})(<Input />)}
			</Form.Item>
			<Form.Item label="Password" hasFeedback>
			{getFieldDecorator('password', {
				rules: [
					{
						required: true,
						message: '패스워드를 입력해주세요',
					},
					{
						validator: this.validateToNextPassword,
					},
				],
				})(<Input.Password />)}
			</Form.Item>
			<Form.Item label="Confirm Password" hasFeedback>
				{getFieldDecorator('confirm', {
					rules: [
						{
							required: true,
							message: 'Please confirm your password!',
						},
						{
							validator: this.compareToFirstPassword,
						},
					],
				})(<Input.Password onBlur={this.handleConfirmBlur} />)}
			</Form.Item>
			<Form.Item
				label={
					<span>
						Nickname&nbsp;
						<Tooltip title="What do you want others to call you?">
						<Icon type="question-circle-o" />
						</Tooltip>
					</span>
				}
			>
					{getFieldDecorator('nickname', {
						rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
					})(<Input />)}
			</Form.Item>
			<Form.Item label="Habitual Residence">
				{getFieldDecorator('residence', {
					initialValue: ['zhejiang', 'hangzhou', 'xihu'],
					rules: [
						{ type: 'array', required: true, message: 'Please select your habitual residence!' },
					],
				})(<Cascader options={residences} />)}
			</Form.Item>
			<Form.Item label="Phone Number">
				{getFieldDecorator('phone', {
					rules: [{ required: false, message: 'Please input your phone number!' }],
				})(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
			</Form.Item>
			<Form.Item label="Website">
				{getFieldDecorator('website', {
					rules: [{ required: false, message: 'Please input website!' }],
				})(
				<AutoComplete
					dataSource={websiteOptions}
					onChange={this.handleWebsiteChange}
					placeholder="website"
				>
					<Input />
				</AutoComplete>,
				)}
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				{getFieldDecorator('agreement', {
					valuePropName: 'checked',
				})(
					<Checkbox>
						I have read the <a href="">agreement</a>
					</Checkbox>,
				)}
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">Register</Button>
			</Form.Item>
		</Form>
		);
	}
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);


// css
const Wrap = styled.div`
	position: relative;
	height: 100%;
`;
const AlertWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1;

	& > div {
		position: relative;
		width: 100%;
		height: 100%;
	}

	& .alert {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
`;

const Register = () => {
	const dispatch = useDispatch();
	const registerDone = useSelector(state => state.user.registerDone);

	useEffect(() => {
		dispatch({
			type: INIT_USER_FLAG,
		});
	}, []);

	useEffect(() => {
		if(registerDone){
			setTimeout(() =>{
				Router.push('/login');
			}, 4000)
		}
	}, [registerDone]);

	return (
		<>
			<Wrap>
				<WrappedRegistrationForm dispatch={dispatch}></WrappedRegistrationForm>
				{
					registerDone &&
					<AlertWrap>
						<div>
							<Alert className="alert"
								message="회원가입 완료"
								description="회원가입이 완료되었습니다, 잠시후 메인으로 이동합니다."
								type="success"
								showIcon
							/>
						</div>
					</AlertWrap>
				}
			</Wrap>
		</>
	)
};

export default Register;