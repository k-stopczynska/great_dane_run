import CTALink from '@/components/CTALink';
import calendar_icon from '../assets/calendar_icon.png';
import creditcard_icon from '../assets/creditcard_icon.png';
import location_icon from '../assets/place_icon.png';
import distance_icon from '../assets/distance_icon.png';


interface EventInterface { 
    image: string;
    alt: string;
    title: string;
    description: string;
    date: string;
    place: string;
    distance: number;
    price: number;
}


const Event = (event: EventInterface) => { 
    const { image, alt, title, description, date, place, distance, price} = event;
    return (
		<div className='w-full bg-amber-400 rounded-4xl shadow-md relative'>
			<div className='w-[100px] h-[100px] bg-green-700 absolute top-4 right-4 rounded-4xl text-6xl font-bold text-center pt-2'>
				{distance} <p className='text-lg'>km</p>
			</div>
			<img src={image} alt={alt} className='rounded-4xl shadow-xl'></img>
			<div className='p-8'>
				<h3 className='text-lg lg:text-2xl font-bold pb-4'>{title}</h3>
				<p>{description}</p>
				<div className='flex items-center'>
					<img
						src={calendar_icon}
						alt='calendar'
						className='w-[30px] h-[30px] mr-2'
					></img>
					<p className='text-md lg: text-lg'>{date}</p>
				</div>
				<div className='flex items-center'>
					<img
						src={location_icon}
						alt='location'
						className='w-[30px] h-[30px] mr-2'
					></img>
					<p className='text-md lg: text-lg'>{place}</p>
				</div>
				<div className='flex items-center'>
					<img
						src={distance_icon}
						alt='distance'
						className='w-[30px] h-[30px] mr-2'
					></img>
					<p className='text-md lg: text-lg'>{distance} km</p>
				</div>
				<div className='flex items-center pb-8'>
					<img
						src={creditcard_icon}
						alt='credit card'
						className='w-[30px] h-[30px] mr-2'
					></img>
					<p className='text-md lg: text-lg'>{price} PLN</p>
				</div>
				<CTALink link='/register' text='Zapisz się'/>
			</div>
		</div>
	);
}

export default Event;