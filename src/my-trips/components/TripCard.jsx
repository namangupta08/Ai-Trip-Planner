import Footer from '@/view-trip/components/Footer';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function TripCard({trip}) {
    const [imageUrl, setImageUrl] = useState('');
    const query = `${trip?.userSelection?.location}`;
    //console.log(query)
    const api_key = '2-a92r9W1uE2UImgwNEXw2DZGWRsq4WjuKMdxR-0kXY';
  
    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${api_key}&per_page=1`);
          const data = await response.json();
          console.log(data);
          if (data.results && data.results.length > 0) {
            setImageUrl(data.results[0].urls.regular); // Use the URL for a small-sized image
          } else {
            setImageUrl('https://via.placeholder.com/170x150'); // Fallback image
          }
        } catch (error) {
          console.error('Error fetching image from Unsplash:', error);
          setImageUrl('https://via.placeholder.com/170x150'); // Fallback image
        }
      };
  
      fetchImage();
    }, [query]);

    const location = trip?.userSelection?.location?.value || trip?.userSelection?.location || 'Unknown Location';
    console.log("lcoation" , location)
  return (
    <Link to={'/view-trip/'+trip?.id}>
        <div className=' shadow-md rounded-xl border p-3 mt-3  gap-5 hover:scale-105 transition-all duration-150 hover:shadow-lg hover:border-red-500 hover:border-2 cursor-pointer '>
            <img src={imageUrl} className='object-fit rounded-xl h-[200px] w-[300px]'/>
            <div>
                <h2 className='font-bold text-lg mt-3'>{trip?.userSelection?.location}</h2>
                <h2 className='text-sm text-gray-500 font-bold'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget </h2>
                <h2 className='text-xs text-gray-500 font-bold'><span className='text-lg'>👥</span> : {trip?.userSelection?.traveler}</h2>
            </div>
        </div>

        
    </Link>
  )
}

export default TripCard
