import react from 'react';
import Document, { Main, NextScript } from 'next/document'; // Main = _app.js가 된다.
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	static getInitialProps(context){
		const sheet = new ServerStyleSheet();
		const page = context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, helmet: Helmet.renderStatic(), styleTags };
	}

	render(){
		const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
		const htmlAttrs = htmlAttributes.toComponent();
		const bodyAttrs = bodyAttributes.toComponent();

		return(
			<html {...htmlAttrs}>
				<head>
					{this.props.styleTags}
					{ Object.values(helmet).map(el => el.toComponent()) }
				</head>

				<body {...bodyAttrs}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;