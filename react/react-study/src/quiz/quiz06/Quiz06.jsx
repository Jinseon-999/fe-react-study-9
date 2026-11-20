import { useState } from "react";
import "./Quiz06.css";

function Quiz06(){

    
    let [box, setBox] = useState(["red","blue","green","black"]);

    return(
        <div>
            <div>
                <button onClick={() => {let temp = [...box];
                        temp.unshift("red");
                        setBox(temp);}}>앞빨간박스추가</button>
                <button onClick={() => {let temp = [...box];
                        temp.unshift("blue");
                        setBox(temp);}}>앞파란박스추가</button>
                <button onClick={() => {let temp = [...box];
                        temp.unshift("green");
                        setBox(temp);}}>앞초록박스추가</button>

                <button onClick={() => {let temp = [...box];
                        temp.push("red");
                        setBox(temp);}}>뒤빨간박스추가</button>
                <button onClick={() => {let temp = [...box];
                        temp.push("blue");
                        setBox(temp);}}>뒤파란박스추가</button>
                <button onClick={() => {let temp = [...box];
                        temp.push("green");
                        setBox(temp);}}>뒤초록박스추가</button>

                <button onClick={() => {let temp = [...box];
                        temp.shift();
                        setBox(temp);}}>앞박스삭제</button>
                <button onClick={() => {let temp = [...box];
                        temp.pop();
                        setBox(temp);}}>뒷박스삭제</button>
            </div>

            <br></br>

            <div>
                {
                box.map((color, index) => {
                    return(
                        <div className="box" 
                        style={{backgroundColor: color}}
                        key={index}
                        ><button onClick={(()=>
                        {
                            let temp = [...box];
                            // temp.splice(index, 1)
                            // setBox(temp);

                            // temp = temp.filter((item, idx)=>{
                            //     return idx != index;
                            // })
                            // setBox(temp);

                            setBox(box.filter((_,idx)=> idx != index))
                        })
                                }>X</button></div>
                        
                    )
                })}
                
            </div>
        </div>
    )
}


export default  Quiz06;