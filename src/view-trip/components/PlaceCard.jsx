import { Button } from '@/components/ui/button'
import React ,{useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { createClient } from 'pexels'

function PlaceCard({place , trip}) {

    const [imageUrl, setImageUrl] = useState('');
    const query = `${place?.place} , ${trip?.userSelection?.location}`;
    console.log(query)
    const api_key = '2-a92r9W1uE2UImgwNEXw2DZGWRsq4WjuKMdxR-0kXY';
  
    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${api_key}&per_page=1`);
          const data = await response.json();
          console.log(data);
          if (data.results && data.results.length > 0) {
            setImageUrl(data.results[0].urls.small); 
          } else {
            setImageUrl('/placeholder.jpg'); // Fallback image
          }
        } catch (error) {
          console.error('Error fetching image from Unsplash:', error);
          setImageUrl('/placeholder.jpg'); // Fallback image
        }
      };
  
      fetchImage();
    }, [query]);
    
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.place + trip?.userSelection?.location?.label } target='_blank'>
        <div className=' shadow-md rounded-xl border p-3 mt-3 flex gap-5 hover:scale-105 transition-all duration-150 hover:shadow-lg hover:border-red-500 hover:border-2 cursor-pointer '>
        
        <img src={imageUrl} className='rounded-xl w-[250px] h-[150px] object-cover'/>

        <div>
                <h2 className='font-bold text-lg'>{place.place}</h2>
                <p className='text-sm text-gray-500 font-semibold'>{place.details}</p>
                <h2 className='font-semibold text-sm text-gray-500 mt-2'>🕙 {place.time_travel}</h2>
                <h2 className='font-semibold text-sm text-gray-500'>🎟️ {place.ticket_pricing}</h2>

            
        </div>
        </div>
    </Link>
  )
}

export default PlaceCard
