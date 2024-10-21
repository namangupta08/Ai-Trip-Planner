// import React from "react";
// import { Button } from "../ui/button";
// import Banner from "../../assets/banner.mp4";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <div className="flex flex-col items-center mx-auto gap-9">
//       <h1 className="font-extrabold text-[50px] text-center mt-16 break-words">
//         <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
//           Discover Your Next Adventure with AI:
//         </span>
//         <br />
//         Personalized Itineraries at Your Fingertips
//       </h1>

//       <p className="text-xl text-gray-500 text-center">
//         Build, personalize, and optimize your itineraries with our free AI trip
//         planner.
//         <br /> Designed for vacations, workations, and everyday adventures.
//       </p>

//       <Link to={"/create-trip"}>
//         <Button className="h-16 w-[220px] rounded-full hover:scale-110 transition-all duration-150 text-black bg-gradient-to-r from-red-600 to-orange-500 text-md font-bold">
//           Get Started, Its free
//         </Button>
//       </Link>

//       {/* <div className="mx-3 my-10 shadow-[-15px_-15px_20px_5px] shadow-red-300">
//                 <video
//                 className="shadow-[10px_20px_rgba(255,255,255,0.3)]"
//                 muted
//                 loop
//                 autoPlay
//                 style={{ width: '1500px', height: '840px' }}
//                 >
//                     <source src={Banner} type="video/mp4" />
//                 </video>
//         </div> */}

//       <div className="w-9/12">
//         <img src="/hero.png" />
//       </div>

//       {/* Feuture Section */}

//       <div className="w-full py-16 bg-gray-100 rounded-xl shadow-lg mt-12">
//         <h2 className="text-5xl font-bold text-center mb-10 ">
//           <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
//             Why Choose Us?
//           </span>
//           <br />
//         </h2>
//         <div className="flex flex-wrap justify-center gap-12 px-10">
//           <div className="text-center p-6 bg-white rounded-lg shadow-md w-[300px] hover:shadow-xl hover:bg-gray-50 transition-all duration-300">
//             <img
//               src="/feature1.jpeg"
//               className="w-24 mx-auto mb-5 h-[90px]"
//               alt="AI-Powered"
//             />
//             <h3 className="text-3xl font-semibold">
//               <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
//                 AI Powered
//               </span>
//             </h3>
//             <p className="text-lg text-gray-500 mt-2">
//               Get tailored itineraries curated by advanced AI technology.
//             </p>
//           </div>
//           <div className="text-center p-6 bg-white rounded-lg shadow-md w-[300px] hover:shadow-xl hover:bg-gray-50 transition-all duration-300">
//             <img
//               src="/feature2.jpeg"
//               className="w-24 mx-auto mb-5 h-[90px]"
//               alt="Fast and Free"
//             />
//             <h3 className="text-3xl font-semibold">
//               <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
//                 Fast & Free
//               </span>
//             </h3>
//             <p className="text-lg text-gray-500 mt-2">
//               Quick results at no cost. Start planning without limits.
//             </p>
//           </div>
//           <div className="text-center p-6 bg-white rounded-lg shadow-md w-[300px] hover:shadow-xl hover:bg-gray-50 transition-all duration-300">
//             <img
//               src="/feature3.png"
//               className="w-32 mx-auto mb-5 h-[90px] "
//               alt="Social Integration"
//             />
//             <h3 className="text-3xl font-semibold">
//               <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
//                 Social Integration
//               </span>
//             </h3>
//             <p className="text-lg text-gray-500 mt-2">
//               Share your adventures seamlessly on Instagram.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Vedio Banner */}

//       <div className="mx-3 my-10 shadow-[-15px_-15px_20px_5px] shadow-red-300">
//         <video
//           className="shadow-[10px_20px_rgba(255,255,255,0.3)]"
//           muted
//           loop
//           autoPlay
//           style={{ width: "1500px", height: "840px" }}
//         >
//           <source src={Banner} type="video/mp4" />
//         </video>
//       </div>

//        {/* Testimonials Section */}
//        <div className='w-full py-16'>
//         <h2 className='text-5xl font-bold text-center mb-10'>

