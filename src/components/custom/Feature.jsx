import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedDestinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-16 bg-gradient-to-r from-red-100 to-orange-100  rounded-xl shadow-lg mt-12 px-4 md:px-10">
      <h2 className='text-5xl font-bold text-center mb-10'>
        <span className="bg-gradient-to-r from-red-600 to-sky-600 bg-clip-text text-transparent">
          Featured Destinations
        </span>
      </h2>
      <Slider {...settings}>
        {[
          {
            imgSrc: "/destination2.jpeg",
            title: "Paris, France",
            description: "Discover the romance of Paris, the city of lights , love ,fun and wramth.",
          },
          {
            imgSrc: "/destination3.jpeg",
            title: "Tokyo, Japan",
            description: "Dive into the unique blend of tradition and modernity in Tokyo.",
          },
          {
            imgSrc: "/destination4.jpeg",
            title: "New York, USA",
            description: "Explore the bustling streets and iconic landmarks of New York.",
          },
          {
            imgSrc: "/destination5.jpeg",
            title: "Kashmir, India",
            description: "Experience the breathtaking landscapes and rich culture of Kashmir.",
          },
          {
            imgSrc: "/destination6.jpeg",
            title: "Zurich, Switzerland",
            description: "Discover the charming blend of history and modernity in Zurich.",
          },
        ].map((destination, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 mx-4 my-10 gap-4"
            whileHover={{ scale: 1.05 }}
            style={{ width: '300px', height: '400px' }} // Set a fixed width and height
          >
            <img
              src={destination.imgSrc}
              className="rounded-t-lg h-60 w-full object-cover"
              alt={destination.title}
              style={{ height: '200px' }} // Set a fixed height for images
            />
            <div className="p-4 h-40"> {/* Fixed height for the description section */}
              <h3 className="text-2xl font-semibold mb-2">{destination.title}</h3>
              <p className="text-gray-600">{destination.description}</p>
              <Link to={"/create-trip"}>
                <Button className="mt-4 w-[250px] rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white">
                  Explore More
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </Slider>
      
      {/* Custom Arrow Buttons */}
      <style jsx>{`
        .slick-slide {
          padding: 0 20px; /* Adjust the value as needed */
        }
        .slick-prev,
        .slick-next {
          color: black;
          height: 50px;
          width: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 24px;
          color: black;
        }
        .slick-prev:hover,
        .slick-next:hover {
          color: gray;
        }
      `}</style>
    </div>
  );
};

export default FeaturedDestinations;
