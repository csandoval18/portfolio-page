import React from 'react';
import TypeAnimation from 'react-type-animation';
import './Profile.css';

function Profile(props) {
	return (
		<div className='profile-container'>
			<div className='profile-parent'>
				<div className='profile-details'>
					<div className='colz'>
						<div className='colz-icon'>
							<a href='https://www.linkedin.com/in/christian-a-2151011b9/'>
								<i className='fa fa-linkedin-square fa-2x'></i>
							</a>
							<a href='https://github.com/csandoval18'>
								<i className='fa fa-github-square fa-2x'></i>
							</a>
						</div>
					</div>
					<div className='profile-details-name'>
						<span className='primary-text'>
							<p>Hey, I'm</p>
						</span>
						<span className='highlighted-text'>
							<p>Christian</p>
						</span>
					</div>
					<div className='profile-details-role'>
						<span className='type-animation'>
							<h1>
								{' '}
								<TypeAnimation
									cursor={true}
									repeat={Infinity}
									sequence={[
										'Junior Web Developer',
										1500,
										'LAMP Stack',
										1500,
										'MERN Stack',
										1500,
										'Mobile Development',
										1500,
										'Flutter + Firebase',
										1500,
									]}
								/>
							</h1>
							<span className='profile-role-tagline'>
								<p>
									University of Wisconsin - Whitewater graduate majoring in
									Computer Science with experience building applications with
									front end and back end operations.
								</p>
							</span>
						</span>
					</div>
					<div className='profile-options'>
						<button className='btn primary-btn'>
							{''}
							Contact Me{' '}
						</button>
						<a
							className='btn highlighted-btn'
							href='Resume.pdf'
							download='CAS_Resume.pdf'
						>
							Get Resume
						</a>
					</div>
				</div>
				<div className='profile-picture'>
					<div className='profile-picture-background'></div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
