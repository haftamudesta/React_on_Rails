import {DOMAIN} from "./config"
export const registerApi=async (objectBody)=>{
  const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectBody)
      };


        try {
                const response =await fetch(`${DOMAIN}/users`,requestOptions);
                if (response.ok) {
                        return [response,'']
                }
                if(response.status==422){
                  return ['','user already exist']
                }
                const erroeMessage=await response.text()
                return ['','server side error']
              } catch (error) {
                return ['',`server down:${erroeMessage}`]
              }
}


export const logInApi=async (objectBody)=>{
        const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(objectBody)
            };
      
      
              try {
                      const response =await fetch(`${DOMAIN}/users/sign_in`,requestOptions);
                      if (response.ok) {
                              return [response,'']
                      }

                      if(response.status==401){
                        return ['','Invalid email or password']
                      }
                      
                      return ['','server side error']
                    } catch (error) {
                      console.error('Error:', error);
                      return ['',`server down:${error}`]
                    }
      }


      export const logoutApi=async (jwtToken)=>{
        const requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': jwtToken
              }
            };
      
      
              try {
                      const response =await fetch(`${DOMAIN}/users/sign_out`,requestOptions);
                      if (response.ok) {
                              return [response,'']
                      }

                      if(response.status==401){
                        return ['','Invalid email or password']
                      }
                      
                      return ['','server side error']
                    } catch (error) {
                      console.error('Error:', error);
                      return ['',`server down:${error}`]
                    }
      }