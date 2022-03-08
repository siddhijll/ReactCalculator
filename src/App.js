import React, { useState } from "react";
import './App.css';

// function someName (arguments) {

// }

// // Arrow functions --> JS

// const someName = () => {
//     dsndakdsa
// };

// const useState = (arg) => { const updateArg = () => {}; return [arg, updateArg];}

// React component should return  valid JSX eleent
// Root
// branch 1 branch 2
// App --> buuton -click-> dialog
// Buuton component on clicking that i need to show the dialog
// <Dialog />
const App = () => {
    const [result, setResult] = useState(""); // 7+8=
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, result.length-1)); //or -1
    }
    const calculate = () => {
        try{
            setResult(eval(result).toString());
        }
        catch(err){
            setResult("Error")
        }
    }
    // 7 + 8 =

    // if (operator === +) {
    //     add(7, 8)  result
    // }

    // add (a, b) {
    //     return a+b;
    // }

    // return (
    //     <>
    //         <Branch1 />
    //         <Branch2 />
    //     </>
    // );
    // Button.js --> button props = onClick, title, name

    return(
        <>
           <div className="container">
               <form>
                   <input type ="text" value ={result} />
               </form>

               <div className="keypad">
                   <button className="highlight" onClick={clear} id="clear">clear</button>
                   {/* <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} /> */}
                   <button className="highlight" onClick={backspace} id="backspace">c</button>
                   <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                   <button name="7" onClick={handleClick}>7</button>
                   <button name="8" onClick={handleClick}>8</button>
                   <button name="9" onClick={handleClick}>9</button>
                   <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                   <button name="4" onClick={handleClick}>4</button>
                   <button name="5" onClick={handleClick}>5</button>
                   <button name="6" onClick={handleClick}>6</button>
                   <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                   <button name="1" onClick={handleClick}>1</button>
                   <button name="2" onClick={handleClick}>2</button>
                   <button name="3" onClick={handleClick}>3</button>
                   <button className="highlight" name="+" onClick={handleClick}>+</button>
                   <button name="0" onClick={handleClick}>0</button>
                   <button name="." onClick={handleClick}>.</button>
                   <button className="highlight" onClick={calculate} id="result">=</button>
               </div>
            </div>
        </>
    );
}

export default App;