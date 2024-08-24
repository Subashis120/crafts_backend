import { React, useEffect, useState } from "react";
import { _getCategory } from "../Call/ApiCall";
import { useSelector } from 'react-redux';

// const categories = [
//     {
//         id: 1,
//         name: 'Wakefit',
//         href: '#',
//         imageSrc: 'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Magnus/WSFAMGNN3FNTN/1.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '₹39,999.00',
//         color: 'Brown',
//     },
//     {
//         id: 2,
//         name: 'Wooden Street',
//         href: '#',
//         imageSrc: 'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/new-logo/teak/1.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '₹99,989.00',
//         color: 'Off White',
//     },
//     {
//         id: 3,
//         name: 'Nilkamal',
//         href: '#',
//         imageSrc: 'https://www.at-home.co.in/cdn/shop/products/159LYf_1.jpg?v=1652776402',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '₹21,900.00',
//         color: 'Black',
//     },
//     {
//         id: 4,
//         name: 'Royal',
//         href: '#',
//         imageSrc: 'https://aarsunwoods.com/wp-content/uploads/2023/06/Royal-Sofa-Set-in-Gold-Paint-D-jpg.webp',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '₹348,100.00',
//         color: 'Gold White',
//     },
//     {
//         id: 5,
//         name: 'Wakefit',
//         href: '#',
//         imageSrc: 'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Magnus/WSFAMGNN3FNTN/1.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '₹39,999.00',
//         color: 'Brown',
//     },
//     {
//         id: 6,
//         name: 'Wooden Street',
//         href: '#',
//         imageSrc: 'https://images.woodenstreet.de/image/data/fabric-sofa/Mellisa-fabric-sofa/new-logo/teak/1.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '₹99,989.00',
//         color: 'Off White',
//     },
// ]

export default function Category() {

    const [data, setData] = useState([]);
    const users = useSelector((state) => state.users);
    const token = users.users.access_token;
    
    //console.log("cat users", users);

    const css = `@media (max-width: 650px) {
        .divTop1 {
            margin-top: 10vh;
        }
    }`;

    useEffect( () => {
        setTimeout(() => {
            fetchData();
          }, 1000);
    },[]);
    
    const fetchData = async () => {
        try {
           await _getCategory('/inventory/api/category/premium?isPremium=true', { headers: { Authorization: 'Bearer '+token } })
          .then( response =>{
            //console.log("res ", response);
            if(response.status === 200){
            setData(response.data);
            }
          });
          
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle errors
        }
      };


    return (
        <>
        <style scoped>{css}</style>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 divTop1">
                    {data.map(( category, index) => (
                        index <= 5 ?
                        <div key={category.id} className="group relative border border-yellow-800 rounded-xl p-2">
                            <article 
                                className={`relative w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 mx-auto ${(index === 5 && data.length > 5) ? '': 'hover:opacity-75'}`}
                                style={{ height: '30vh', padding: '10%' }}>
                                <img
                                    src={category.imageUrl}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                { (index === 5 && data.length > 5)  
                                ?  <button type="button" className="z-10 w-32 bg-[#4e0083]  hover:bg-[#4f0083cc] text-white tracking-wide font-semibold text-sm py-2 px-5 rounded-xl mt-8 mx-10">
                                View All
                            </button> :
                            <h3 className="z-10 text-xl font-bold text-white"
                            >{category.categoryName}</h3>}

                            {/* <h3 className="z-10 text-xl font-bold text-white"
                                >{category.name} {index}</h3> */}
                            </article>
                        </div>
                        : ""
                    ))}
                </div>
            </div>
        </div >
        </>
    );
}