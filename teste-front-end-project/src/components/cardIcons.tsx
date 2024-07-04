import '../assets/style/sectionCards.scss';

interface CardProps {
    imageSrc: string;
    text: string;
    style: string;
}

export default function CardIcons({imageSrc, text, style} : CardProps){
    return(
        <div className="card-icons">
            <div className={`container-icon ${style}`}>
                <img src={imageSrc} alt="" />
            </div>
            <span>{text}</span>
        </div>
    )
}