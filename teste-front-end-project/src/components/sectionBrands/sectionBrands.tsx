import style from './sectionBrands.module.scss';
import CircleBrands from "../circleBrands/circleBrands";

export default function SectionBrands(){
    return(
        <section>
            <h1>Navegue por marcas</h1>
            <div className={style.containerBrands}>
                <CircleBrands/>
                <CircleBrands/>
                <CircleBrands/>
                <CircleBrands/>
                <CircleBrands/>
            </div>
        </section>
    )
}