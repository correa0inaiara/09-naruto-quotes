import React from 'react'
import Naruto from './../assets/images/naruto.png'

export default function Image() {
	return (
		<div className="image">
			<img src={Naruto} alt="Naruto" />
		</div>
	)
}