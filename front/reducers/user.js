import produce from 'immer';

// 기본 state의 상태
export const initialState = {
	isLoggingIn: false, // 로그인 시도
	userInfo: '', // 로그인 유저 정보
	loginErrorReason: '', // 로그인 에러메세지
	registerDone: false, // 회원가입 성공 여부
	isUserAdmin: false, // 로그인된 유저의 관리자 여부
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';



const reducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case LOG_IN_REQUEST: {
				draft.isLoggingIn = true;
				break;
			}
			case LOG_IN_SUCCESS: {
				draft.isLoggingIn = false;
				draft.userInfo = action.data;
				draft.isUserAdmin = action.data.admin ? true : false;
				break;
			}
			case LOG_IN_FAILURE: {
				break;
			}
			case SIGNUP_REQUEST: {
				break;
			}
			case SIGNUP_SUCCESS: {
				draft.registerDone = true;
				break;
			}
			case SIGNUP_FAILURE: {
				break;
			}
			case LOGOUT_REQUEST: {
				break;
			}
			case LOGOUT_SUCCESS: {
				draft.userInfo = '';
				draft.isUserAdmin = false;
				break;
			}
			case LOGOUT_FAILURE: {
				break;
			}
			default: { // default 없으면 error
				break;
			}
		}
	});
};

export default reducer;