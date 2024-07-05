import './titleSession.scss';

interface TitleProps {
    text: string;
}

export default function TitleSession({text} : TitleProps){
    return(
        <div className='container'>
            <h1>{text}</h1>
            <div className='line'></div>
        </div>
    )
}