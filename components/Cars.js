'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Heading from './utilities/Heading';
import '@/styles/swiper.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Cars(props) {
  const carBrands = [
    '/images/cars/acura-logo-vector-01 1.png',
    '/images/cars/mercedes-benz-logo-vector-01 1.png',
    '/images/cars/bmw-logo-vector-01 1.png',
    '/images/cars/cadillac-logo 1.png',
    '/images/cars/chevrolet-logo 1.png',
    '/images/cars/aston-martin-logo-vector-01 1.png',
    '/images/cars/Dodge-logo-1990-2100x2100 1.png',
    '/images/cars/ford-logo 1.png',
    '/images/cars/honda-silver-logo-vector 1.png',
    '/images/cars/hyundai-motor-vector-logo 1.png',
    '/images/cars/Innoson_New_Logo_003_AutoReportNG 1.png',
    '/images/cars/jaguar-3d-vector 1.png',
    '/images/cars/toyota-logo-vector 1.png',
    '/images/cars/kia-vector-logo 1.png',
    '/images/cars/mitsubishi-logo-vector 1.png',
    '/images/cars/land-rover-logo 1.png',
    '/images/cars/lexus-logo-vector 1.png',
    '/images/cars/volkswagen-logo-vector 1.png',
    '/images/cars/mazda-logo-vector-download 1.png',
    '/images/cars/chrysler-logo-2010-show 1.png',
    '/images/cars/nissan-vector-logo 1.png',
    '/images/cars/peugeot-logo-vector 1.png',
    '/images/cars/volvo-logo-vector 1.png',
    '/images/cars/subaru-logo-2003 1.png',
    '/images/cars/jeep-auto-vector-logo 1.png',
    '/images/cars/rolls-royce-logo 1.png',
    '/images/cars/maserati-logo-2006-900x1200 1.png',
    '/images/cars/porsche-logo 1.png',
  ];
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: 'linear',
    rows: Math.ceil(carBrands.length / 6),
  };
  return (
    <>
      <Heading headTitle="Cars" sub="We fix nearly all makes and model of cars" />
      <div className="wrapper">
        <Slider {...settings}>
          {carBrands.map((brand, index) => (
            <div key={index} className="py-5 -px-50">
              <img src={brand} width={100} height={100} alt={`Car Brand ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Cars;
