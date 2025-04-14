export interface InfoSectionItemInterface {
	title: string;
	description: string;
	image: string;
	alt: string;
}

const InfoSectionItem = (InfoSectionItem: InfoSectionItemInterface) => {
	const {title, description, image, alt } = InfoSectionItem;
	return (
		<div className='w-full h-full flex flex-col flex-1 items-center text-center border border-gray-200 rounded shadow-md p-4 lg:p-12'>
			<img src={image} alt={alt} className='w-[75px] h-[75px] pb-6'></img>
			<h3 className='text-lg lg:text-2xl font-bold leading-tight pb-2'>{title}</h3>
			<p className='text-sm lg:text-lg'>{description}</p>
		</div>
	);
};

export default InfoSectionItem;
