import React from 'react';
import Navbar from '../Navbar/Navbar';
import Profile from './Profile/Profile';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Home.css';

function Home(props) {
	return (
		<div className='home-container' id='Home'>
			<Profile />
		</div>
	);
}

export default Home;
