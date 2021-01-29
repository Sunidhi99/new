import React from 'react'
import './Bhopal.css'
import CityCard from './../../Shared_components/CityCard.js'
import Footer from './../Footer/Footer.js'
import wallpaper from './../../assets/balaghat.jpeg'
import Balaghat1 from './../../assets/Hotel Gulmohar In.jpeg'
import Balaghat2 from './../../assets/Hotel Chandela In.jpeg'
import Balaghat3 from './../../assets/Hotel Mallikarjun International.jpeg'
import Balaghat4 from './../../assets/Hotel Midtow.jpeg'
import Balaghat5 from './../../assets/Hotel Sheetal Palace.jpeg'
import Balaghat6 from './../../assets/hotel manuhar(Restaurant & Banquet).jpeg'

import data from './../../data.json'


const Balaghat = () => {

	const hotel1 = data.luxury.image1
	const hotel2 = data.luxury.image2
	const hotel3 = data.luxury.image3
	const hotel4 = data.luxury.image4
	const hotel5 = data.luxury.image5
	const hotel6 = data.luxury.image6

	return(
		<div id="Bhopal">
			<div id="image_bhopal">
				<img src={wallpaper}/>
				<div id="title_bhopal">
					Stays at Balaghat
				</div>
			</div>
			<div id ="whole_bhopal">
			
			<div id="content_bhopal">
				<CityCard img={Balaghat1} head="Hotel Gulmohar Inn" text={hotel6.about}location="Balaghat" price={hotel1.price}ratings='2'paragraph="asdf sdfg fgh dfg fgdh dfg defr defr edrf derft erdfwt rftgey trgyhr tregryh rtfgy rftgy gteyhr tgyhr gthbry gthbryt gtbhryntju gthyrbt gthyrtuj gtyh gthyrbtju tyhuj ythujt ythuj tyghuj  dfrgte edf fggh ghj fghj gtyrhu hyujiko werty ghnjmk  nm,rrftgyhufvgtbhy gthyrtu"/><br/>
				<CityCard img={Balaghat2} head="Hotel Chandela Inn" text={hotel6.about}location="Balaghat" price={hotel2.price}ratings='4'paragraph="asdf sdfg fgh dfg fgdh dfg defr defr edrf derft erdfwt rftgey trgyhr tregryh rtfgy rftgy gteyhr tgyhr gthbry gthbryt gtbhryntju gthyrbt gthyrtuj gtyh gthyrbtju tyhuj ythujt ythuj tyghuj  dfrgte edf fggh ghj fghj gtyrhu hyujiko werty ghnjmk  nm,rrftgyhufvgtbhy gthyrtu"/><br/>
				<CityCard img={Balaghat3} head="Hotel Mallikarjun Internationals" text={hotel6.about} location="Balaghat" price={hotel3.price}ratings='3'paragraph="asdf sdfg fgh dfg fgdh dfg defr defr edrf derft erdfwt rftgey trgyhr tregryh rtfgy rftgy gteyhr tgyhr gthbry gthbryt gtbhryntju gthyrbt gthyrtuj gtyh gthyrbtju tyhuj ythujt ythuj tyghuj  dfrgte edf fggh ghj fghj gtyrhu hyujiko werty ghnjmk  nm,rrftgyhufvgtbhy gthyrtu"/><br/>
				<CityCard img={Balaghat4} head="Hotel Midtown" text={hotel6.about}location="Balaghat" price={hotel4.price}ratings='3.5'paragraph="asdf sdfg fgh dfg fgdh dfg defr defr edrf derft erdfwt rftgey trgyhr tregryh rtfgy rftgy gteyhr tgyhr gthbry gthbryt gtbhryntju gthyrbt gthyrtuj gtyh gthyrbtju tyhuj ythujt ythuj tyghuj  dfrgte edf fggh ghj fghj gtyrhu hyujiko werty ghnjmk  nm,rrftgyhufvgtbhy gthyrtu"/><br/>
				<CityCard img={Balaghat5} head="Hotel Sheetal Palace" text={hotel6.about}location="Balaghat" price={hotel5.price}ratings='4.5'paragraph="asdf sdfg fgh dfg fgdh dfg defr defr edrf derft erdfwt rftgey trgyhr tregryh rtfgy rftgy gteyhr tgyhr gthbry gthbryt gtbhryntju gthyrbt gthyrtuj gtyh gthyrbtju tyhuj ythujt ythuj tyghuj  dfrgte edf fggh ghj fghj gtyrhu hyujiko werty ghnjmk  nm,rrftgyhufvgtbhy gthyrtu"/><br/>
				<CityCard img={Balaghat6} head="hotel manuhar(Restaurant & Banquet)" text={hotel6.about}location="Balaghat" price={hotel6.price}ratings='5'paragraph="asdf sdfg fgh dfg fgdh dfg defr defr edrf derft erdfwt rftgey trgyhr tregryh rtfgy rftgy gteyhr tgyhr gthbry gthbryt gtbhryntju gthyrbt gthyrtuj gtyh gthyrbtju tyhuj ythujt ythuj tyghuj  dfrgte edf fggh ghj fghj gtyrhu hyujiko werty ghnjmk  nm,rrftgyhufvgtbhy gthyrtu"/>
			</div></div>
			<Footer/>
		</div>
	)
}

export default Balaghat;