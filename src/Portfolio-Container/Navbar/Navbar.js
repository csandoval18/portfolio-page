import React, { useState } from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../Utilities/CommonUtils';
import ScrollService from '../../Utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

function Navbar(props) {
	const [selectedScreen, setSelectedScreen] = useState(0);
	const [showNavbarOptions, setShowNavbarOptions] = useState(false);

	const updateCurrentScrreen = (currentScreen) => {
		if (!currentScreen || !currentScreen.screenInView) return;
		let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
		if (screenIndex < 0) return;
	};

	let currentScreenSubscription =
		ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScrreen);

	//Get all navbar screens to display once navbar option is clicked
	const getNavbarOptions = () => {
		return TOTAL_SCREENS.map((screen, i) => (
			<div
				key={screen.screen_name}
				className={getNavbarOptionsClass(i)}
				onClick={() => switchScreen(i, screen)}
			>
				<span>{screen.screen_name}</span>
			</div>
		));
	};

	const getNavbarOptionsClass = (index) => {
		let classes = 'navbar-option' + ' ';
		if (index < TOTAL_SCREENS.length - 1) {
			classes += 'navbar-option-separator' + ' ';
		}
		if (selectedScreen === index) {
			classes += 'selected-navbar-option' + ' ';
		}
		return classes;
	};

	const switchScreen = (index, screen) => {
		let screenComponent = document.getElementById(screen.screen_name);
		console.log('selected screen: ' + screenComponent.id);
		if (!screenComponent) return;

		if (screenComponent.id == 'Home') {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		} else {
			screenComponent.scrollIntoView({ block: 'start', behavior: 'smooth' });
		}
		console.log('index: ' + index);
		setSelectedScreen(index);
		//makes navbar disappear after clicking a Navbar option
		setShowNavbarOptions(false);
		console.log('showNavbaroptions: ' + showNavbarOptions);
	};

	return (
		<div className='navbar-container'>
			<div className='navbar-parent'>
				<div
					className='navbar-hamburger'
					onClick={() => {
						setShowNavbarOptions(!showNavbarOptions);
						console.log(showNavbarOptions);
					}}
				>
					<FontAwesomeIcon className='navbar-hamburger-bars' icon={faBars} />
				</div>
				<div className='navbar-logo'>
					<span className='navbar-logo'>CAS</span>
				</div>
				<div
					className={
						showNavbarOptions
							? 'navbar-options show-hamburger-option'
							: 'navbar-options'
					}
				>
					<div className='close-navbar-container'>
						<button
							onClick={() => {
								setShowNavbarOptions(!showNavbarOptions);
								console.log(showNavbarOptions);
							}}
							type='button'
							className='close-navbar-options'
							aria-label='close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					{getNavbarOptions()}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
