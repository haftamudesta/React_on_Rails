import { useEffect,useState } from "react"
import { useLocation } from "react-router-dom"
import { useCookies } from "react-cookie";
import { getChallengeById } from "../apis/challenges";
import RitchTextViewer from "../element/RitchTextViewer";

const Challenge = () => {
  const location=useLocation();
  const [cookies, setCookie] = useCookies(['jwt']);
  const [challenge,setChallenge]=useState('')
  //console.log("location",location)
  useEffect(()=>{
    const segments=location.pathname.split('/')
    const challengeId=segments[segments.length-1]
    getActiveAndUpcomingChallengesApi(challengeId)
    
  },[])

  const getActiveAndUpcomingChallengesApi=async (id)=>{
    const [response,error] =await getChallengeById(cookies.jwt,id)
    handleResponse([response,error])
  }
  const handleResponse=async ([response,error])=>{
    if (error){
            //to dohandle error
    }else{
            console.log("response",response)
            const data=await response.json()
            console.log("data",data)
            setChallenge(data.data)
            console.log(challenge)
            

    }
}


  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  mt-12">
      <h1>Challenge Details</h1>
      {challenge && 
         <div>
          <h1 className="text-3xl text-black">{challenge.title}</h1>
          <RitchTextViewer content={challenge.description}/>
         </div>
      }
    </div>
  )
}

export default Challenge