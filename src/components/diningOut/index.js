import React from 'react'
import "./diningOut.css";
import Collection from '../common/collection';
import { diningOut } from '../../data/diningOut';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';



const collectionList=[
  {
    id: 1,
    title: "Christmas Special Restaurants",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 2,
    title: "Newly Opened Restaurants",
    cover:
    "https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923143.png",
    places: "12 Places",
  },
  {
    id: 3,
    title: "New Year's Special Restaurants",
    cover:
    "https://b.zmtcdn.com/data/collections/19f14cd659f66c545da13169c20ff4f7_1702291771.png",
    places: "12 Places",
  },
  {
    id: 4,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 5,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 6,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 7,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 8,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 9,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 10,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 11,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
  {
    id: 12,
    title: "Live Sports Screenings",
    cover:
    "https://b.zmtcdn.com/data/collections/cc81a9904fc32031734760887283844f_1702298731.png",
    places: "12 Places",
  },
];

const diningFilters = [
  {
    id:1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title:"Filters",
  },
  {
    id:2,
    title:"Rating: 4.0+",
  },
  {
    id:3,
    title:"Safe and Hygienic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    title:"Delivery Time",
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
  },
  {
    id:6,
    title:"Great Offers",
  },
];

const diningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection list={diningList} 
        collectionName="Dine-Out Restaurants in Lucknow" />
    </div>
  );
};

export default DiningOut;