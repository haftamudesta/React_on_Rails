import placeholderImag from "../assets/placeholder.svg"
import { formatDate } from "../utlities/date"
const ChallengeCard = ({challenge}) => {
        const startDate=new Date(challenge.start_date)
        const endDate=new Date(challenge.end_date)
        const currentDate=new Date()
        const dateText=()=>{
                
                if(startDate > currentDate){
                        return (<h1 className='font-medium text-green-600'>{`Start date: ${formatDate(startDate)}`}</h1>)
                }
                else if(startDate < currentDate && endDate > currentDate){
                        return (<h1 className='font-medium text-red-600'>{`End date: ${formatDate(endDate)}`}</h1>)
                }
                else{
                return (<h1 className='font-medium text-red-600'>{`Start date: ${formatDate(startDate)} / End date: ${formatDate(endDate)}`}</h1>)
                }
        }
  return (
    <div className="flex flex-col border border-black p-2">
        <img className="aspect-square" src={placeholderImag} alt="placeholder" />
        <div className="p-2">
                <h1 className="font-medium">{challenge.title}</h1>
                {dateText()}       
        </div>
    </div>
  )
}

export default ChallengeCard