import React from 'react'

const features=[
        {
                title:"Monthly codingchallenge",
                description:"this is monthly coding challenge. a winner will get ...",
                image:"image"
        },
        {
                title:"Monthly codingchallenge",
                description:"this is monthly coding challenge. a winner will get ...",
                image:"image"
        },
        {
                title:"Monthly codingchallenge",
                description:"this is monthly coding challenge. a winner will get ...",
                image:"image"
        },
        {
                title:"Monthly codingchallenge",
                description:"this is monthly coding challenge. a winner will get ...",
                image:"image"
        },
        {
                title:"Monthly codingchallenge",
                description:"this is monthly coding challenge. a winner will get ...",
                image:"image"
        },
        {
                title:"Monthly codingchallenge",
                description:"this is monthly coding challenge. a winner will get ...",
                image:"image"
        }
]
const Feature = () => {
  return (
        <div className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
                        <h3 className="text-xl font-bold ">Insentives</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                        {
                                features.map((feature,index)=>{
                                        return (
                                                <div key={index} className="py-4">
                                                {feature.image}
                                                <p className="mt-4 font-medium text-lg">{feature.title}</p>
                                                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                                                </div>
                                        )
                                })
                        }
                        </div>
                </div>

        </div>
  )
}

export default Feature