import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import InfoSection from '../components/InfoSection';

import Hotels from '../components/Hotels';
import PlacestoVisit from '../components/PlacestoVisit';
import Footer from '../components/Footer';

function ViewTrip() {

    
    const {tripId} = useParams();
    const[trip , setTrip] = useState([]);

    useEffect(() => {
        tripId&&getTripData();
    },[tripId])

    const getTripData = async () => {

        const docRef = doc(db,'AiTrip' , tripId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log('Document' , docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such data found");
            toast.error("No such trip found")
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
     {/* Information section */}

        <InfoSection trip={trip}/>
     {/* recommended hotels */}

        <Hotels trip={trip}/>
        

     {/* iternary/daily plan */}

        <PlacestoVisit trip={trip}/>

        <Footer/>

    </div>
  )
}

export default ViewTrip
