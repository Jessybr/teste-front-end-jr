import '../assets/style/sectionCards.scss';
import MonitorarIcon from '../assets/images/monitorar-tablet-e-smartohone.png';
import SupermercadoIcon from '../assets/images/supermercados.png';
import BebidasIcon from '../assets/images/whiskey.png';
import FerramentasIcon from '../assets/images/ferramentas.png';
import SaudeIcon from '../assets/images/cuidados-de-saude.png';
import CorridaIcon from '../assets/images/corrida.png';
import ModaIcon from '../assets/images/moda.png';
import CardIcons from './cardIcons';

export default function SectionCards(){
    const arrayIcons = [MonitorarIcon,SupermercadoIcon,BebidasIcon,FerramentasIcon,SaudeIcon,CorridaIcon,ModaIcon];
    const arrayText = ["Tecnologia","Supermercado","Bebidas","Ferramentas","Saúde","Esportes e Fitness","Moda"];
    const arrayStyle = ["pink","bgGray","bgGray","bgGray","bgGray","bgGray","bgGray"];

    return(
        <section className='section-cards'>
            {arrayIcons.map((icon, index) => (
                <CardIcons
                    key={index}
                    imageSrc={icon}
                    text={arrayText[index]}
                    style={arrayStyle[index]}
                />
            ))}
        </section>
    )
}