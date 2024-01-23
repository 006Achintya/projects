import React from 'react'

const Card = ({name,email,id}) => {
	return (
		<div className='tc dib br3 ma2 pa3 shadow-5 bg-light-green bw2 grow'>
			<img alt='photo' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;