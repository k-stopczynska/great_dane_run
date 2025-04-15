import Event from './Event';
import run from '../assets/great_dane_run_3.png';
import bike from '../assets/great_dane_run_4.png';
import walk from '../assets/great_dane_run_5.png';


const events = [
	{
		image: walk,
		alt: 'person nordic walking with great dane',
		title: 'Marsz z kijkami',
		description: '',
		date: '2025/06/19-2025/06/22',
		place: 'gdziekolwiek chcesz',
		distance: 5,
		price: 49.99,
	},
	{
		image: run,
		alt: 'person running with great dane',
		title: 'Bieg',
		description: '',
		date: '2025/06/19-2025/06/22',
		place: 'gdziekolwiek chcesz',
		distance: 5,
		price: 49.99,
	},
	{
		image: bike,
		alt: 'person biking with great dane',
		title: 'Wyścig rowerowy',
		description: '',
		date: '2025/06/19-2025/06/22',
		place: 'gdziekolwiek chcesz',
		distance: 16,
		price: 49.99,
	},
];



const EventsList = () => { 
    return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-12'>
			{events.map((event, index) =>
				event ? <Event key={index} {...event} /> : null,
			)}
		</div>
	);
}

export default EventsList;