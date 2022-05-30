import React from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './AboutMe.css';

function AboutMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const SCREEN_CONSTANTS = {
		description: `I am a junior full-stack web developer with experience in multiple programming
      languages and concepts such as HTML5, CSS, JavaScript, PHP, SQL, Flutter, React,
      OOP, data structures, and algorithms. I am always passionate about learning new technologies 
      and skills to add to my personal toolbox of software development!
      I would describe myself as a fast learner, and I am open to learn any development stacks 
      and tools, but I have a special interest in improving with the MERN stack and 
      Flutter + Firebase. I also hope to learn SCSS, .NET, and AWS in the near future!`,
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
		<div
			className='about-me-container screen-container fade-in'
			id={props.id || ''}
		>
			<div className='about-me-parent'>
				<ScreenHeading title={'About Me'} subHeading={'My background'} />
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
							<button
								className='btn primary-btn-dark'
								onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
							>
								Contact Me
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
