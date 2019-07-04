import produce from 'immer';

export const initialState = {
  mainPosts: [], // 화면에 보일 포스트들
  imagePaths: [], // 미리보기 이미지 경로
  addPostErrorReason: '', // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스트 업로드 성공
  isAddingComment: false,
  addCommentErrorReason: '',
  commentAdded: false,
  singlePost: null,
  test: '',
};

export const TEST_SAGA_REQUEST = 'TEST_SAGA_REQUEST';
export const TEST_SAGA_SUCCESS = 'TEST_SAGA_SUCCESS';
export const TEST_SAGA_FAILURE = 'TEST_SAGA_FAILURE';


export default (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case TEST_SAGA_REQUEST: {
				draft.test = "테스트중";
				break;
			}
			case TEST_SAGA_SUCCESS: {
				draft.test = "테스트 성공";
				break;
			}
			default: {
				break;
			}
		}
	});
};