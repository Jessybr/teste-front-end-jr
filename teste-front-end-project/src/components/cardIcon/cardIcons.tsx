import style from './cardIcons.module.scss';

interface CardProps {
    imageSrc: string;
    text: string;
    styleClass: string;
}

export default function CardIcons({imageSrc, text, styleClass} : CardProps){
    return(
        <div className={style.cardIcons}>
            <div className={`${style.containerIcon} ${style[styleClass]}`}>
                <img src={imageSrc} alt="" />
            </div>
            <span className={style[styleClass]}>{text}</span>
        </div>
    )
}