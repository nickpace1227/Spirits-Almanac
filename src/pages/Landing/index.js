import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../../store/cardSlice";
import { removeCard } from "../../store/cardSlice";
import {v4 as uuidv4} from "uuid";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [type, setType] = useState(null);
  const [subType, setSubType] = useState(null);
  const [brand, setBrand] = useState(null);
  const [proof, setProof] = useState(null);
  const inventory = useSelector((store) => store.inventory.cards);



  const handleClick = () => {
    const newCard = {
      type: type,
      subType: subType,
      brand: brand,
      proof: proof,
      id: uuidv4(),
    };
    dispatch(addCard(newCard));
  };

  const handleRemove = (card) => {
    dispatch(removeCard(card))
  }

  return (
    <div className="App">
      <p>Welcome to Spirits Almanac!</p>
      <p>Click below to begin adding bottles to your almanac!</p>
      <form>
        <input
          type="text"
          placeholder="Spirit Type"
          onChange={(event) => setType(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Subtype"
          onChange={(event) => setSubType(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Name"
          onChange={(event) => setBrand(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Proof"
          onChange={(event) => setProof(event.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
      <div>Card Details here:</div>
      <div>
        {inventory.map((card, index) => {
          return (
          <body>
          <div key={index}> {JSON.stringify(card)} </div>
          <button onClick={()=> handleRemove(card)}>Delete Card</button>
          </body>);
        })}
      </div>
    </div>
  );
}

//commented out, but saved for later Redux application
{
  /* <div>
<button onClick={() => dispatch(increment())}>Increment</button>
<span>{count}</span>
<button onClick={() => dispatch(decrement())}>Decrement</button>
</div> */
}
//
