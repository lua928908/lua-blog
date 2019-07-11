import React, { useState, useEffect, useCallback } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

import { ADD_POST_REQUEST } from '../reducers/post';

let resultContent = null;
const EditForm = ({ category }) => {
	const [editorState, setEditorState] = useState('');
	const dispatch = useDispatch();

	const onEditorStateChange = useCallback((editorState) => {
		setEditorState(editorState);
		let editorSourceHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()));
		console.log(editorSourceHTML);
		resultContent = editorSourceHTML;
	}, [editorState]);
	const portfolioAddPost = useCallback(() => {
		dispatch({
			type: ADD_POST_REQUEST,
			data: {
				category,
				content: resultContent,
			},
		});
		setEditorState('');
	}, []);

	useEffect(() => {
		setEditorState( EditorState.createEmpty() );
	}, []);

	return (
		<>
			<p>
				<Input id="title" placeholder="title"></Input>
			</p>
			<p>
				<Input id="subtitle" placeholder="description"></Input>
			</p>
			<Editor
				editorState={editorState}
				wrapperClassName="demo-wrapper"
				editorClassName="demo-editor"
				onEditorStateChange={onEditorStateChange}
			/>
			<button onClick={portfolioAddPost}>submit</button>
		</>
	);
};

export default EditForm;