import style from './cardRelatedProducts.module.scss';

export default function CardRelatedProducts(){
    return(
        <div className={style.container}>
            <div className={style.partnerCard}>
                <h1>Produtos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
            </div>
        </div>
    )
}