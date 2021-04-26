import axios from 'axios';
import { baseURL }  from 'constants/api-url';

const ProductService = {
    async getAllProducts() {
        const url = `${baseURL}/products`;
        const response = await axios.get(url)
            .then(res => res.data)
            .catch(err => console.log(err));

        return response; 
    }
}

export default ProductService;