//         <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
//         Loved by Gen Z Travelers
//           </span>
//         </h2>
//         <div className='flex flex-col md:flex-row gap-6 justify-center px-10 mt-4'>
//           <div className='p-8 bg-white shadow-lg rounded-lg text-center w-[300px]'>
//             <img src='/user.png' alt="User 1" className='w-20 h-20 rounded-full mx-auto mb-6' />
//             <p className='text-lg text-gray-600'>"This app helped me plan the perfect vacation. It’s super easy to use and fun!"</p>
//             <p className='text-lg text-gray-500 mt-4'>- Naman, 22</p>
//           </div>
//           <div className='p-8 bg-white shadow-lg rounded-lg text-center w-[300px]'>
//             <img src='/user.png' alt="User 2" className='w-20 h-20 rounded-full mx-auto mb-6' />
//             <p className='text-lg text-gray-600'>"I love how fast and accurate the itineraries are. It saved me so much time."</p>
//             <p className='text-lg text-gray-500 mt-4'>- Shubham, 20</p>
//           </div>
//           <div className='p-8 bg-white shadow-lg rounded-lg text-center w-[300px]'>
//             <img src='/user.png' alt="User 2" className='w-20 h-20 rounded-full mx-auto mb-6' />
//             <p className='text-lg text-gray-600'>"I love how fast and accurate the itineraries are. It saved me so much time."</p>
//             <p className='text-lg text-gray-500 mt-4'>- Sneha, 20</p>
//           </div>
//         </div>
//       </div>

//          {/*  How It Works */}
//       <div className='w-full py-16 bg-gray-50 rounded-xl shadow-lg mt-12'>
//         <h2 className='text-5xl font-bold text-center mb-10'>How It Works</h2>
//         <div className='flex flex-col md:flex-row gap-10 justify-center px-12'>
//           <div className='text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 w-[300px]'>
//             <h3 className='text-3xl font-semibold mb-4'>Step 1</h3>
//             <p className='text-lg text-gray-500'>Input your destination and preferences, and let our AI take over.</p>
//           </div>
//           <div className='text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 w-[300px]'>
//             <h3 className='text-3xl font-semibold mb-4'>Step 2</h3>
//             <p className='text-lg text-gray-500'>Review and tweak the suggested itinerary to match your style.</p>
//           </div>
//           <div className='text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 w-[300px]'>
//             <h3 className='text-3xl font-semibold mb-4'>Step 3</h3>
//             <p className='text-lg text-gray-500'>Share your adventure or export your itinerary for your trip!</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//  export default Hero;

