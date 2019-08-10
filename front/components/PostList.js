import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { List, Avatar, Icon, Button, Modal, Tooltip } from 'antd';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment-timezone';

import EditForm from '../components/EditForm';

// style
const Wrap = styled.div`
	& .list-description {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		height: auto;
		max-height: 5.4em;
		font-size: 15px;
		line-height: 1.8;
		text-overflow: ellipsis;
		overflow: hidden;
		word-wrap: break-word;
		white-space: normal;
	}
`;


const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);

const PostList = ({ listData, category }) => {
	const isUserAdmin = useSelector(state => state.user.userInfo.admin);
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
			<Wrap>
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
							<IconText type="edit" text={<Moment format="YYYY.MM.DD HH:MM" date={item.createdAt} />} />,
							<IconText type="message" text={'준비중'} />,
							<IconText type="star-o" text={item.star} />,
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
						// 주소는 category/post/id 지만 next에 pagas와 맞아야 하기때문에 post를 보여줌
						title={<Link href={{ pathname: '/post', query: {id: item.id} }} as={`/post/${item.id}`}><a>{item.title}</a></Link>}
						description={item.description}
					/>
						<div className="list-description">
							{item.content.replace(/(<([^>]+)>)/ig,"")}
						</div>
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
					<EditForm category={category} setEditModalState={setEditModalState}></EditForm>
				</Modal>
			</Wrap>
		</>
	);
};

export default PostList;