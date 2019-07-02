import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

const EditForm = () => {
	const [editorState, setEditorState] = useState('');

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	useEffect(() => {
		setEditorState( EditorState.createEmpty() );
	}, []);

	return (
		<>
			<Editor
				editorState={editorState}
				wrapperClassName="demo-wrapper"
				editorClassName="demo-editor"
				onEditorStateChange={onEditorStateChange}
			/>
		</>
	);
};

export default EditForm;