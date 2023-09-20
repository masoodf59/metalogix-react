import React, { useRef } from "react";

const UseRef=()=>{
    // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value =
      "The quick brown fox jumps over the lazy dog";
      focusPoint.current.focus();
  };
  return (
    <>
      <div>

        <button onClick={onClickHandler}>
         ACTION
        </button>
      </div>
      <label>
       Click on the action button to 
       focus and populate the text.
      </label><br/>
      <textarea ref={focusPoint} />

      </>
    
  );
};
//      const handleInput = useRef();
//      const[text,setText]=useState([]);
//      console.log(text);

//    const handleClick=()=>{
//     setText(handleInput.current.value);
//    }
//     return(
//         <>
//         <input type="text" ref={handleInput}/>
//         <button onClick={handleClick}>Add</button>
// <br/>
//        { text ?? text.map((elem)=>{
//             return(
//                 <>
//                 <li>{elem}</li>
//                 </>
//             )
//         })
//        }
//         </>
//     )
//}

export default UseRef;