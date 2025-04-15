import CTALink from './CTALink';
import hero from '../assets/great_dane_placeholder.jpg';

const Hero = () => {
	return (
		<section
			className='w-full h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-screen bg-cover bg-center bg-no-repeat relative'
			style={{ backgroundImage: `url(${hero})` }}
		>
			<div className='absolute right-4 lg:right-12 top-1 w-[30%] flex flex-col items-end'>
				<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-right pb-12'>
					Weź udział w wirtualnym biegu charytatywnym i wspomóż dogi
					szukające domów!
				</h1>

				<CTALink link='/events' text='Zobacz wydarzenia'/>
			</div>
		</section>
	);
};

export default Hero;
