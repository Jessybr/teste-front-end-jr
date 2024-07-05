import style from './cardPhone.module.scss';

interface ProductProps {
    ind: number;
    productName: string;
    price: number;
    photo: string;
    
}

export default function CardPhone({ind, productName, price, photo} : ProductProps){
    return (
        <div className={style.cardPhone}>
            <div className={style.info} key={ind}>
                <div className={style.cardHeader}>
                    <img src={photo} alt={productName} />
                    <h3>{productName}</h3>
                </div>
                <span className={style.priceOld}>R${(price.toFixed(2)) + 200}</span>
                <span className={style.price}>R${price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                <span className={style.rate}>ou 2x de R$ 49,95 sem juros</span>
                <span className={style.freight}>Frete grátis</span>
                <button>Comprar</button>
            </div>
        </div>
    )
}