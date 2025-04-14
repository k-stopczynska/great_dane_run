
interface EventInterface { 
    image: string;
    alt: string;
    title: string;
    description: string;
    date: string;
    place: string;
    distance: number;
}


const Event = (event: EventInterface) => { 
    const { image, alt, title, description, date, place, distance} = event;
    return (
        <div>
            <img src={image} alt={alt}></img>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{date}</p>
            <p>{place}</p>
            <p>{distance}</p>
        </div>
    )
}

export default Event;