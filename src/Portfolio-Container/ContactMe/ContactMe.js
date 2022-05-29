import React, { useState } from 'react';
import TypeAnimation from 'react-type-animation';
import contactMeBG from '../../assets/ContactMe/contactmebg.jpg';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './ContactMe.css';

function ContactMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [banner, setBanner] = useState('');
	const [bool, setBool] = useState(false);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div className='main-container' id={props.id || ''}>
			<ScreenHeading subHeading={'Send me a message'} title={'Contact Me'} />
			<div className='central-form'>
				<div className='row'>
					<h2 className='title'>
						<TypeAnimation
							cursor={true}
							repeat={1}
							sequence={['Send your message here:', 2000]}
						/>
					</h2>
				</div>
				<div className='back-form'>
					<div className='img-back'>
						<img src={contactMeBG} alt='image not found' />
					</div>
					<form>
						<p>{banner}</p>
						<label htmlFor='name'>Name</label>
						<input type='text' onChange={handleName} value={name} />
						<label htmlFor='email'>Email</label>
						<input type='email' onChange={handleEmail} value={email} />
						<label htmlFor='message'>Message</label>
						<textarea type='text' onChange={handleMessage} value={message} />
						<div className='submit-btn'>
							<button type='submit'>Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactMe;
