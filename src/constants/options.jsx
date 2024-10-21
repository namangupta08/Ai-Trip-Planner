export const SelectTravelesList = [
    {
        id:1,
        title:"Just Me",
        desc:"A sole traveles in exploration",
        icons:"✈️",
        people:'1'
    },
    {
        id:2,
        title:"A Couple",
        desc:"Two traveles in tandem",
        icons:"🥂",
        people:'2'
    },
    {
        id:2,
        title:"Family",
        desc:"A group of fun loving adv",
        icons:"🏡",
        people:'3 to 5 people'
    },
    {
        id:4,
        title:"Friends",
        desc:"A bunch of thrill-seekers",
        icons:"⛵",
        people:'5 to 10 people'
    },

]

export const SelectBudgetOptions = [
    {
        id:1,
        title:"Cheap",
        desc:"Stay conscious of costs",
        icons:"💵"
    },
    {
        id:2,
        title:"Moderate",
        desc:"Keep cost on the average side",
        icons:"💰"
    },
    {
        id:3,
        title:"Luxury",
        desc:"Dont worry about cost",
        icons:"💸"
    },
]

export const AI_PROMPT = `Generate travel plan for location : {location} , for {totalDays} Days for {traveler} people with a {budget} budget , Give me 4 Hotels options list with HotelName, Hotel address, Price (in the currency of the place), hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placename, Place Details, Place Address in words , Place Image Url from google, Geo Coordinates, ticket Pricing, rating, Time to travel each of the location for {totalDays} days with each day plan with best time range to visit in JSON format.`