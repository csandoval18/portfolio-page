import React from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import './Home.css';

function Home(props) {
	return (
		<div className='home-container'>
			<Header />
			<Profile />
		</div>
	);
}

export default Home;
