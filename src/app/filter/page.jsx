
import Filter from "./Filter"

const FilterPage = () => {
	if (typeof window !== 'undefined') {
		return (
		  <>
			<Filter />
		  </>
		);
	  }
}

export default FilterPage
