import InfoSectionItem from './InfoSectionItem';
import cart from '../assets/cart_icon.png';
import run from '../assets/run_icon.png';
import results from '../assets/results_icon.png';
import podium from '../assets/podium_icon.png';

const items = [
	{
		title: 'Wykup pakiet startowy',
		description: 'Zarejestruj się i zapisz na wybrany bieg',
        image: cart,
		alt: 'shopping cart',
	},
	{
		title: 'Przebiegnij wybrany dystans',
		description: 'W wyznaczonym terminie przebiegnij/ przespaceruj/pokonaj rowerem wybrany dystans',
		image: run,
		alt: 'running man',
	},
	{
		title: 'Zaloguj swój wynik w koncie zawodnika',
		description: 'Po skończonym biegu opublikuj swój wynik wraz z potwierdzeniem w formie zdjęcia z aplikacji/ smartwatcha',
		image: results,
		alt: 'results chart',
	},
	{
		title: 'Sprawdź jak ci poszło',
		description: 'Sprawdź jak wypadłeś w rywalizacji z innymi dogełomaniakami',
		image: podium,
		alt: 'podium',
	},
];
const InfoSection = () => {
    return (
		<section>
			<h2 className='text-2xl lg:text-5xl font-bold text-center pt-8 lg:pt-12 pb-2'>Jak to działa?</h2>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8items-baseline p-4 lg:p-12'>
				{items.map((item, index) =>
					item ? <InfoSectionItem key={index} {...item} /> : null,
				)}
			</div>
		</section>
	);

}

export default InfoSection;