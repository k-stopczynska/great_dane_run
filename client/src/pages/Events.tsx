import EventsList from '@/components/Events';

const Events = () => { 
    return (
		<section>
			<h2 className='text-2xl lg:text-5xl font-bold text-center pt-8 lg:pt-12 pb-8'>
				Nadchodzące wydarzenia
			</h2>
			<EventsList />
		</section>
	);
}

export default Events;