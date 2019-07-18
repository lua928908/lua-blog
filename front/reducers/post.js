import produce from 'immer';

export const initialState = {
	portfolioPost: [],
	imagePaths: [], // 미리보기 이미지 경로
	singlePost: null,
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

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';


export default (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ADD_POST_REQUEST: {
				break;
			}
			case ADD_POST_SUCCESS: {
				console.log('받은 액션',action);
				console.log('카테고리', action.data.category);
				console.log('내가 쓴글', action.data);
				//const category = action.data.category+Post;
				// draft.category.unshift(acton.data.post);
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