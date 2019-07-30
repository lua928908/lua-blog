import produce from 'immer';

export const initialState = {
	loadPostCategory: '', // 현재 보고있는 카테고리
	showPosts: [], // 게시글 목록
	imagePaths: [], // 미리보기 이미지 경로
	singlePost: '', // 하나의 게시글
	userFeedbackErrorReason: ''// 유저 피드백 등록 에러
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_SINGLE_POST_REQUEST = 'LOAD_SINGLE_POST_REQUEST';
export const LOAD_SINGLE_POST_SUCCESS = 'LOAD_SINGLE_POST_SUCCESS';
export const LOAD_SINGLE_POST_FAILURE = 'LOAD_SINGLE_POST_FAILURE';


export default (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ADD_POST_REQUEST: {
				break;
			}
			case ADD_POST_SUCCESS: {
				draft.showPosts.unshift(action.data.data);
				break;
			}
			case ADD_POST_FAILURE: {
				break;
			}
			case LOAD_POST_REQUEST: {
				draft.loadPostCategory = action.category;
				break;
			}
			case LOAD_POST_SUCCESS: {
				draft.showPosts = action.data;
			}
			case LOAD_POST_FAILURE: {
				draft.loadPostErrorReason = action.error;
			}
			case LOAD_SINGLE_POST_REQUEST: {
				break;
			}
			case LOAD_SINGLE_POST_SUCCESS: {
				draft.singlePost = action.data;
				break;
			}
			case LOAD_SINGLE_POST_FAILURE: {
				break;
			}
			default: {
				break;
			}
		}
	});
};