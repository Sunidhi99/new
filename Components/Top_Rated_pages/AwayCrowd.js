
import React, {useState} from 'react'
import SliderCard from './../../Shared_components/SliderCard.js'
import patalpani from './../../assets/patalpani.jpeg'
import trek from './../../assets/trek.jpeg'
import bhopalcamp from './../../assets/bhopalcamp.jpeg'
import panna from './../../assets/panna.jpeg'
import panna2 from './../../assets/panna2.jpeg'
import deo from './../../assets/deo.jpeg'
import rosa from './../../assets/rosa.jpeg'
import khaj_camp from './../../assets/khaj_camp.jpeg'
import './TopRated.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const AwayCrowd = () => {

	const handleDragStart = (e) => e.preventDefault();


	const items = [
		<div className="rate_collection">
			<SliderCard image={patalpani} heading="Camping near patalpani" locai="Indore"rating="5" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={trek} heading="Chidiya Bhadak Waterfall" locai="abcd"rating="4" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={bhopalcamp} heading="Adventure Camping" locai="Bhopal"rating="3.5" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={panna} heading="Camping at ken River" locai="Panna"rating="2" price="XXXXX"/>
		</div>,
		<div className="rate_collection">
			<SliderCard image={panna2} heading="Dense Forest Camping" locai="Panna, Jabalpur"rating="1" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={rosa} heading="Rosa Bhandavgarh" locai="Jabalpur"rating="2.4" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={khaj_camp} heading="Camping" locai="Khajurao"rating="5" price="XXXXX"/>
		</div>,
		<div className="rate_collection">	
			<SliderCard image={deo} heading="Deo Bagh" locai="Gwalior"rating="2" price="XXXXX"/>
		</div>,
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
			Destination Away from Crowd
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

export default AwayCrowd;
