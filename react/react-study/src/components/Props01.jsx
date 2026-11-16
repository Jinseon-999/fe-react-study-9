import Box from "./Box";

function Props01(){
    
    let arr = ["아침", "점심", "저녁"];
    let detail = ["졸리다", "배부르다", "피곤하다"];
    
    
    
    
    return(

        <div>

            {
                arr.map((value, index)=>{

                    return(
                        <div style={{backgroundColor:"lightgray"}}>
                            <h1>{value}</h1>
                            <h2>{index}</h2>
                            <p>{detail[index]}</p>
                            <p>{arr[index]}</p>
                        </div>
                    )
                })
            }
            

            <div style={{backgroundColor:"lightgray"}}>
                <h1>{arr[0]}</h1>
                <h2>{detail[0]}</h2>
                <p>고정텍스트</p>
            </div>
            <div style={{backgroundColor:"lightgray"}}>
                <h1>{arr[1]}</h1>
                <h2>{detail[1]}</h2>
                <p>고정텍스트</p>
            </div>
            <div style={{backgroundColor:"lightgray"}}>
                <h1>{arr[2]}</h1>
                <h2>{detail[2]}</h2>
                <p>고정텍스트</p>
            </div>

            <hr/>
            
            {/*<Box text={"아침"]} detail={"졸리다"}/>*/}
            <Box title={arr[0]} detail={detail[0]}/>
            <Box title={arr[1]} detail={detail[1]}/>
            <Box title={arr[2]} detail={detail[2]}/>

            <hr/>
            <hr/>

            {
                arr.map((value, index)=>{
                    return(
                        <Box title={value} detail={detail[index]}/>
                        //<Box title={arr[index]} detail={detail[index]}/>
                    )
                })
            }


        </div>
    )
}

export default Props01;