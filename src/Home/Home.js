import { getProducts } from '../api/product'
import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar'
import Card from "../Card/Card";
import ProductDetails from '../ProductDetails/ProductDetails';
import './home.css'

const Home = () => {

  const [products, setProducts] = useState()
  const [searchResults, setSearchResults] = useState()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id,setID]=useState();

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
      setSearchResults(data)
      setLoading(false)
    }).catch(err => {
      setError(err)
      setLoading(false)
    })
  }, [])

  useEffect(()=>{
    console.log();
  },[id])

  const idHandler=(childrenId)=>{
    console.log(childrenId);
    setID(childrenId);
  }

  if (loading) return <div className="loader"/>
  if (error) return <p>Click proudct to see the results</p>
  if(products){
      return(
          <div>
            <div className="header">
            <SearchBar products={products} setSearchResults={setSearchResults}/></div>
            <div>
              <div className='split list'>
                <div className='centered'>
                  {searchResults.map((product) =>
                      <Card product={product} idHandler={idHandler}/>
                  )}
                </div>
              </div>
              <div className='split product'>
                   <div className='centered'>
                   <ProductDetails id={id}/>
                   </div>
              </div>
              
            </div>
         
          </div>
      )
    }
}

export default Home;



