
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FoodData } from './FoodData.js';
// import { useLocation } from "react-router-dom";

export default function ProdItem() {

    // const location = useLocation();
    // const isHomepage = location.pathname === '/';

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // let getData = [];
    

    // const handleData = () => {
    // if(isHomepage){
    //     getData = FoodData.slice(0, 3);
    // }else{
    //     getData = FoodData.slice(0)
    // }

    // }

    useEffect(() => {
        function fetchData() {
            try {
                
                setData(FoodData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 my-10">
           
            {data.map(data => (

                <div className="w-75 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={data.id}>
                    <Link to="#">
                        <img className="p-4 rounded-t-lg w-72 h-80" src={data.img} alt="product"  />
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
                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="m-3 text-sm font-medium">
                        <div className="text-blue-500 category">category: <span><Link to="#" >{data.category}</Link></span></div>
                    </div>
                </div>

            ))
            }
        </div>
    )
}
