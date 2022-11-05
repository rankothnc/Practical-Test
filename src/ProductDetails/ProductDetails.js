import {useEffect, useState} from "react";
import {getProduct} from "../api/product";
import "./productDetails.css";


const ProductDetails = ({id}) => {

    //const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProduct(id).then(data => {
            //console.log(data.thumbnail);
            setProduct(data);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        })
    }
    ,[id]);

    useEffect(() => {
        getProduct(1).then(data => {
            //console.log(data.thumbnail);
            setProduct(data);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        })
    }
    ,[]);


    if (loading) return <div className="loader"/>
    if (error) return <p>Something went wrong</p>
    if(product){
        //console.log('inside');
        return (
            <div className='Product'>
                <img className="Img" src={product.images[0]} alt={product.name} />
                <p className="Heading">{product.title}</p>
                <p className="SubHeading">{product.description}</p>
                <hr className="hr"/>
                <p className="infor">Price: {product.price} </p>
                <p className="infor">Discount: {product.discountPercentage} </p>
                <p className="infor">Rating: {product.rating} </p>
                <p className="infor">Stock: {product.stock} </p>
                <p className="infor">Brand: {product.brand} </p>
                <p className="infor">Category: {product.category} </p>
            </div>
        );
    }
};

export default ProductDetails;