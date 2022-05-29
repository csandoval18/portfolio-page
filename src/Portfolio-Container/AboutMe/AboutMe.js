import React, { useEffect } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './AboutMe.css';

function AboutMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const SCREEN_CONSTANTS = {
		description:
			'Junior Full stack web developer with experience with multiple programming languages and concepts such as HTML5, CSS, JavaScript, PHP, SQL, Flutter, Firebase, OOP, data structures, and algorithms. I am a passionate learner that strives to grasp new technologies and skills to add to my personal toolbox of software development.',
		highlights: {
			bullets: [
				'Full Stack web development',
				'Responsive and interactive Front End design',
				'LAMP Stack',
				'MERN Stack',
				'Flutter',
			],
			heading: 'Highlight skills:',
		},
	};

	const renderHighlight = () => {
		return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
			<div className='highlight' key={i}>
				<div className='highlight-blob'></div>
				<span>{value}</span>
			</div>
		));
	};

	return (
		<div className='about-me-container screen-container' id={props.id || ''}>
			<div className='about-me-parent'>
				<ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
				<div className='about-me-card'>
					<div className='about-me-profile'></div>
					<div className='about-me-details'>
						<span className='about-me-desc'>
							{SCREEN_CONSTANTS.description}
						</span>
						<div className='about-me-highlights'>
							<div className='highlight-heading'>
								<span>{SCREEN_CONSTANTS.highlights.heading}</span>
							</div>
							{renderHighlight()}
						</div>
						<div className='about-me-options'>
							<button className='btn primary-btn-dark'>
								{''}
								Contact Me{' '}
							</button>
							<a
								className='btn highlighted-btn-dark'
								href='Resume.pdf'
								download='CAS_Resume.pdf'
							>
								Get Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
