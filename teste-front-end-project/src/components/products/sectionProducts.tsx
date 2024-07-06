import './sectionProducts.scss';
import Left from '../../assets/images/left.png';
import Right from '../../assets/images/right.png';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/products';
import { ProductType } from '../../type/ProductType'
import TitleSession from '../titleSession/titleSession';
import CardPhone from '../cardPhone/cardPhone';

export default function SectionProducts() {
    const arrayProducts = ["Celular", "Acessórios", "Tablets", "Notebooks", "Tvs", "Ver todos"];
    const arrayStyle = ["pink"];
    const [products, setProducts] = useState<ProductType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        getProducts();
    }, []);

    // Calcula os índices dos produtos para a página atual
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Funções para mudar de página
    const nextPage = () => {
        if (currentPage < Math.ceil(products.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section>

            <TitleSession
                text = ""
            />
            <div className='container-products'>
                {arrayProducts.map((text, ind) => (
                    <div className='products' key={ind}>
                        <span className={arrayStyle[ind]}>{text}</span>
                    </div>
                ))}
            </div>

            <div className='container-card'>
                <div className='containerArrow'>
                    <button disabled={currentPage === 1}>
                        <img className='arrow' src={Left} alt="" onClick={prevPage}  />
                    </button>
                </div>
                <div className='container'>
                    {currentProducts.map((product, ind) => (
                        <CardPhone
                            ind = {ind}
                            productName = {product.productName}
                            price = {product.price}
                            photo = {product.photo}
                        />
                    ))}
                </div>
                <div className='containerArrow'>
                    <button disabled={currentPage === Math.ceil(products.length / itemsPerPage)}>
                        <img className='arrow' src={Right} alt="" onClick={nextPage} />
                    </button>
                </div>
            </div>
        </section>
    );
}
