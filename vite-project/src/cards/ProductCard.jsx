import "./card-style.css";  
import obj from "./nwcard.module.css"


const ProductCard=(obj)=>{
    let design={
        backgroundColor:"pink",
        
    }
    return(
        // <div style={{backgroundColor:"blue",width:"300px",height:"150px"}}>
        // <div style={design}>
        <div className="box">
            <center>
            <img src="./public/pics/img1.jpg" alt="" width={100}/>
            </center>
             <h1>It's card</h1>
            
             <p>Price:{obj.price}</p>
             <p>Owner:{obj.owner}</p>
             <p>Model:{obj.model}</p>
             <p>Details:{obj.children}</p>       
              <input type="button" className={obj.btn} value={"click Here"} onClick={()=>{obj.whenClicked(obj.owner)}} />  
        </div>
    )
}
export default ProductCard;