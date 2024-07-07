import style from './cardPopUp.module.scss';
import PlusImg from '../../assets/images/plus.png';
import MinorImg from '../../assets/images/minus.png';
import { useState } from 'react';

interface ProductProps {
    productName: string;
    descriptionShort: string;
    price: number;
    photo: string;
    btnClose: () => void;
}

export default function CardPopUp({productName,descriptionShort,price,photo,btnClose} : ProductProps){
    const [number,setNumber] = useState(1);

    const eventNumberPlus = () => {
        setNumber(number + 1);
    }

    const eventNumberMinor = () => {
        if(number > 1){
            setNumber(number - 1);
        }
    }

    return(
        <div className={style.containerPopUp}>
            <div className={style.close} onClick={()=>btnClose()}>X</div>
            <div className={style.conteinerImg}>
                <img src={photo} alt="Celular" />
            </div>
            <div className={style.conteinerInfo}>
                <h1>{productName}</h1>
                <span>R${price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                <p>{descriptionShort}</p>
                <p className={style.more}>Veja mais detalhes do produto &gt;</p>
                <div className={style.box}>
                    <img src={MinorImg} alt="Minor" onClick={eventNumberMinor}/>
                    <span>{number}</span>
                    <img src={PlusImg} alt="Plus" onClick={eventNumberPlus} />
                </div>
                <button>Comprar</button>
            </div>
        </div>
    )
}