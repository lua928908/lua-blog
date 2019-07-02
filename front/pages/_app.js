import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const luaBlog = ({ Component }) => {
	return (
		<>
			<Head>
				<title>Lua - Blog</title>
        		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-draft-wysiwyg@1.13.2/dist/react-draft-wysiwyg.css" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
			</Head>

			<AppLayout>
				<Component children={Component} />
			</AppLayout>
		</>
	);
};

export default luaBlog;