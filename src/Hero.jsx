import heroImg from './assets/hero.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Contentful is a powerful headless content management
						system (CMS) that provides a flexible back-end solution
						for managing digital content. It offers an intuitive
						user interface for content creation and management while
						allowing for separate front-end systems. With
						Contentful, content creators can organize, edit, and
						distribute content across various platforms and devices,
						ensuring consistency and flexibility in content
						delivery. Its API-first approach enables seamless
						integration with various development frameworks,
						allowing developers to access content through APIs and
						display it in web or mobile applications.
					</p>
				</div>
				<div className='img-container'>
					<img
						src={heroImg}
						alt='woman and the browser'
						className='img'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
