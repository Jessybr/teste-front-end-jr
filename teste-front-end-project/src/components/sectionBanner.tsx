import '../assets/style/sectionBanner.scss';
import Banner from '../assets/images/Banner.png';

export default function SectionBanner(){
    return (
        < >
            <section className='section-banner'>
                <h1>Venha conhecer nossas promoções</h1>
                <h2>50% Off nos produtos</h2>
                <button>Ver produto</button>
            </section>
            <img className='banner' src={Banner} alt="" />
        </>
    )
}