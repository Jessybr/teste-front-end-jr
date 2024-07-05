import style from './sectionRelatedProducts.module.scss';
import CardRelatedProducts from "../cardRelatedProducts/cardRelatedProducts";
import TitleSession from "../titleSession/titleSession";

export default function SectionRelatedProducts(){
    return(
        <section>
            <TitleSession
                text = "Ver todos"
            />
            <div  className={style.productsContainer}>
                <CardRelatedProducts/>
                <CardRelatedProducts/>
            </div>
        </section>
    )
}