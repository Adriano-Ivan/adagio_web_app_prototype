import { Fragment } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import "./form_login.styles.css";
import  loginIcon from "../../assets/user.svg";
import {BsFillPersonFill} from "react-icons/bs";
import {BsLockFill} from "react-icons/bs";
import { Link } from "react-router-dom";

const FormLogin = () =>{
    const {currentUser,handleCurrentUserChanged} = useContext(UserContext);

    console.log(window.location.pathname);

    const returnPropertiesIcons = () => {
        return (
            {color:"#463a8b",marginRight:"-20px",
              marginTop:"10px",zIndex:"10000"}
        )
    }
    return (
        <section className={"container-login-area"}>

        <section className={"login-area"}>
        <img src={loginIcon} className={"login-icon"} alt="login icon"/>
        <Container className={"mt-5 center"}>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Form>
                        <Form.Group  className={"mb-3"} controlId="formBasicEmail">
                            <InputGroup>
                                <BsFillPersonFill style={returnPropertiesIcons()}/>
 
                                <Form.Control style={{paddingLeft:"25px",borderRadius:"10px"}} 
                                type="text" placeholder="Nome de usuário ou email" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId="formBasicPassword">
                            <InputGroup>
                                <BsLockFill style={returnPropertiesIcons()}/>
                                <Form.Control style={{paddingLeft:"25px",borderRadius:"10px"}} 
                                type="password" placeholder="Senha" />
                            </InputGroup>
                            
                        </Form.Group>

                        <div className={"confirm-login"}>
                            <div className={"confirm-remember"}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Lembrar-me" />
                                </Form.Group>
                            </div>

                            <Button style={{backgroundColor:"#463a8b",
                            borderColor:"#463a8b"}} variant="primary" type="submit">
                                Fazer Login
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

        <Link to="*" style={{color:"#463a8b",marginTop:"18px"}}>Esqueci minha senha</Link>
        </section>

        </section>
    )
}

export default FormLogin;