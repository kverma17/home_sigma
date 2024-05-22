import React from 'react'; 
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Body from './components/Body';
import Listings from './components/Listing';
class App extends React.Component { 
	render() { 
		const filterOptions = {
			listingTypes: ["House", "Apartment", "Condo", "Townhouse"],
			completionStatuses: ["Completed", "Under Construction", "Planned"],
			bedroom: [1,2,3,4],
			maxPrice: [300000 , 400000, 500000, 600000],
			minPrice: [300000 , 400000, 500000, 600000]
			// Add more filter options as needed
		  };
		return( 
			<div className="App">
				<Header />
				<Body filterOptions={filterOptions} />
				<Listings />
			</div>
			
		)
	} 
} 
export default App;
