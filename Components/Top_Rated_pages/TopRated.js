import React, {useState} from 'react'
import SliderCard from './../../Shared_components/SliderCard.js'
import lake from './../../assets/Bhopalake.jpg'
import sanchi from './../../assets/sanchi.jpg'
import gijari from './../../assets/gijari.jpg'
import kujrao from './../../assets/khujrao.jpg'
import dhoodhdhara from './../../assets/dhoodhdhara.JPG'
import mahakaal from './../../assets/mahakaal.jpg'
import kandariya from './../../assets/kandariya.jpeg'
import jahaz from './../../assets/jahaz.jpeg'
import './TopRated.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const TopRated = () => {

	const handleDragStart = (e) => e.preventDefault();


	const items = [
		<div className="rate_collection">
			<SliderCard image={lake} heading="Bhopal Lake" locai="abcd"rating='2' price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={kujrao} heading="Khajurao Temple" locai="abcd"rating= '4' price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={sanchi} heading="Sanchi Stupa" locai="abcd"rating='3' price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={gijari} heading="Gujari Mahal" locai="abcd"rating= '2' price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={dhoodhdhara} heading="Narmada Bank" locai="abcd"rating='4' price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={mahakaal} heading="Mahakaal Temple" locai="abcd"rating='4.5' price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={kandariya} heading="Kandariya Temple" locai="abcd"rating='5' price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={jahaz} heading="Jahaz Mahal" locai="abcd"rating='3.5' price="XXXXX"/>
		</div>
	];

	const responsive  =  {
		0 : {items : 1},
		400 : {items : 2},
		800 : {items : 3},
		1024 : {items : 4}
	}

	return (
		<div>
			<div id="top_destination">
			Top Attractions
			</div>
			<div id="rate">
				<br/>
			<AliceCarousel 
				mouseTracking 
				items={items}
				responsive ={responsive}
				controlStrategy = "responsive"
				disableDotsControls = {true} 
			/>	
			</div>
		</div>
	)
}

export default TopRated;
