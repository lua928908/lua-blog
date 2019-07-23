import React, { useState, useEffect, useRef, useMemo } from 'react';
import moment from 'moment';
import Moment from 'react-moment';

const CurrentTime = () => {

	const timeLog = useRef('');

	useEffect(() => {
		const setTime = setInterval(() => {
			timeLog.current = new Date();
		}, 1000);
		
		return () => {
			clearInterval(setTime);
			console.log('유즈 이펙트 리턴');
		};
	}, []);

	return (
		<>
			<div>
				<Moment format="YYYY.MM.DD HH:MM SS" date={timeLog.current} />
			</div>
		</>
	);
};

export default CurrentTime;