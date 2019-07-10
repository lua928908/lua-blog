import produce from 'immer';

// 기본 state의 상태
export const initialState = {
	isLoggingIn: false, // 로그인 시도
	loginErrorReason: '', // 로그인 에러메세지
	test: 'null',
	registerDone: false, // 회원가입 성공 여부
	isUserAdmin: true, // 로그인된 유저의 관리자 여부
};

export const TEST_SAGA_REQUEST = 'TEST_SAGA_REQUEST';
export const TEST_SAGA_SUCCESS = 'TEST_SAGA_SUCCESS';
export const TEST_SAGA_FAILURE = 'TEST_SAGA_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';



const reducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case TEST_SAGA_REQUEST: {
				draft.test = "tesing";
				break;
			}
			case TEST_SAGA_SUCCESS: {
				draft.test = "test success";
				break;
			}
			case TEST_SAGA_FAILURE: {
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
			default: { // default 없으면 error
				break;
			}
		}
	});
};

export default reducer;