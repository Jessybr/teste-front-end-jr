import style from './footer.module.scss';
import VisaImg from '../../assets/images/visa.png';
import EloImg from '../../assets/images/elo.png';
import AleloImg from '../../assets/images/alelo.png';
import DinnerImg from '../../assets/images/dinners.png';
import IfoodImg from '../../assets/images/ifood.png';
import MastercardImg from '../../assets/images/mastercard.png';
import PixImg from '../../assets/images/pix.png';
import AmexImg from '../../assets/images/amex.png';
import TicketImg from '../../assets/images/ticket.png';
import SodexoImg from '../../assets/images/sodexo.png';
import FacebookImg from '../../assets/images/facebook.png';
import InstagramImg from '../../assets/images/instagram.png';
import YoutubeImg from '../../assets/images/youtube.png';
import EconverseImg from '../../assets/images/econverse.png';
import VtexImg from '../../assets/images/vtexFooter.png';

export default function Footer(){
    const arrayPaymentImg = [VisaImg,EloImg,AleloImg,DinnerImg,IfoodImg,MastercardImg,PixImg,AmexImg,TicketImg,SodexoImg];
    const arraySocialImg = [FacebookImg,InstagramImg,YoutubeImg];

    return(
        <footer>
            <div className={style.containerHeader}>

                <div className={style.containerAbout}>
                    <h3>Sobre nós</h3>
                    <div className={style.about}>
                        <ul>
                            <li>Conheça</li>
                            <li>Como comprar</li>
                            <li>Indicação e desconto</li>
                        </ul>
                    </div>
                    <div className={style.socialMedias}>
                        {arraySocialImg.map((img) => (
                            <img src={img} alt={img} />
                        ))}
                    </div>
                </div>

                <div className={style.containerInfo}>
                    <h3>Informações úteis</h3>
                    <div className={style.info}>
                        <ul>
                            <li>Fale conosco</li>
                            <li>Dúvidas</li>
                            <li>Prazos de entrega</li>
                            <li>Formas de pagamento</li>
                            <li>Politica de privacidade</li>
                            <li>Trocas e devoluções</li>
                        </ul>
                    </div>
                </div>

                <div className={style.containerPayments}>
                    <h3>Formas de pagamento</h3>
                    <div className={style.payment}>
                        {arrayPaymentImg.map((img) => (
                            <img src={img} alt={img} />
                        ))}
                    </div>
                </div>

                <div className={style.containerSubscrib}>
                    <div className={style.containerCard}>
                        <p className={style.title}>Cadastre-se e Receba nossas <span>novidades e promoções</span></p>
                        <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <div className={style.input}>
                            <form action="">
                                <input type="text" placeholder='Seu e-mail' />
                                <button>OK</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.containerBottom}>
                <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                <div>
                    <img src={EconverseImg} alt={EconverseImg} />
                    <img src={VtexImg} alt={VtexImg} />
                </div>
            </div>
        </footer>
    )
}