import React from "react";
import { Button } from "../ui/button";
import Banner from "../../assets/banner.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeaturedDestinations from "./Feature";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-auto gap-9 px-4">
      {/* Hero Section */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-extrabold text-[50px] break-words">
          <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
            Discover Your Next Adventure with AI:
          </span>
          <br />
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-xl text-gray-500 mt-4">
          Build, personalize, and optimize your itineraries with our free AI
          trip planner.
          <br /> Designed for vacations, workations, and everyday adventures.
        </p>
        <Link to={"/create-trip"}>
          <Button className="h-16 w-[220px] rounded-full hover:scale-110 transition-all duration-150 text-black bg-gradient-to-r from-red-600 to-orange-500 text-md font-bold mt-4">
            Get Started, It's Free
          </Button>
        </Link>
      </motion.div>

      {/* Image Section */}
      <div className="w-9/12">
        <img src="/hero.png" />
      </div>

      {/* New Section: Featured Destinations
       <div className="w-full py-16 bg-white rounded-xl shadow-lg mt-12">
        <h2 className='text-5xl font-bold text-center mb-10'>
          <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
            Featured Destinations
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10 px-10">
          {[
            {
              imgSrc: "/destination1.jpg",
              title: "Bali, Indonesia",
              description: "Experience the breathtaking beaches and vibrant culture of Bali.",
            },
            {
              imgSrc: "/destination2.jpg",
              title: "Paris, France",
              description: "Discover the romance of Paris, the city of lights and love.",
            },
            {
              imgSrc: "/destination3.jpg",
              title: "Tokyo, Japan",
              description: "Dive into the unique blend of tradition and modernity in Tokyo.",
            },
          ].map((destination, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-[300px]"
              whileHover={{ scale: 1.05 }}
            >
              <img src={destination.imgSrc} className="rounded-t-lg h-48 w-full object-cover" alt={destination.title} />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{destination.title}</h3>
                <p className="text-gray-600">{destination.description}</p>
                <Link to={`/destinations/${destination.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  <Button className="mt-4 w-full rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white">
                    Explore More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
      <FeaturedDestinations />

      {/* Features Section */}
      <div className="w-full py-16 bg-white rounded-xl shadow-lg mt-12">
        <h2 className="text-5xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
            Why Choose Us?
          </span>
          <br />
        </h2>
        <div className="flex flex-wrap justify-center gap-12 px-10">
          {[
            {
              imgSrc: "/feature1.jpeg",
              title: "AI Powered",
              description:
                "Get tailored itineraries curated by advanced AI technology.",
            },
            {
              imgSrc: "/feature2.jpeg",
              title: "Fast & Free",
              description:
                "Quick results at no cost. Start planning without limits.",
            },
            {
              imgSrc: "/feature3.png",
              title: "Social Integration",
              description: "Share your adventures seamlessly on Instagram.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md w-[300px] hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={feature.imgSrc}
                className="w-24 mx-auto mb-5 h-[90px]"
                alt={feature.title}
              />
              <h3 className="text-3xl font-semibold">
                <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
                  {feature.title}
                </span>
              </h3>
              <p className="text-lg text-gray-500 mt-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Banner */}
      <div className="flex flex-col md:flex-row mx-3 my-10">
        <div className="flex items-center justify-center w-full md:w-1/2 p-8">
          <div className="text-center">
            <h2 className="text-7xl font-extrabold  leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
                Experience Your Dream Trip With Us
              </span>😄
            </h2>
            <p className="text-lg text-black mt-4 mb-6 font-bold">
              Our AI-driven trip planner helps you create personalized
              itineraries, ensuring you have an unforgettable adventure. Start
              planning today and explore the world your way!
            </p>
            <p className="text-lg text-black font-bold">
              Whether you're dreaming of relaxing on the beaches of Bali or
              exploring the historical sites of Paris, our platform tailors your
              journey to fit your preferences. Join countless travelers who have
              transformed their adventures into remarkable memories!
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <div className="shadow-[-15px_-15px_20px_5px] shadow-red-300">
            <video
              className="shadow-[10px_20px_rgba(255,255,255,0.3)] w-full h-auto"
              muted
              loop
              autoPlay
            >
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full py-16">
        <h2 className="text-5xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
            Loved by Gen Z Travelers
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center px-10 mt-4">
          {[
            {
              name: "Naman",
              age: 22,
              quote:
                "This app helped me plan the perfect vacation. It’s super easy to use and fun!",
            },
            {
              name: "Shubham",
              age: 20,
              quote:
                "I love how fast and accurate the itineraries are. It saved me so much time.",
            },
            {
              name: "Sneha",
              age: 20,
              quote: "This is the best trip planner I’ve ever used!",
            },
          ].map((user, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white shadow-lg rounded-lg text-center w-[300px]"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/user.png"
                alt={`User ${index + 1}`}
                className="w-20 h-20 rounded-full mx-auto mb-6"
              />
              <p className="text-lg text-gray-600">"{user.quote}"</p>
              <p className="text-lg text-gray-500 mt-4">
                - {user.name}, {user.age}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full py-16 bg-gray-50 rounded-xl shadow-lg mt-12">
        <h2 className="text-5xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
        How It Works
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center px-12">
          {[
            {
              step: "Step 1",
              description:
                "Log in with your google account.",
            },
            {
              step: "Step 2",
              description:
                "Enter the destination, number of days, budget of your trip.",
            },
            {
              step: "Step 3",
              description:
                "Share your adventure or export your itinerary for your trip!",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 w-[300px]"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-semibold mb-4">{item.step}</h3>
              <p className="text-lg text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* New Section: FAQs */}
      <div className="w-full py-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl shadow-lg mt-12">
        <h2 className="text-5xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="flex flex-col gap-6 px-10">
          {[
            {
              question: "How does the AI trip planner work?",
              answer:
                "Our AI analyzes your preferences and creates a personalized itinerary.",
            },
            {
              question: "Is the service really free?",
              answer:
                "Yes! Our trip planning service is completely free to use.",
            },
            {
              question: "Can I share my itinerary with friends?",
              answer:
                "Absolutely! You can easily share your plans on social media.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold">{faq.question}</h4>
              <p className="text-gray-500">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
