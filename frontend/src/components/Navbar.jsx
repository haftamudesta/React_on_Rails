import { useCookies } from 'react-cookie';
import {useNavigate} from "react-router-dom";
import { logoutApi } from '../apis/authontication';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddChallenge from '../pages/AddChallenge';

const Navbar = () => {
        const [cookies, setCookie,removeCookies] = useCookies([]);
        const [jwt,setJwt]=useState(cookies.jwt)
        const navigate=useNavigate();
        const handleLogout =async (jwt)=>{
                const [response,error] =await logoutApi(cookies.jwt)
                handleResponse([response,error])
        }

        const handleLogin = (e)=>{
                navigate('/login')
        }
        const handleResponse=async ([response,error])=>{
                if (error){
                        removeCookies(jwt)
                }else{
                        removeCookies(null)
                        navigate('/login')
                }
                setJwt()
        }
  return (
    <div className="bg-white shadow h-16">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                        <p className="font-bold text-2xl mt-4">
                                Rails For Coders
                        </p>
                
                         <div className="">
                        {jwt?(
                                <div className='flex justify-around gap-6'>
                                <Link to={'/register'} className="bg-indigo-500 rounded px-3 py-1.5 mt-4">Sign UP</Link>
                                <button onClick={handleLogout} className="bg-indigo-500 rounded px-3 py-1.5 mt-4">Log Out</button>
                                </div>
                        ):(
                                <button onClick={handleLogin} className="bg-indigo-500 rounded px-3 py-1.5 mt-4">Log In</button>
                        )}
                        </div>
                </div>
        </div>

    </div>
  )
}

export default Navbar