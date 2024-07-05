import style from './circleBrands.module.scss';
import VtexCircleImg from '../../assets/images/vtexCircle.png';

export default function CircleBrands(){
    return(
        <div className={style.circle}>
            <img src={VtexCircleImg} alt="Vtex logo" />
        </div>
    )
}