import { Link } from 'react-router-dom';
interface LinkInterface {
	link: string;
	text: string;
}

const CTALink = (props: LinkInterface) => {
	const { link, text } = props;
	return (
		<Link
			to={link}
			className='hover:underline inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3'
		>
			{text}
		</Link>
	);
};

export default CTALink;
