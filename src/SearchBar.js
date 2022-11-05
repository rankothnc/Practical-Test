import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = ({ products, setSearchResults }) => {

    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(products)
        const filteredProducts = products.filter(product => {
            
            return product.title.toLowerCase().includes(e.target.value.toLowerCase())
            }
        )
        setSearchResults(filteredProducts)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <FontAwesomeIcon className='searchButton' icon={faMagnifyingGlass} />
                <input
                    className="searchInput"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                    placeholder="Search product"
                />
            </form>
        </header>
    )
}
export default SearchBar