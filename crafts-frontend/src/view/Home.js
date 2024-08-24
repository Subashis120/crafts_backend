import Banner from '../components/Banner';
import ShopByCategory from '../components/ShopByCategory';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { _getCategory } from "../Call/ApiCall";


export default function Home() {

    const users = useSelector((state) => state.users);
    // const [data, setData] = useState([]);
    // useEffect( () => {
    //     fetchCategoryData();
    // },[]);

    // const fetchCategoryData = async () => {
    //     try {
    //        await _getCategory('/inventory/api/category/all')
    //       .then( response =>{
    //         if(response.status === 200){
    //         console.log("res ", response);
    //         setData(response.data);
    //         }
    //       });
          
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       // Handle errors
    //     }
    //   };

    return (
        <>
            <Navbar />
            <Banner/>
            <ShopByCategory />
            <ProductList />
            <Footer />
        </>
    );
}