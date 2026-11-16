import totalPrice, { price1, price2, price3, product1, product2, product3 } from "./productData";
import { shopAddress, shopName, shopPhone } from "./shopData";




function ProductInfo(){

    return(
        <div>
            <h1>온라인 쇼핑몰</h1>
            
            <br></br>

            <h2>쇼핑몰명 : {shopName}</h2>
            <h2>주소 : {shopAddress}</h2>
            <h2>전화번호 : {shopPhone}</h2>

            <br></br>

            <h2>상품목록</h2>

            <br></br>

            <h2>상품 1 : {product1}</h2>
            <h2>가격 : {price1}</h2>

            <h2>상품 2 : {product2}</h2>
            <h2>가격 : {price2}</h2>

            <h2>상품 3 : {product3}</h2>
            <h2>가격 : {price3}</h2>

            <br></br>

            <p>------------------------</p>
            <h2>총 상품 금액 : {totalPrice}원</h2>


        </div>
    )
}

export default ProductInfo;