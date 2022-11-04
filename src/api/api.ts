import axios from "axios";


export default {
  async  getProducts(limit:number = 4) {
    try {
        const response = await axios.get(`http://localhost:3000/products?_limit=${limit}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
  },
};
