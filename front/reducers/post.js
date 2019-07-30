import produce from 'immer';

export const initialState = {
	loadPostCategory: '', // 현재 보고있는 카테고리
	showPosts: [], // 게시글 목록
	imagePaths: [], // 미리보기 이미지 경로
	singlePost: '', // 하나의 게시글
	userFeedbackErrorReason: ''// 유저 피드백 등록 에러
};

const dummyData = [
	{
		href: 'http://ant.design',
		title: 'ant design part',
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description:
		'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
		imagePath: 'http://cdnweb01.wikitree.co.kr/webdata/editor/201807/18/img_20180718173651_ee0a6b63.jpg',
	},
	{
		href: 'http://ant.design',
		title: 'ant design part',
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description:
		'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	},
	{
		href: 'http://ant.design',
		title: 'ant design part',
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description:
		'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	},
	{
		href: 'http://ant.design',
		title: 'ant design part',
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description:
		'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	}
];

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_SINGLE_POST_REQUEST = 'LOAD_SINGLE_POST_REQUEST';
export const LOAD_SINGLE_POST_SUCCESS = 'LOAD_SINGLE_POST_SUCCESS';
export const LOAD_SINGLE_POST_FAILURE = 'LOAD_SINGLE_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const USER_FEEDBACK_REQUEST = 'USER_FEEDBACK_REQUEST';
export const USER_FEEDBACK_SUCCESS = 'USER_FEEDBACK_SUCCESS';
export const USER_FEEDBACK_FAILURE = 'USER_FEEDBACK_FAILURE';


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
				draft.loadPostErrorReason = action.error
			}
			case LOAD_SINGLE_POST_REQUEST: {
				break;
			}
			case LOAD_SINGLE_POST_SUCCESS: {
				draft.singlePost =action.data;
				break;
			}
			case LOAD_SINGLE_POST_FAILURE: {
				break;
			}
			case USER_FEEDBACK_REQUEST: {
				break;
			}
			case USER_FEEDBACK_SUCCESS: {
				break;
			}
			case USER_FEEDBACK_FAILURE: {
				draft.userFeedbackErrorReason = action.error
				break;
			}
			default: {
				break;
			}
		}
	});
};