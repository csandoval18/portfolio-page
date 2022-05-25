import React, { useEffect, useState } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';

function Resume(props) {
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carouselOffSetStyle, setCarouselOffSetStyle] = useState(0);

	const ResumeHeading = (props) => {
		<div className='resume-heading'>
			<div className='resume-main-heading'>
				<div className='heading-bullet'>
					<span>{props.heading ? props.heading : ''}</span>
					{props.fromDate && props.toDate ? (
						<div className='headingdate'>
							{props.fromDate + '_' + props.toDate}
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className='resume-sub-heading'>
					<span>{props.subHeading ? props.subHeading : ''}</span>
				</div>
				<div className='resume-heading-description'>
					<span>{props.description ? props.description : ''}</span>
				</div>
			</div>
		</div>;
	};

	const resumeBullets = [
		{ label: 'Education', logoSrc: 'educaion.svg' },
		{ label: 'Work History', logoSrc: 'work-history.svg' },
		{ label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
		{ label: 'Projects', logoSrc: 'projects.svg' },
		{ label: 'Interests', logoSrc: 'interests.svg' },
	];

	const programmingSkillsDetails = [
		{ skill: 'HTML', ratingPercentage: 90 },
		{ skill: 'CSS', ratingPercentage: 80 },
		{ skill: 'Javascript', ratingPercentage: 85 },
		{ skill: 'PHP', ratingPercentage: 80 },
		{ skill: 'Laravel', ratingPercentage: 65 },
		{ skill: 'SQL', ratingPercentage: 70 },
		{ skill: 'ReactJS', ratingPercentage: 70 },
		{ skill: 'ExpressJS', ratingPercentage: 45 },
		{ skill: 'MongoDB', ratingPercentage: 45 },
		{ skill: 'NodeJS', ratingPercentage: 70 },
		{ skill: 'Dart', ratingPercentage: 65 },
		{ skill: 'Flutter', ratingPercentage: 45 },
		{ skill: '.NET', ratingPercentage: 15 },
		{ skill: 'C#', ratingPercentage: 55 },
		{ skill: 'C++', ratingPercentage: 80 },
	];

	const projectsDetails = [
		{
			title: 'Personal Portfolio Website',
			duration: { fromDate: '2022', toDate: '2022' },
			description:
				'A personal portfolio website used to resume my skills aquired throughout my college education and hone my ReactJS knowledge.',
			subHeading: 'Technologies Used: ReactJS, HTML, CSS, Bootstrap, Git',
		},
		{
			title: 'Flutter Student Wellness App',
			duration: { fromDate: '2022', toDate: '2022' },
			description:
				'Group project developed for Software Engineering class focusing on the development of a mobile application for student atheletes seeking counselor help',
			subHeading: 'Technologies Used: Flutter, Dart, mySQL',
		},
		{
			title: 'DBMS Project',
			duration: { fromDate: '2020', toDate: '2020' },
			description:
				'Project developed for Database Management Systems class. Focusing on pagination of data, account handling with cart and wishlists. First website development experience.',
			subHeading: 'Technologies Used: PHP, mySQL, HTML, CSS, Bootstrap',
		},
	];

	const resumeDetails = [
		<div className='resume-screen-container' key='education'>
			<ResumeHeading
				heading={'University of Wisconsin - Whitewater'}
				subHeading={'Bachelor of Science in Computer Science, GPA: 3.458'}
				fromDate={'2018'}
				toDate={'2022'}
			/>
		</div>,
		<div className='resume-screen-container' key='education'>
			<ResumeHeading
				heading={'High School'}
				subHeading={'Sun Prairie High School'}
				fromDate={'2014'}
				toDate={'2018'}
			/>
			<div className='resume-screen-container' key='experience'>
				<ResumeHeading
					heading={'UWW Housing Development Services'}
					subHeading={'Student Web Developer'}
					fromDate={'2021'}
					toDate={'2022'}
				/>
				<div className='experience-description'>
					<div className='resume-description-text'>
						<div className='highlight-blob'></div>
						<span>
							Development and maintanance of web applications with HTML, JQuery,
							and MySQL. The applications were for use of residence hall front
							desk workers, students, and staff.
						</span>
					</div>
					<div className='resume-description-text'>
						<div className='highlight-blob'></div>
						<span>
							Creation and management of uww domain websites for the housing
							department using Ingeniux CMS.
						</span>
					</div>
					<div className='resume-description-text'>
						<div className='highlight-blob'></div>
						<span>
							Troubleshooting problems and aiding students with personal account
							issues in the campus system.
						</span>
					</div>
				</div>
			</div>
			<div
				className='resume-screen-container programming-skills-container'
				key='programming-skills'
			>
				{programmingSkillsDetails.map((skill, index) => (
					<div className='skill-parent'>
						<div className='heading-bullet'>
							<span>{skill.skill}</span>
							<div className='skill-percentage'>
								<div
									className='active-percentage'
									style={{ width: skill.ratingPercentage + '%' }}
								></div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='resume-screen-container' key='projects'>
				{projectsDetails.map((projectsDetails, index) => (
					<ResumeHeading
						key={index}
						heading={projectsDetails.title}
						subHeading={projectsDetails.subHeading}
						description={projectsDetails.description}
						fromDate={projectsDetails.fromDate}
						toDate={projectsDetails.duration.toDate}
					/>
				))}
			</div>

			<div className='resume-screen-container' key='interests'></div>
		</div>,
	];

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	return (
		<div className='resume-container secreen-container' id={props.id || ''}>
			<div className='resume-content'>
				<ScreenHeading title={'Resume'} subHeading={'My Details'} />
			</div>
		</div>
	);
}

export default Resume;
