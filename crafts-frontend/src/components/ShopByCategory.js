import { React, useEffect, useState } from "react";
import { _getCategory } from "../Call/ApiCall";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// const callouts = [
//     {
//         name: 'Desk and Office',
//         description: 'Work from home accessories',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
//         imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//         href: '#',
//     },
// ]

// const callouts1 = [
//     {
//         name: 'Self-Improvement',
//         description: 'Journals and note-taking',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
//         imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//         href: '#',
//     },
//     {
//         name: 'Travel',
//         description: 'Daily commute essentials',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
//         imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//         href: '#',
//     },
// ]
export default function ShopByCategory() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const users = useSelector((state) => state.users);
    console.log("users", users);
    if(!users.users){
        window.location.href="/login";
    }
    const token = users.users.access_token;

    const css = `
    .divTop2 {
        height: 100vh;
        padding: 10%;
    }
    @media (max-width: 650px) {
        .divTop2 {
            height: 46vh;
        }
    }`;

    useEffect( () => {
        console.log("calling api");
        setTimeout(() => {
            fetchData();
          }, 1000);
    },[]);
    
    const fetchData = async () => {
        try {
           await _getCategory('/inventory/api/category/premium?isPremium=false', { headers: { Authorization: 'Bearer '+token } })
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

      //console.log("data", data);

    return (
        <>
        <style scoped>{css}</style>
        <div className="bg-gray-100"
            style={{ marginTop: '-15%' }}>
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-10 sm:py-24 lg:max-w-none lg:py-32">

                    <h3 className="font-bold text-3xl text-[#4e0083] leading-tight ">
                        <span className="text-yellow-800">Shop By </span>Our Collections
                    </h3>

                    {/* 
                        <div className="flex flex-row">
                            {callouts.map((callout) => (
                                <div key={callout.name} className="basis-1/2">
                                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 mx-auto mt-24 hover:opacity-75"
                                        style={{ width: '45vw', height: '120vh', cursor:'pointer'}}>
                                        <img alt={callout.imageAlt}
                                            src={callout.imageSrc}
                                            className="absolute inset-0 h-full w-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                        <h3 className="z-10 mt-3 text-3xl font-bold text-white">{callout.name}</h3>
                                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{callout.description}</div>
                                    </article>

                                </div>
                            ))}

                            <div className="basis-1/2 mx-10">
                                {callouts1.map((callout) => (
                                    <div key={callout.name} className="flex flex-row">
                                        <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 mx-auto mt-24 hover:opacity-75"
                                            style={{ width: '42vw', height: '50vh' , cursor:'pointer'}}>
                                            <img alt={callout.imageAlt}
                                                src={callout.imageSrc}
                                                className="absolute inset-0 h-full w-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                            <h3 className="z-10 text-xl font-bold text-white"
                                            >{callout.name}</h3>
                                            <div className="z-10 overflow-hidden text-sm leading-6 text-gray-300"
                                                
                                            >{callout.description}</div>
                                        </article>

                                    </div>
                                ))}
                            </div>
                        </div> */}

                    <div className="mt-4 grid grid-cols-1 gap-x-6  sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8 ">
                            {data.map((category, index) => (
                                index === 0 ?
                                <div key={category.id} className="relative p-2">
                                    <article className="relative  divTop2 w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 mx-auto hover:opacity-75">
                                        <img
                                            src={category.imageUrl}
                                            alt=""
                                            className="absolute inset-0 h-full w-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                        <h3 className="z-10 text-xl font-bold text-white"
                                        >{category.categoryName}</h3>
                                        <h4 className="z-10 text-l text-white"
                                        >{category.description}</h4>
                                    </article>
                                </div>
                            :""))} 
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">

                            {data.map((category, index) => (
                                index >0 ?
                                    <div key={category.id} className="relative mt-6 p-2">
                                    <article className="relative  w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 mx-auto hover:opacity-75"
                                        style={{ height: '46vh', padding: '8%' }}>
                                        <img
                                            src={category.imageUrl}
                                            alt=""
                                            className="absolute inset-0 h-full w-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                        <h3 className="z-10 text-xl font-bold text-white"
                                        >{category.categoryName}</h3>
                                        <h4 className="z-10 text-l text-white"
                                        >{category.description}</h4>
                                    </article>
                                </div>
                            :""))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}