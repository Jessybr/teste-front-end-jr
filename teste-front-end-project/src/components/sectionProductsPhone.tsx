import '../assets/style/sectionProductsPhone.scss';

export default function SectionProductsPhone(){
    const arrayProducts = ["Celular","Acessórios","Tablets","Notebooks","Tvs","Ver todos"];
    const arrayStyle = ["pink"];

    return (
        <section>
            <div className='container'>
                <h1>Produtos relacionados</h1>
                <div className='line'></div>
            </div>
            <div className='container-products'>
                {arrayProducts.map((text, ind) => (
                    <div className='products'>
                        <span className={arrayStyle[ind]}>{text}</span>
                    </div>
                ))}
                
            </div>
        </section>
    )
}