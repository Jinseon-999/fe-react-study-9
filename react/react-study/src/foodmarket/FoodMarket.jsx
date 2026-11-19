import "./FoodMarket.css";
/*import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; */

import { Container, Nav, Navbar, Spinner, Button, Row, Col, Card} from 'react-bootstrap';

import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

import foodsData from "./data/foodsData";
import { useState } from "react";

import FoodCard from "./components/FoodCard";

function FoodMarket(){

    let [foods, setFoods] = useState(foodsData);

    return(

        <div>

        <Navbar bg="light" data-bs-theme="light">
                <Container>
                <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>


            {/*
                이미지를 사용 (연결)

                * html 연결 상대경로 연결
                <img src="./images/a.png"/>
                <img src="../../monday/coffee.jpg"/>

                React 방식
                상대폴더경로 링크로 연결 X

                React 컴포넌트 방식에서 이미지 사용시
                1. import 이미지

                2. 외부 이미지 url 경로
                    <img src="https://images.pexels.com/photos/10493555/pexels-photo-10493555.jpeg"/>

                3. css 에서 이미지 경로
                    url('./img/banner_bg.jpg'); 이미지 상대경로

                4. public 폴더에 이미지를 미리 저장해놓고 접근/사용
                현재 실행중인 서버에 public 경로를 통해 image 접근 가능
                서버가 외부 url 이미지에 접근하듯이 해당 서버 역할

                <img src="https://localhost:5731/images/food3.jpg" />
                <img src="https://hellofdmarket/fd/images/food3.jpg" />
                
                패키지 매니저 별로 설정
                
                CRA : src={ process.env.PUBLIC_URL + food.imgPath}
                    설정 package.json
                        "homepage" : "/fdmarket/"

                Vite : src={ import.meta.env.BASE_URL + food.imgPath}
                    설정 vite.config.js
                        base:'/fdmarket/'
                
            */}

            {/* 
            <img src={banner_bg}/>
            <img src="https://images.pexels.com/photos/10493555/pexels-photo-10493555.jpeg"/>
            */}

            {/* <div className="main-bg" style={{backgroundImage : 'url(' + banner_bg + ')' }}></div> */}
            <div className="main-bg"></div>
            <Container>
                <Row>
                    {
                        foods.map((food,index)=>{
                            return(
                                <Col md={4} sm={4} xxl={3}>
                                    <FoodCard food={food} foods={foods} index={index} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>


            {/* bootstrap 한줄 기준 : 12 */}


            {/* 
            <Container>
                <Row>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={food1} />
                        <Card.Body>
                            <Card.Title>{foods[0].title}</Card.Title>
                            <Card.Text>
                                {foods[0].content}
                            </Card.Text>
                            <Card.Text>
                                {foods[0].price}
                            </Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={food2} />
                        <Card.Body>
                            <Card.Title>{foods[1].title}</Card.Title>
                            <Card.Text>
                                {foods[1].content}
                            </Card.Text>
                            <Card.Text>
                                {foods[1].price}
                            </Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={food3} />
                        <Card.Body>
                            <Card.Title>{foods[2].title}</Card.Title>
                            <Card.Text>
                                {foods[2].content}
                            </Card.Text>
                            <Card.Text>
                                {foods[2].price}
                            </Card.Text>
                            <Button variant="primary">상세보기</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            */}

























            {/* 
            <Button variant="outline-primary">Primary</Button>
        


        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
        <>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
        </>
        */}

        </div>
    )
}

export default FoodMarket;