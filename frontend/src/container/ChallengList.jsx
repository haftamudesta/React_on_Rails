
import { useCookies } from 'react-cookie';
import { getActiveAndUpcomingChallenges } from '../apis/challenges';
import { addChallenge } from "../apis/challenges";
import { useEffect, useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';



const ChallengeList = () => {
  const [cookies, setCookie] = useCookies(['jwt']);
  const [activeChallenges,setActiveChallenges]=useState([])
  const [upcomingChallenges,setUpcomingChallenges]=useState([])
  useEffect(()=>{
        getActiveAndUpcomingChallengesApi(cookies.jwt)
  },[])
  

  const getActiveAndUpcomingChallengesApi=async ()=>{
    const [response,error] =await getActiveAndUpcomingChallenges(cookies.jwt)
    handleResponse([response,error])
  }
  const handleResponse=async ([response,error])=>{
    if (error){
            //to dohandle error
    }else{
            console.log("response",response)
            const data=await response.json()
            console.log("data",data)
            setActiveChallenges(data.active)
            setUpcomingChallenges(data.upcoming)

    }
}


  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  mt-12">
        {activeChallenges && activeChallenges.length>0 &&
        <>
             <h3 className="text-xl font-bold ">Active Challenges</h3>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-8'>
             {activeChallenges.map((challenge)=>{
               return <ChallengeCard key={challenge.id} challenge={challenge}/>
             })}
             </div>
        </>
        }

        {upcomingChallenges && upcomingChallenges.length>0 &&
        <>
             <h3 className="text-xl font-bold ">Upcoming challenges</h3>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-8'>
             {upcomingChallenges.map((challenge)=>{
                return <ChallengeCard key={challenge.id} challenge={challenge}/>
             })}
             </div>
             
        </>
        }  
   </div>
  )
}

export default ChallengeList