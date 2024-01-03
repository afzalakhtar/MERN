import { Link } from "react-router-dom"

import { useState, useEffect } from 'react';

export default function Footer() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(false);
    }, [])
    return (

        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="163" height="38" viewBox="0 0 163 38"><g id="Logo" transform="translate(-260 -51)"><g id="Logo-2" data-name="Logo" transform="translate(260 51)"><g id="Elements"><path id="Path_1429" data-name="Path 1429" d="M315.086,140.507H275.222v-.894c0-11.325,8.941-20.538,19.933-20.538s19.931,9.213,19.931,20.538Z" transform="translate(-270.155 -115.396)" fill="#f29f05"></path><path id="Path_1430" data-name="Path 1430" d="M301.13,133.517a1.488,1.488,0,0,1-1.394-.994,11.361,11.361,0,0,0-10.583-7.54,1.528,1.528,0,0,1,0-3.055,14.353,14.353,0,0,1,13.37,9.527,1.541,1.541,0,0,1-.875,1.966A1.444,1.444,0,0,1,301.13,133.517Z" transform="translate(-264.176 -113.935)" fill="#fff"></path><path id="Path_1431" data-name="Path 1431" d="M297.343,146.544a14.043,14.043,0,0,1-13.837-14.211h2.975a10.865,10.865,0,1,0,21.723,0h2.975A14.043,14.043,0,0,1,297.343,146.544Z" transform="translate(-266.247 -108.544)" fill="#363636"></path><path id="Path_1432" data-name="Path 1432" d="M302.183,132.519a7.064,7.064,0,1,1-14.122,0Z" transform="translate(-264.027 -108.446)" fill="#363636"></path><path id="Path_1433" data-name="Path 1433" d="M320.332,134.575H273.3a1.528,1.528,0,0,1,0-3.055h47.033a1.528,1.528,0,0,1,0,3.055Z" transform="translate(-271.815 -108.923)" fill="#f29f05"></path><path id="Path_1434" data-name="Path 1434" d="M289.154,123.4a1.507,1.507,0,0,1-1.487-1.528v-3.678a1.488,1.488,0,1,1,2.975,0v3.678A1.508,1.508,0,0,1,289.154,123.4Z" transform="translate(-264.154 -116.667)" fill="#f29f05"></path><path id="Path_1435" data-name="Path 1435" d="M284.777,138.133H275.3a1.528,1.528,0,0,1,0-3.055h9.474a1.528,1.528,0,0,1,0,3.055Z" transform="translate(-270.84 -107.068)" fill="#363636"></path><path id="Path_1436" data-name="Path 1436" d="M284.8,141.691h-6.5a1.528,1.528,0,0,1,0-3.055h6.5a1.528,1.528,0,0,1,0,3.055Z" transform="translate(-269.379 -105.218)" fill="#363636"></path></g></g><text id="Quickeat" transform="translate(320 77)" fill="#363636" fontSize="20" fontFamily="Poppins" fontWeight="700" className="font-mono"><tspan x="0" y="0">QUICK</tspan><tspan y="0" fill="#f29f05">EAT</tspan></text></g></svg>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className="mx-3 hover:text-amber-600"><Link to={'/'}>Home</Link></li>
                        <li className="mx-3 hover:text-amber-600"><Link to={'/About'}>About</Link></li>
                        <li className="mx-3 hover:text-amber-600"><Link to={'/Products'}>Products</Link></li>
                        
                        {isLoggedIn === false ? <li className="mx-3 hover:text-amber-600"><Link to={'/Login'}>Login</Link></li> : <li className="mx-3 hover:text-amber-600"><Link to={'/Cart'}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg></Link></li>}
                        
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Quickeat</Link>. All Rights Reserved.</span>
            </div>
        </footer>

    )
}
