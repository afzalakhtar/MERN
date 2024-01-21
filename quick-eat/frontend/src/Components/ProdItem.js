import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FoodData } from './FoodData.js';
import axios from "axios"

export default function ProdItem({displayCount}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://quick-eat-backend.vercel.app//api/dishes");
                console.log(response.data)
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();

    }, []);
    

    const getCategoryValues = () => {
        const categoryValues = FoodData.map((cat) => cat.category);
        return [...new Set(categoryValues)];
    };

    const categoryValues = getCategoryValues();

    const handleFilter = (cat) => {

        if (cat) {

            if (cat === "all") {
                setData(FoodData);
            }
            else {
                const filterdata = FoodData.filter((item) => item.category === cat);

                setData(filterdata);
            }

        }

    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }else{
        
        const displayedProducts = data.slice(0, displayCount);
        
        return (
            <>
                <ul className="flex items-center justify-center gap-4 filter-wrap mt-4">
                    <li className="cursor-pointer btn" key='all' value='all' onClick={() => handleFilter("all")}>All Products</li>
                    {categoryValues.map((cat) => (
                        <li className="cursor-pointer btn" key={cat} value={cat} onClick={() => handleFilter(cat)}>{capitalizeFirstLetter(cat)}</li>
                    ))}
                </ul>
                <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 my-10">
                    
                    {displayedProducts.map(data => (
    
                        <div className="prod_item w-75 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={data.id} name={data.category}>
                            <Link to="#">
                                <img className="p-4 rounded-t-lg w-72 h-80" src={data.img} alt="product" />
                            </Link>
                            <div className="px-4 py-3 w-72">
                                <Link to="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                                </Link>
    
                                <div className="flex items-center">
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white price">&#8377;<span>{data.price}</span></span>
                                    </div>
                                    <div className="ml-auto">
                                        <Link to="#" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="m-3 text-sm font-medium">
                                <div className="text-blue-500 category">Category: <span><Link to="#" >{capitalizeFirstLetter(data.category)}</Link></span></div>
                            </div>
                        </div>
    
                    ))
                    }
                </div>
            </>
        )
    }

    
}
