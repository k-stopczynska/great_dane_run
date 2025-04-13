import InfoSectionItem from './InfoSectionItem';
import { InfoSectionItemInterface } from './InfoSectionItem';
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
	,
	{
		title: 'Zaloguj swój wynik w koncie zawodnika',
		description: 'Po skończonym biegu opublikuj swój wynik wraz z potwierdzeniem w formie zdjęcia z aplikacji/ smartwatcha',
		image: results,
		alt: 'results chart',
	},
	,
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
			<h2>Jak to działa?</h2>
			{items.map((item, index) =>
				item ? <InfoSectionItem key={index} {...item} /> : null,
			)}
		</section>
	);

}

export default InfoSection;