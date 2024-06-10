import { BASE_API } from "./config";

export const addChallenge=async (jwtToken,objectBody)=>{
        const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': jwtToken
              },
              body: JSON.stringify(objectBody)
            };
      
      
              try {
                      const response =await fetch(`${BASE_API}/challenges`,requestOptions);
                      if (response.ok) {
                              return [response,'']
                      }
                      if(response.status==422){
                        return ['','Unauthorized user. can not add challenge']
                      }
                      const erroeMessage=await response.text()
                      return ['',`server side error ${erroeMessage}`]
                    } catch (error) {
                      return ['',`server down:${error}`]
                    }
      }


      export const getActiveAndUpcomingChallenges=async (jwtToken,objectBody)=>{
        const requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': jwtToken
              },
            };
      
      
              try {
                      const response =await fetch(`${BASE_API}/challenges/active_and_upcoming`,requestOptions);
                      if (response.ok) {
                              return [response,'']
                      }
                      if(response.status==422){
                        return ['','Unauthorized user. can not add challenge']
                      }
                      const erroeMessage=await response.text()
                      return ['',`server side error ${erroeMessage}`]
                    } catch (error) {
                      return ['',`server down:${error}`]
                    }
      }
      
      



      export const getChallengeById=async (jwtToken,id)=>{
        const requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': jwtToken
              },
            };
      
      
              try {
                      const response =await fetch(`${BASE_API}/challenges/${id}`,requestOptions);
                      if (response.ok) {
                              return [response,'']
                      }
                      if(response.status==422){
                        return ['','Unauthorized user. can not add challenge']
                      }
                      const erroeMessage=await response.text()
                      return ['',`server side error ${erroeMessage}`]
                    } catch (error) {
                      return ['',`server down:${error}`]
                    }
      }
      
      