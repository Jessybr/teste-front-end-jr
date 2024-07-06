import style from './header.module.scss';
import ShieldCheck from '../../assets/images/ShieldCheck.png';
import Truck from '../../assets/images/Truck.png'
import CreditCard from '../../assets/images/CreditCard.png';
import Vtex from '../../assets/images/Vtex.png';
import MagnifyingGlass from '../../assets/images/MagnifyingGlass.png';
import Packege from '../../assets/images/Package.png';
import Heart from '../../assets/images/Heart.png';
import UserCircle from '../../assets/images/UserCircle.png';
import ShoppingCart from '../../assets/images/ShoppingCart.png';
import CrownSimple from '../../assets/images/CrownSimple.png';

export default function Header(){
    return(
        <header>
            <div className={style.info}>
                <div className={style.infoText}>
                    <img src={ShieldCheck} alt="" />
                    <p>Compra <span>100% segura</span></p>
                </div>
                <div className={style.infoText}>
                    <img src={Truck} alt="" />
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </div>
                <div className={style.infoText}>
                    <img src={CreditCard} alt="" />
                    <p><span>Parcele</span> suas compras</p>
                </div>
            </div>

            <nav>
                <div className={style.navSearch}>
                    <img src={Vtex} alt="" />
                    <div className={style.search}>
                        <span>O que você está buscando?</span>
                        <img src={MagnifyingGlass} alt="Magnifying Glass image" />
                    </div>
                    <div className={style.styleIcons}>
                        <img src={Packege} alt="" />
                        <img src={Heart} alt="" />
                        <img src={UserCircle} alt="" />
                        <img src={ShoppingCart} alt="" />
                    </div>
                </div>
                <div className={style.navSessions}>
                    <span>Todas categorias</span>
                    <span>Supermercado</span>
                    <span>Livros</span>
                    <span>Moda</span>
                    <span>Lançamentos</span>
                    <span className={style.pink}>Ofertas do dia</span>
                    <div>
                        <img src={CrownSimple} alt="" />
                        <span>Assinatura</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}