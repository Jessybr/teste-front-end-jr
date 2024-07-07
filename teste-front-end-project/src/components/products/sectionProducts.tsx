import './sectionProducts.scss';
import Left from '../../assets/images/left.png';
import Right from '../../assets/images/right.png';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/products';
import { ProductType } from '../../type/ProductType';
import TitleSession from '../titleSession/titleSession';
import CardPhone from '../cardPhone/cardPhone';
import CardPopUp from '../cardPopUp/cardPopUp';

export default function SectionProducts() {
    const arrayProducts = ["Celular", "Acessórios", "Tablets", "Notebooks", "Tvs", "Ver todos"];
    const arrayStyle = ["pink"];
    const [popUp, setPopUp] = useState(false);
    const [indProd, setIndProd] = useState<number | null>(null);
    const [classPopUp, setClassPopUp] = useState("hidden");
    const [products, setProducts] = useState<ProductType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const setPopUpToFlex = (ind: number) => {
        setIndProd(ind);
        setPopUp(true);
        setClassPopUp("flex");
    };

    const setPopUpToHidden = () => {
        setPopUp(false);
        setClassPopUp("hidden");
    };

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

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
            <TitleSession text="" />
            <div className='container-products'>
                {arrayProducts.map((text, ind) => (
                    <div className='products' key={ind}>
                        <span className={arrayStyle[ind]}>{text}</span>
                    </div>
                ))}
            </div>
            <div className='container-card'>
                <div className='containerArrow'>
                    <button disabled={currentPage === 1} onClick={prevPage}>
                        <img className='arrow' src={Left} alt="Previous" />
                    </button>
                </div>
                <div className='container'>
                    {currentProducts.map((product, index) => (
                        <CardPhone
                            key={index}
                            ind={indexOfFirstProduct + index}
                            productName={product.productName}
                            price={product.price}
                            photo={product.photo}
                            btnAction={() => setPopUpToFlex(indexOfFirstProduct + index)}
                        />
                    ))}
                </div>
                <div className='containerArrow'>
                    <button disabled={currentPage === Math.ceil(products.length / itemsPerPage)} onClick={nextPage}>
                        <img className='arrow' src={Right} alt="Next" />
                    </button>
                </div>
            </div>
            {popUp && indProd !== null && products[indProd] && (
                <div className='overlay'>
                    <div className={classPopUp}>
                        <CardPopUp
                            productName={products[indProd].productName}
                            descriptionShort={products[indProd].descriptionShort}
                            price={products[indProd].price}
                            photo={products[indProd].photo}
                            btnClose={setPopUpToHidden}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
