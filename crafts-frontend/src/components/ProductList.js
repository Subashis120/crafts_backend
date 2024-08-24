import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { _getCategory } from "../Call/ApiCall";
import { useSelector, useDispatch } from 'react-redux';
import { addCategory } from "../config/UserReducer";

const products = [
    {
        id: 1,
        name: 'Wakefit',
        href: '#',
        imageSrc: 'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Magnus/WSFAMGNN3FNTN/1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹39,999.00',
        color: 'Brown',
    },
    {
        id: 2,
        name: 'Wooden Street',
        href: '#',
        imageSrc: 'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/new-logo/teak/1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹99,989.00',
        color: 'Off White',
    },
    {
        id: 3,
        name: 'Nilkamal',
        href: '#',
        imageSrc: 'https://www.at-home.co.in/cdn/shop/products/159LYf_1.jpg?v=1652776402',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹21,900.00',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Royal',
        href: '#',
        imageSrc: 'https://aarsunwoods.com/wp-content/uploads/2023/06/Royal-Sofa-Set-in-Gold-Paint-D-jpg.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹348,100.00',
        color: 'Gold White',
    },
    {
        id: 5,
        name: 'Wakefit',
        href: '#',
        imageSrc: 'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Magnus/WSFAMGNN3FNTN/1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹39,999.00',
        color: 'Brown',
    },
    {
        id: 6,
        name: 'Wooden Street',
        href: '#',
        imageSrc: 'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/new-logo/teak/1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹99,989.00',
        color: 'Off White',
    },
    {
        id: 7,
        name: 'Nilkamal',
        href: '#',
        imageSrc: 'https://www.at-home.co.in/cdn/shop/products/159LYf_1.jpg?v=1652776402',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹21,900.00',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Royal',
        href: '#',
        imageSrc: 'https://aarsunwoods.com/wp-content/uploads/2023/06/Royal-Sofa-Set-in-Gold-Paint-D-jpg.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹348,100.00',
        color: 'Gold White',
    },
]
export default function ProductList() {

    const [data, setData] = useState([]);
    const users = useSelector((state) => state.users);
    const token = users.users.access_token;

    useEffect( () => {
        // setTimeout(() => {
            
        //   }, 1000);
        fetchData();
    },[]);

    const dispatch = useDispatch();
    
    const fetchData = async () => {
        try {
           await _getCategory('/inventory/api/inventory/item/all', { headers: { Authorization: 'Bearer '+token } })
          .then( response =>{
            console.log("res list", response);
            if(response.status === 200){
            setData(response.data);
            }
          });
          
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle errors
        }
      };

      //const { addData} = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h3 className="font-bold text-3xl text-[#4e0083] leading-tight mt-5"
                    style={{ marginTop: '-15%' }}>
                    <span className="text-yellow-800">What Customers </span>Preferred! Try Out
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <Link to="/item"
                        onClick={()=>{
                            console.log("saving data", product);
                            dispatch(addCategory(product));
                        }}>
                            <div key={product.id} className="group relative border border-yellow-800 p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        alt=""
                                        src={product.images[0]}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-l font-bold text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.itemName}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-md text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-md font-medium text-gray-900">&#8377; {product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}