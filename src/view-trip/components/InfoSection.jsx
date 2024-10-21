import { Button } from '@/components/ui/button'
import React , {useState , useEffect} from 'react'

import { IoIosSend } from "react-icons/io";

function InfoSection({trip}) {
    const [imageUrl, setImageUrl] = useState('');
    const query = `${trip?.userSelection?.location}`;
   console.log("1233" , query)
    const api_key = '2-a92r9W1uE2UImgwNEXw2DZGWRsq4WjuKMdxR-0kXY';
  
    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${api_key}&per_page=1`);
          const data = await response.json();
          console.log(data);
          if (data.results && data.results.length > 0) {
            setImageUrl(data.results[0].urls.regular); 
          } else {
            setImageUrl('/placeholder.jpg'); 
          }
        } catch (error) {
          console.error('Error fetching image from Unsplash:', error);
          setImageUrl('/placeholder.jpg'); 
        }
      };
  
      fetchImage();
    }, [query]);

  return (
    <div>
        <img src={imageUrl} className='h-[400px] w-full object-fill rounded-xl'/>

        <div className='flex justify-between items-center'>
            <div className='my-5 gap-2 flex flex-col'>
            <h2 className='font-bold text-3xl'>{trip?.userSelection?.location}</h2>
                <div className='flex gap-5 mt-2'>
                    <h2 className='px-3 p-1 bg-gray-200 rounded-full text-gray-500'> 📅 {trip?.userSelection?.noOfDays} Days</h2>

                    <h2 className='px-3 p-1 bg-gray-200 rounded-full text-gray-500'>
                    💰 {trip?.userSelection?.budget} Budget
                    </h2>

                    <h2 className='px-3 p-1 bg-gray-200 rounded-full text-gray-500'> 🥂 No. of Travellers: {trip?.userSelection?.traveler} 
                
                    </h2>
                </div>
            </div>

            <Button><IoIosSend/></Button>
        </div>
    </div>
  )
}

export default InfoSection
