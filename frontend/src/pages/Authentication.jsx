import propTypes from "prop-types";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {validateEmail,validatePassword} from "../utlities/validations"
import {registerApi,logInApi} from "../apis/authontication"
import { useCookies } from 'react-cookie';
import Button from "../element/Button";

const initialErrorsState={
        email:'',
        password:'',
        api:''
}

const Authentication = (pageType) => {
        const [cookies, setCookie] = useCookies(['jwt']);
        const navigate=useNavigate();
        // useEffect(()=>{
        //         if(cookies){
        //                 navigate('/')
        //         }
        // })
        const [email,setEmail]=useState('')
        const [password,setPassword]=useState('')
        const [errors,setErrors]=useState(initialErrorsState)
        const handleEmailChange=(e)=>{
                setEmail(e.target.value)
        }
        const handlePasswordChange =(e)=>{
                setPassword(e.target.value)
        }
        const handleSubmit=async (e)=>{
                e.preventDefault()
                let newErrors={}
                if(!validateEmail(email)){
                        newErrors={
                                ...newErrors,
                                email:"Invalid Email"
                        }
                }
                if(!validatePassword(password)){
                        newErrors={
                                ...newErrors,
                                password:"Invalid password.Password length should be at least 8 characters"
                        }
                        
                }
                setErrors(newErrors)
                const hasErrors=Object.values(newErrors).some(error=>error!=='')
                if(hasErrors){
                        return
                }
                //call api
                if(pageType===pageType.REGISTER){
                        const [response,error] =await registerApi ({
                                user: {
                                        email:email,
                                        password:password
                                }
                        })
                        handleResponse(response,error)

                }else{
                       const [response,error] =await logInApi({
                                user: {
                                        email:email,
                                        password:password
                                }
                        })
                        handleResponse([response,error])    
                }
        }
        const handleResponse=async ([response,error])=>{
                if (error){
                        setErrors({
                                ...errors,
                                api:error
                        })
                }else{
                        const jwt=response.headers.get('Authorization')
                        const result = await response.json();
                        const message=result.message
                        const user=result.data
                        setCookie('jwt', jwt)
                        console.log("jwt",cookies.jwt)
                        navigate('/')
                }
        }

  return (
        <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className=" ">
                        <h3 className="font-bold text-2xl">
                             {(pageType===pageType.REGISTER)?'Register ': 'Log In'}
                        </h3>
                        <form onSubmit={handleSubmit} className="mt-10 max-w-96 flex flex-col gap-4">
                                <div>
                                <input 
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="py-2 w-full border border-gray-600 mt-2 px-3"
                                value={email}
                                onChange={handleEmailChange}
                                 />
                                 {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                </div>
                                <div>
                                <input 
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="py-2 w-full border border-gray-600 mt-2 px-3"
                                value={password}
                                onChange={handlePasswordChange}
                                 />
                                 {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                                </div>
                                <Button
                                parentClassName='bg-red-300'
                                onClick={handleSubmit}
                                >
                                {(pageType===pageType.REGISTER)?'Register ' : 'Log In'}
                                </Button>
                                
                                <div className=" bg-indigo-300 rounded hover:-translate-x-0.5 hover:-translate-y-0.5">
                                     <button 
                                      className="w-full bg-indigo-300 text-black hover:bg-indigo-600 hover:-text-white px-2 py-2 hover:-translate-x-1.5 hover:-translate-y-1.5"
                                       type="submit">
                                        {(pageType===pageType.REGISTER)?'Register' : 'Log In'}
                                       </button>
                                </div>

                                 {/* <button 
                                 className="bg-indigo-500 hover:bg-indigo-700 px-2 py-2"
                                 type="submit">
                                 {(pageType===pageType.LOGIN)?'Log In' : 'Register'}
                                 </button>

                                 {errors.api && <p className="text-sm text-red-500">{errors.api}</p>} */}
                        </form>
    </div>
    </div>
    </div>
  )
}
export const pageType=Object.freeze({
        LOGIN  : 0,
        REGISTER : 1
})

Authentication.propTypes={
        pageType:propTypes.number.isRequired
}


export default Authentication