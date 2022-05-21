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
							<a href='#'>
								<i className='fa fa-linkedin-square fa-2x'></i>
							</a>
							<a href='#'>
								<i className='fa fa-github-square fa-2x'></i>
							</a>
						</div>
					</div>
					<div className='profile-details-name'>
						<span className='primary-text'>
							<p>Hello, I'm</p>
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
								University of Wisconsin - Whitewater graduate majoring in
								Computer Science<br></br>with experience building applications
								with front end and back end operations.
							</span>
						</span>
					</div>
					<div className='profile-optins'>
						<button className='btn primary-btn'>
							{''}
							Hire Me{' '}
						</button>
						<a href='Resume.pdf' download='CAS_Resume.pdf'>
							<button className='btn highlighted-btn'>Get Resume</button>
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
