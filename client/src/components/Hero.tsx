import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import hero from '../assets/great_dane_placeholder.jpg';

const Hero = () => {
	return (
		<section
			className='w-full h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-screen bg-cover bg-center bg-no-repeat relative'
			style={{ backgroundImage: `url(${hero})` }}
		>
			<div className='absolute right-12 top-1 w-[30%] flex flex-col items-end'>
				<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-right pb-12'>
					Weź udział w wirtualnym biegu charytatywnym i wspomóż dogi
					szukające domów!
				</h1>

				<Link
					to='/contact'
					className='hover:underline inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3'
				>
					Zapisz się na bieg
				</Link>
			</div>
		</section>
	);
};

export default Hero;
