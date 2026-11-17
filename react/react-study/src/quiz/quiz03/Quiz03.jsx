import './Quiz03.css';
import Book from "./Book";

function Quiz03(){

    let title = ["하나", "둘", "셋", "넷", "다섯"];
    let detail = ["내용하나", "내용둘", "내용셋", "내용넷", "내용다섯"];

    return (
        <div className="App">

            <div className='textItem'>
                <p className='title'>제목 : 하나</p>
                <p>내용 : 내용하나</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 둘</p>
                <p>내용 : 내용둘</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 셋</p>
                <p>내용 : 내용셋</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 넷</p>
                <p>내용 : 내용넷</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 다섯</p>
                <p>내용 : 내용다섯</p>
            </div>
        


         {/* 컴포넌트를 활용 + rops */}
        <Book title="하나" detail="내용하나"/>
        <Book title="둘" detail="내용둘"/>
        <Book title="셋" detail="내용셋"/>
        <Book title="넷" detail="내용넷"/>
        <Book title="다섯" detail="내용다섯"/>
        
        {/* 배열을 활용하는 방식 */}

        <div className='textItem'>
            <p className='title'>제목 : {title[0]}</p>
            <p>내용 : detail[0]</p>
        </div>
        <div className='textItem'>
            <p className='title'>제목 : {title[1]}</p>
            <p>내용 : detail[1]</p>
        </div>
        <div className='textItem'>
            <p className='title'>제목 : {title[2]}</p>
            <p>내용 : detail[2]</p>
        </div>
        <div className='textItem'>
            <p className='title'>제목 : {title[3]}</p>
            <p>내용 : detail[3]</p>
        </div>
        <div className='textItem'>
            <p className='title'>제목 : {title[4]}</p>
            <p>내용 : detail[4]</p>
        </div>

        {/* 배열 활용 + 반복처리 */}
            {
                // let title = ["하나", "둘", "셋", "넷", "다섯"];

                title.map(
                    (value, index)=>{
                    return(
                        <div className='textItem'>
                        <p className='title'>제목 : {title[index]}</p>
                        <p className='title'>제목 : {value}</p>
                        <p>내용 : {title[index]}</p>
                    </div>
                    );
                })  
            }

        {/* 배열 활용 + 반복처리 + 컴포넌트활용 */}
            {
                // let title = ["하나", "둘", "셋", "넷", "다섯"];

                title.map(
                    (value, index)=>{
                    return(
                        <Book title={value} detail={detail[index]} key={index}/>
                    );
                })  
            }
        </div>
    );
}

export default Quiz03;