import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='tc bg-lightest-green pa3'>
			<input className='pa2 bg-lightest-blue' 
			type = 'search' 
			placeholder = 'Search'
			onChange = {searchChange}
			/>
		</div>
	)
}

export default SearchBox;