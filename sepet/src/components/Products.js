import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { sepeteEkle} from "../actions/index";


const Products = props => {
  console.log("Cart: ",props.cart)
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map(book=>(<div className="book" key={book.id}>
      <img
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>Yazar: {book.author}</p>
          <p>Fiyat: &#8378; {book.price}</p>
          {/*<button onClick={()=>sepeteEkle()}>Sepete Ekle</button>  onclick içinde bu şekilde çagıramıyoruz*/}
           <button onClick={()=>props.sepeteEkle(book)}>Sepete Ekle</button>
        </div>
      

      </div>))}

    
   </div>
  );
};

const mapStateToProps=state=>{
  return{
    bookList:state.bookList,
    cart:state.cart
  }
}

export default connect(
  mapStateToProps,
  {sepeteEkle} 
  )(Products);

/*
const mapActionsToProps=()=>({sepeteEkle})

const mapActionsToProps=()=>({sepeteEkle}) diger yolu
export default connect(
  mapStateToProps,
  mapActionsToProps // fonk oldugu için () koymalıyız
  )(Products);
*/