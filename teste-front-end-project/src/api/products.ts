import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
        return response.data.products;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
};