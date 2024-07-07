import style from './titleSession.module.scss';

interface TitleProps {
    text: string;
}

export default function TitleSession({text} : TitleProps){
    return(
        <div className={style.container}>
            <h1>Produtos relacionados</h1>
            <div className={style.line}></div>
            <h4>{text}</h4>
        </div>
    )
}