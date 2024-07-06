import style from './otherProducts.module.scss';
import MonitorarIcon from '../../assets/images/monitorar-tablet-e-smartohone.png';
import SupermercadoIcon from '../../assets/images/supermercados.png';
import BebidasIcon from '../../assets/images/whiskey.png';
import FerramentasIcon from '../../assets/images/ferramentas.png';
import SaudeIcon from '../../assets/images/cuidados-de-saude.png';
import CorridaIcon from '../../assets/images/corrida.png';
import ModaIcon from '../../assets/images/moda.png';
import CardIcons from '../cardIcon/cardIcons.tsx';

export default function OtherProducts(){
    const arrayIcons = [MonitorarIcon,SupermercadoIcon,BebidasIcon,FerramentasIcon,SaudeIcon,CorridaIcon,ModaIcon];
    const arrayText = ["Tecnologia","Supermercado","Bebidas","Ferramentas","Saúde","Esportes e Fitness","Moda"];
    const arrayStyle = ["pink"];

    return(
        <section className={style.sectionCards}>
            {arrayIcons.map((icon, ind) => (
                <CardIcons
                    key={ind}
                    imageSrc={icon}
                    text={arrayText[ind]}
                    styleClass={arrayStyle[ind]}
                />
            ))}
        </section>
    )
}