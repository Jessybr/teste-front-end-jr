import style from './cardPartner.module.scss';
import PartnerImg from '../assets/images/partner.png'

export default function CardPartner(){
    return(
        <div className={style.container}>
            <div className={style.partnerCard}>
                <h1>Parceiros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
            </div>
            {/* <img className={style.imgPartner} src={PartnerImg} alt="Sala com computadores" /> */}
        </div>
    )
}