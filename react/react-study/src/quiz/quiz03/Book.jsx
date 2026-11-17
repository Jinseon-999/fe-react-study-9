
/*
            // title =  content=
function Book( {title, detail} ){ // props = {title: xxx, content:xxx}

    return(
            <div className='textItem'>
                <p className='title'>제목 : {title}</p>
                <p>내용 : {detail}</p>
            </div>
    )
}
*/

function Book( props ){ // props = {title: xxx, content:xxx}

    return(
            <div className='textItem'>
                <p className='title'>제목 : {props.title}</p>
                <p>내용 : {props.detail}</p>
            </div>
    )
}

export default Book;