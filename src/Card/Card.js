import { useNavigate } from "react-router-dom";
import "./card.css";
import { BsHandThumbsUp,BsShare } from "react-icons/bs";


const Card = ({ product, idHandler }) => {
    const navigate = useNavigate();
    return (
        <div className="tile" onClick={() => {
            idHandler(product.id);
            }}>
      
       <div >
            <div className="tileContent">
                <img className="tileImg" src={"https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg"} alt="profile"/>
                <div>
                    <p className="tileHeading">{product.title} </p>
                    <p className="tileSubHeading">{product.description}</p><hr className="cardhr"/>
                </div>
            </div>
            <div><br/><br/>
            <img className="thumbnail" src={product.thumbnail} alt="profile"/>
            <div className="thumbnailContent"><BsHandThumbsUp color="#63caef" size={20}/>
                    <input className="comment" placeholder="Add a comment" type="text" name="name" width={90}/><BsShare color="#63caef" size={20}/>
                    <br/><br/>
                    </div>
            
            </div>
        </div>
        </div>
    )
}
export default Card;