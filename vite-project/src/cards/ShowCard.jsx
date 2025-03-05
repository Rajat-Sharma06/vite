import ProductCard from "./ProductCard";
import JsonArray from "./JsonData"; 
import"./card-style.css";
import CompCombo from "./CompCombo"

const ShowCard=()=>{
    function doShow(owner){
       alert("hi: "+owner)
    }
    return(
        <>
        <center><CompCombo></CompCombo></center>
        <div className="container">{
        // <ProductCard company="Maruti" owner="Aman" price="2000" model="Baleno">
        //     Its good to use
        // </ProductCard>
        // <ProductCard company="Dell" owner="Raman" price="5000" model="Z11X">
        //     Its good to use
        // </ProductCard>
        // <ProductCard></ProductCard>
        // </div>
        JsonArray.map((obj)=>{
            return (
            <ProductCard whenClicked={doShow} key={obj.id} path={obj.path} company={obj.company} owner={obj.owner} price="2000">
                Its good product
            </ProductCard>
            )
        })
   } </div> 
   </>
 )
}
export default ShowCard;