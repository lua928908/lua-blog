import React from 'react';
import {List, Avatar, Icon} from 'antd';

// 가짜 데이터 넣기
/*
for (let i = 0; i < 23; i++) {
	if(i === 0){
		listData.push({
			href: 'http://ant.design',
			title: `ant design part ${i}`,
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			description:
			'Ant Design, a design language for background applications, is refined by Ant UED Team.',
			content:
			'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
			imagePath:
			'http://cdnweb01.wikitree.co.kr/webdata/editor/201807/18/img_20180718173651_ee0a6b63.jpg',
		});
	}else {
		listData.push({
			href: 'http://ant.design',
			title: `ant design part ${i}`,
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			description:
			'Ant Design, a design language for background applications, is refined by Ant UED Team.',
			content:
			'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
		});
	}
}
*/

const IconText = ({ type, text }) => (
	<span>
	  <Icon type={type} style={{ marginRight: 8 }} />
	  {text}
	</span>
  );

const PostList = ({ listData }) => {
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
				footer={
					<div>
						<b>공지사항</b> 
					</div>
				}
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
							<img width={272} alt="이미지있어" src={item.imagePath} />
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
		</>
	);
};

export default PostList;