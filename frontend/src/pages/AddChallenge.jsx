import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Button from "../element/Button"
import Datepicker from "react-tailwindcss-datepicker"; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addChallenge } from "../apis/challenges";

const initialErrorsState={
  title:'',
  description:'',
  date:''
}

const AddChallenge = () => {
  const [cookies, setCookie] = useCookies(['jwt']);
  const navigate=useNavigate()

  useEffect(()=>{
    if(!cookies.jwt){
      navigate('/')
    }
  },[])
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [errors,setErrors]=useState(initialErrorsState)
  const [value, setValue] = useState({ 
    startDate: null, 
    endDate: null 
    });
  const handleSubmit =(e)=>{
    e.preventDefault()
    let newErrors={}
    if(title.length===0){
      newErrors={
        ...newErrors,
        title:"Title should not be empty.Please enter Title"
     }
    }
    if(description.length===0){
      newErrors={
        ...newErrors,
        description:"Description should not be empty.Please enter Description"
      }                   
    }
    if(value.startDate===null || value.endDate===null){
      newErrors={
        ...newErrors,
        date:"Date should not be empty. Please enter staert Date and end Date"
      }                   
    }
    setErrors(newErrors)
    const hasErrors=Object.values(newErrors).some(error=>error!=='')
    if(hasErrors){
    return
    }
    // API CALL
    addChallengeApi()
  }

  const handleTitleChange=(e)=>{
    setTitle(e.target.value)
  }

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 

  const handleDescriptionChange=(e)=>{
    setTitle(e.target.value)
  }

  const addChallengeApi=async ()=>{
    const [response,error] =await addChallenge(cookies.jwt,{
      challenge: {
              title:title,
              description:description,
              start_date:value.startDate,
              end_date:value.endDate
      }
    })
    handleResponse([response,error])
  }
  const handleResponse=async ([response,error])=>{
    if (error){
            setErrors({
                    ...errors,
                    api:error
            })
    }else{
            console.log("response",response)
            navigate('/')
    }
}


  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  mt-12">
      <h1 className="text-4xl border-b-2 border-e-white">Add Challenge</h1>
      <form onSubmit={handleSubmit} className="mt-10 max-w-96 flex flex-col gap-4">
        <input 
        type="text" 
        value={title}
        placeholder="Enter Title"
        onChange={handleTitleChange}
        className="py-2 w-full border border-gray-600 mt-2 px-3"
        />
        {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
        <div>
          <ReactQuill theme="snow" value={description} onChange={setDescription} />
        </div>
        {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
         <Datepicker 
            value={value} 
            displayFormat="DD-MMMM"
            onChange={handleValueChange} 
            placeholder="start_date-end_date"
            showShortcuts={true} 
            />
            {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
      <div>
      <Button type="submit">
          Submit Challenge
      </Button>
      {errors.api && <p className="text-sm text-red-500">{errors.api}</p>}
      </div>

      </form>
   </div>
  )
}

export default AddChallenge