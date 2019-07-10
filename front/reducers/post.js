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
  portfolioPost: [],
  loadPostErrorReason: '',
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

export const TEST_SAGA_REQUEST = 'TEST_SAGA_REQUEST';
export const TEST_SAGA_SUCCESS = 'TEST_SAGA_SUCCESS';
export const TEST_SAGA_FAILURE = 'TEST_SAGA_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';


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
			case TEST_SAGA_FAILURE: {
				break;
			}
			case ADD_POST_REQUEST: {
				break;
			}
			case ADD_POST_SUCCESS: {
				break;
			}
			case ADD_POST_FAILURE: {
				break;
			}
			case LOAD_POST_REQUEST: {
				break;
			}
			case LOAD_POST_SUCCESS: {
				draft.portfolioPost = dummyData;
			}
			case LOAD_POST_FAILURE: {
				draft.loadPostErrorReason = action.error
			}
			default: {
				break;
			}
		}
	});
};