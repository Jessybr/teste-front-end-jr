import style from './sectionBanner.module.scss';

export default function SectionBanner(){
    return (
        < >
            <section className={style.sectionBanner}>
                <div className={style.info}>
                    <h1>Venha conhecer nossas promoções</h1>
                    <h2>50% Off nos produtos</h2>
                    <button>Ver produto</button>
                </div>
            </section>
        </>
    )
}