import './titleSession.scss';

interface TitleProps {
    text: string;
}

export default function TitleSession({text} : TitleProps){
    return(
        <div className='container'>
            <h1>Produtos relacionados</h1>
            <div className='line'></div>
            <h4>{text}</h4>
        </div>
    )
}