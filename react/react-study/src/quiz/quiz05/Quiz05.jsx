import { useState } from 'react';
import './Quiz05.css';
import ColorBox from './ColorBox';

function Quiz05(){

    
    // 각 박스들을 색상 별로 구분해서 표시
    // 박스 색상 데이터 관리를 어떻게 ?

    // 1) 색이 담긴 박스 요소가 직접 배열에 들어있는 경우 + 클래스 활용포함

    /*
    let [boxArr, setBoxArr] = useState([
        <div className='quiz5-bg-red'></div>,
        <div className='quiz5-bg-red'></div>,
        <div className='quiz5-bg-red'></div>,
        <div className='quiz5-bg-red'></div>
    ]); 
    */

    /*
    let [boxArr, setBoxArr] = useState([
        <div className='box' style={{ backgroundColor:"red" }}></div>,
        <div className='box' style={{ backgroundColor:"blue" }}></div>,
        <div className='box' style={{ backgroundColor:"green" }}></div>,
        <div className='box' style={{ backgroundColor:"black" }}></div>
    ]);

    return(
        
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.unshift(<div className='box' style={{ backgroundColor:"red" }}></div>)
                    setBoxArr(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.unshift(<div className='box' style={{ backgroundColor:"blue" }}></div>)
                    setBoxArr(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.unshift(<div className='box' style={{ backgroundColor:"green" }}></div>)
                    setBoxArr(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.push(<div className='box' style={{ backgroundColor:"red" }}></div>)
                    setBoxArr(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.push(<div className='box' style={{ backgroundColor:"blue" }}></div>)
                    setBoxArr(temp);}}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.push(<div className='box' style={{ backgroundColor:"green" }}></div>)
                    setBoxArr(temp);}}>뒤초록박스추가</button>

                <button onClick={() => {
                    //unshift shift
                    let temp = [...boxArr];
                    temp.shift();
                    setBoxArr(temp);
                }}>앞박스삭제</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.pop();
                    setBoxArr(temp);}}>뒷박스삭제</button>
            </div>
            
            <div>
                    {boxArr}
            </div>
            
        </div>
    )
    */

    // 2) 특정 기준 코드로 박스 색상을 구분

    /*
    // 기준코드로 구분하겠다.
    // 1:red 2:blue 3:green 4:black
    let [boxArr, setBoxArr] = useState([1,2,3,4]);
    // [1,2,3,4]    [1,2,3,4,1]

    return(
        
        <div>
            <div>
                <button onClick={() => { setBoxArr( [1, ...boxArr] )}}>앞빨간박스추가</button>
                <button onClick={() => { setBoxArr( [2, ...boxArr] )}}>앞파란박스추가</button>
                <button onClick={() => { setBoxArr( [3, ...boxArr] )}}>앞초록박스추가</button>

                <button onClick={() => { setBoxArr( [...boxArr, 1] )}}>뒤빨간박스추가</button>
                <button onClick={() => { setBoxArr( [...boxArr, 2] )}}>뒤파란박스추가</button>
                <button onClick={() => { setBoxArr( [...boxArr, 3] )}}>뒤초록박스추가</button>
                
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.shift();
                    setBoxArr(temp);}}>앞박스삭제</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.pop();
                    setBoxArr(temp);}}>뒷박스삭제</button>
            </div>
            
            <div>
                {
                    boxArr.map( (item, index)=>{
                        if(item == 1)
                            return <div className='box' style={{ backgroundColor:"red" }}></div>
                        else if(item == 2)
                            return <div className='box' style={{ backgroundColor:"blue" }}></div>
                        else if(item == 3)
                            return <div className='box' style={{ backgroundColor:"green" }}></div>
                        else 
                            return <div className='box' style={{ backgroundColor:"black" }}></div>
                    })
                }
            </div>
            
        </div>
    )    
    */
    
    // 3) 색상을 표시하는 값 자체를 가진 배열로 활용

    /*
    let [boxArr, setBoxArr] = useState(['red', 'blue', 'green', 'black']);

    return(
        <div>
            <div>
                <button onClick={() => { setBoxArr( ['red', ...boxArr] )}}>앞빨간박스추가</button>
                <button onClick={() => { setBoxArr( ['blue', ...boxArr] )}}>앞파란박스추가</button>
                <button onClick={() => { setBoxArr( ['green', ...boxArr] )}}>앞초록박스추가</button>

                <button onClick={() => { setBoxArr( [...boxArr, 'red'] )}}>뒤빨간박스추가</button>
                <button onClick={() => { setBoxArr( [...boxArr, 'blue'] )}}>뒤파란박스추가</button>
                <button onClick={() => { setBoxArr( [...boxArr, 'green'] )}}>뒤초록박스추가</button>
                
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.shift();
                    setBoxArr(temp);}}>앞박스삭제</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.pop();
                    setBoxArr(temp);}}>뒷박스삭제</button>
            </div>

            <div>
                {
                    boxArr.map((item, idex) =>{
                        return <div className='box' style={{ backgroundColor:item }}></div>
                    })
                }
            </div>
        */

        
            {/* +@) 색상 박스를 컴포넌트화     */}
        //     <h3>+@) 색상 박스를  컴포넌트화</h3>
        //     <div>
        //         {
        //             boxArr.map((item, idex) =>{
        //                 return <ColorBox bgColor={item} />
        //             })
        //         }
        //     </div>


        // </div>

        // )
        








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
                        <div className="box" style={{backgroundColor: color}} key={index}></div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Quiz05;