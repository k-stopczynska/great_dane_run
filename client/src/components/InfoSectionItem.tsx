export interface InfoSectionItemInterface {
	title: string;
	description: string;
	image: string;
	alt: string;
}

const InfoSectionItem = (InfoSectionItem: InfoSectionItemInterface) => {
	const {title, description, image, alt } = InfoSectionItem;
	return (
        <div>
			<img src={image} alt={alt}></img>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

export default InfoSectionItem;
