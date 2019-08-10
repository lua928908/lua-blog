import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';
import parser from 'html-react-parser';
import { Icon, message } from 'antd';

import { LOAD_SINGLE_POST_REQUEST, LIKE_POST_REQUEST, UN_LIKE_POST_REQUEST } from '../reducers/post';

const Post = ({ id }) => {
	const userInfo = useSelector(state => state.user.userInfo);
	const category = useSelector(state => state.post.loadPostCategory);
	const singlePost = useSelector(state => state.post.singlePost);
	const dispatch = useDispatch();

	const liked = userInfo && singlePost.Likers && singlePost.Likers.find(v => v.id === userInfo.id);

	// method
	const onToggleLike = useCallback(() => {
		if( !userInfo ){
			return message.info('로그인이 필요합니다.');
		}
		
		if( liked ){ // Likers는 좋아요를 누른사람의 목록 배열
			dispatch({
				type: UN_LIKE_POST_REQUEST,
				data: id, // 지금보는 게시글의 id
			})
		}else{
			dispatch({
				type: LIKE_POST_REQUEST,
				data: id, // 지금보는 게시글의 id
			})
		}
	}, [userInfo.id && singlePost.id && liked && singlePost.Likers]);

	useEffect(() => {
		dispatch({
			type: LOAD_SINGLE_POST_REQUEST,
			category,
			id,
		});
	}, []);

	return (
		<>
			<Helmet
				title={singlePost.title}
				description={singlePost.description}
				meta={[
					{ name: 'description' , content: singlePost.content },
				]}
			/>
			<h1>{category}</h1>
			<div>{id}번 글</div>
			<div>좋아요 누르기 <Icon type="star" theme={liked ? 'twoTone' : 'outlined'} twoToneColor="#eb2f96" onClick={onToggleLike} /></div>

			<div>제목 : {singlePost.title}</div>
			<div>
				내용 :
				{
					parser(`${singlePost.content}`)
				}
			</div>
		</>
	);
};

Post.getInitialProps = async (context) => {
	return { id: parseInt(context.query.id, 10) };
}

export default Post;