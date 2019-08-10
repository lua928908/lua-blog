import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { Input } from 'antd';

import { ADD_POST_REQUEST } from '../reducers/post';

let resultContent = null;
const EditForm = ({ category, setEditModalState }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [editorState, setEditorState] = useState('');

	const userInfo = useSelector(state => state.user.userInfo);
	const dispatch = useDispatch();

	// method
	const onTitle = useCallback((e) =>{
		console.log(e.target.value);
		setTitle(e.target.value);
	}, [title]);

	const onDescription = useCallback((e) =>{
		setDescription(e.target.value);
	}, [description]);

	const onEditorStateChange = useCallback((editorState) => {
		setEditorState(editorState);
		let editorSourceHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()));
		resultContent = editorSourceHTML;
	}, [editorState]);

	const addPost = useCallback(() => {
		dispatch({
			type: ADD_POST_REQUEST,
			category: category,
			data: {
				auth: userInfo.email,
				nickname: userInfo.nickname,
				imagePath: null,
				href: null,
				title,
				description,
				content: resultContent,
				category,
			},
		});
		setTitle('');
		setDescription('');
		setEditorState('');
		setEditModalState(false);
	}, [title, description, editorState]);
	

	useEffect(() => {
		setEditorState( EditorState.createEmpty() );
	}, []);

	return (
		<>
			<p>
				<Input id="title" placeholder="title" value={title} onChange={onTitle}></Input>
			</p>
			<p>
				<Input id="subtitle" placeholder="description" value={description} onChange={onDescription}></Input>
			</p>
			<Editor
				editorState={editorState}
				wrapperClassName="demo-wrapper"
				editorClassName="demo-editor"
				onEditorStateChange={onEditorStateChange}
			/>
			<button onClick={addPost}>submit</button>
		</>
	);
};

export default EditForm;