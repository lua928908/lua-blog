import produce from 'immer';

// 기본 state의 상태
export const initialState = {
	isLoggingIn: false, // 로그인 시도
	loginErrorReason: '', // 로그인 에러메세지
	test: 'null',
};

export const dummyPost = [
	{  }
];

export const TEST_SAGA_REQUEST = 'TEST_SAGA_REQUEST';
export const TEST_SAGA_SUCCESS = 'TEST_SAGA_SUCCESS';
export const TEST_SAGA_FAILURE = 'TEST_SAGA_FAILURE';



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
			default: { // default 없으면 error
				break;
			}
		}
	});
};

export default reducer;