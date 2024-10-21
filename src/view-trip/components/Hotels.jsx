import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

function Hotels({trip}) {

    const [imageUrl, setImageUrl] = useState('');
    const query = 'luxury hotel';
    //console.log(query)
    const api_key = '2-a92r9W1uE2UImgwNEXw2DZGWRsq4WjuKMdxR-0kXY';
  
    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${api_key}&per_page=1`);
          const data = await response.json();
          console.log(data);
          if (data.results && data.results.length > 0) {
            setImageUrl(data.results[0].urls.thumb); // Use the URL for a small-sized image
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
    

  return (
    <div>
        <h2 className='text-2xl font-bold mt-5'>Hotel Recommendation</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-4'>
            {trip?.tripData?.hotel_options?.map((hotel , index) => (
                
                <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotel_name + "," + hotel?.hotel_address} target='_blank'>
                    <div className='hover:scale-110 transition-all duration-150 cursor-pointer'>
                        {/* <img src='/placeholder.jpg' className='rounded-xl'/> */}
                        <img src={imageUrl} className='rounded-xl w-[250px] h-[150px] object-cover' />
                        <div className='my-2 flex flex-col mb-2 '>
                            <h2 className='text-md font-bold mb-2'>{hotel?.hotel_name}</h2>
                            <h2 className='text-xs font-semibold text-gray-500 mb-1'>📍 {hotel?.hotel_address}</h2>
                            <h2 className='text-xs font-semibold text-gray-500 mb-1'> 💰 {hotel?.price}</h2>
                            <h2 className='text-xs font-semibold text-gray-500 mb-1'> ⭐ {hotel?.rating}</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Hotels
