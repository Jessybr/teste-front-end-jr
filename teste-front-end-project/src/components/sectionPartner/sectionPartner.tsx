import style from './sectionPartner.module.scss';
import CardPartner from '../cardPartner/cardPartner';

export default function SectionPartner(){
    return(
        <>
            <section className={style.partnerContainer}>
                <CardPartner/>
                <CardPartner/>
            </section>
            
        </>
    )
}