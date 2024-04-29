import React from 'react'
import './topBrands.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandList = [
    {
        id: 1,
        time: "31 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png",
    },
    {
      id: 2,
      time: "21 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png",
    },
    {
      id: 3,
      time: "35 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
    },
    {
      id: 4,
      time: "25 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png",
    },
    {
      id: 5,
      time: "41 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png",
    },
    {
      id: 6,
      time: "11 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png",
    },
    {
      id: 7,
      time: "31 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png",
    },
    {
      id: 8,
      time: "35 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/429a526eafb152d9bd9e4ff6201706d1_1601613943.png",
    },
    {
      id: 9,
      time: "41 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png",
    },
    {
      id: 10,
      time: "35 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210780.png",
    },
    {
      id: 11,
      time: "31 min",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2e75010c75028f6302cbe5c1cf10fb43_1601613991.png",
    },


];
const settings = {
  
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
  <div className='top-brands max-width'>
    <div className='collection-title' >Top brands for you</div>
    <Slider {...settings}>
      {topBrandList.map((brand) => {
        return (
          <div>
            <div className='top-brands-cover'>
              <img 
                src={brand.cover}
                className='top-brands-image'
                alt={brand.time}
              />
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
  );
};

export default TopBrands;