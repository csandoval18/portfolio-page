import React from 'react';
import TypeAnimation from 'react-type-animation';
import './Profile.css';

export default function Profile(props) {
	return (
		<div className='profile-container'>
			<div className='profile-parent'>
				<div className='profile-details'>
					<div className='colz'>
						<a href='#'>
							<i className='fa fa-facebook-square'></i>
						</a>
						<a href='#'>
							<i className='fa fa-google-plus-square'></i>
						</a>
						<a href='#'>
							<i className='fa fa-instagram'></i>
						</a>
						<a href='#'>
							<i className='fa fa-youtube-square'></i>
						</a>
						<a href='#'>
							<i className='fa fa-twitter'></i>
						</a>
					</div>

					<div className='profile-details-name'>
						<span className='primary-text'>
							{' '}
							Hello, I'm <span className='highlighted-text'>Christian</span>
						</span>
					</div>

					<div className='profile-details-role'>
						<span className='primary-text'>
							{' '}
							<h1>
								{' '}
								<TypeAnimation
									cursor={true}
									wrapper='h1'
									repeat={Infinity}
									sequence={[
										'Junior Web Developer',
										1000,
										'Junior Full Stack Developer',
										1000,
										'LAMP Stack',
										1000,
										'MERN Stack',
										1000,
										'Enthusiastic Dev',
										1000,
									]}
								/>
							</h1>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
