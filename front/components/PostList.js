import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { List, Avatar, Icon, Button, Modal } from 'antd';
import styled from 'styled-components';

import EditForm from '../components/EditForm';

// style

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);

const PostList = ({ listData }) => {
	const isUserAdmin = useSelector(state => state.user.isUserAdmin);
	const [editModalState, setEditModalState] = useState(false);

	const showEditModal = () => {
		setEditModalState(true);
	};
	const handleOk = e => {
		setEditModalState(false);
	};
	
	const handleCancel = e => {
		setEditModalState(false);
	};

	return (
		<>
			<List
				itemLayout="vertical"
				size="large"
				pagination={{
					onChange: page => {
					console.log(page);
					},
					pageSize: 3,
				}}
				dataSource={listData}
				footer={<div></div>}
				renderItem={item => (
				<List.Item
					key={item.title}
					actions={[
						<IconText type="star-o" text="156" />,
						<IconText type="like-o" text="156" />,
						<IconText type="message" text="2" />,
					]}
					extra={
						item && item.imagePath ?
							<img width={272} alt="post Image" src={item.imagePath} />
						:
							<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
					}
				>
				<List.Item.Meta
					avatar={<Avatar src={item.avatar} />}
					title={<a href={item.href}>{item.title}</a>}
					description={item.description}
				/>
					{item.content}
				</List.Item>
				)}
			/>
			{
				isUserAdmin && <Button type="primary" onClick={showEditModal}>글쓰기</Button>
			}

			<Modal
				title="Basic Modal"
				visible={editModalState}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<EditForm category="portfolio"></EditForm>
			</Modal>
		</>
	);
};

export default PostList;