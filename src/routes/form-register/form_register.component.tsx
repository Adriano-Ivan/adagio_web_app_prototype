import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./form_register.module.scss";

const FormRegister = () => {
    return (
        <section>

        <Container className={"mt-5 center"}>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Form>
                        <Form.Group  className={`mb-3 ${styles.name_register_form}`} 
                        controlId="formBasicName">
                            Nome:
                            <InputGroup className={"mt-2"}>
                                <Form.Control  
                                type="text" placeholder="Seu nome completo" />
                            </InputGroup>
                        </Form.Group>
                        
                        <div className={`${styles.set_register_form}`}>
                            <Form.Group  className={`mb-3 ${styles.member_register_form}`} 
                            controlId="formBasicUsername">
                                Nome de usuário:
                                <InputGroup className={"mt-2"}>
                                    <Form.Control  
                                    type="text" placeholder="Escolha um nome de usuário" />
                                </InputGroup>
                            </Form.Group>
                       

                            <Form.Group  className={`mb-3 ${styles.member_register_form}`}
                             controlId="formBasicCpf">
                                CPF:
                                <InputGroup className={"mt-2"}>
                                    <Form.Control  
                                    type="text" placeholder="Seu CPF" />
                                </InputGroup>
                            </Form.Group>
                        </div>

                        <div className={`${styles.set_register_form}`}>
                            <Form.Group  className={`mb-3 ${styles.member_register_form}`} 
                            controlId="formBasicEmail">
                                Email:
                                <InputGroup className={"mt-2"}>
                                    <Form.Control  
                                    type="email"
                                     placeholder="Um email que seja seu e que você possa acessar" />
                                </InputGroup>
                            </Form.Group>
                            
                            <Form.Group  className={`mb-3 ${styles.member_register_form}`} 
                                        controlId="formBasicTelefone">
                                Telefone:
                                <InputGroup className={"mt-2"}>
                                    <Form.Control  
                                    type="tel" placeholder="Número de telefone fixo ou celular" />
                                </InputGroup>
                            </Form.Group>

                        </div>

                        <div className={`${styles.set_register_form}`}>
                            <Form.Group className={`mb-3 ${styles.member_register_form}`} 
                            controlId="formBasicPassword">
                                Senha:
                                <InputGroup className={"mt-2"}>
                                    <Form.Control
                                    type="password" placeholder="Crie uma senha para acessar o sistema" />
                                </InputGroup>
                            </Form.Group>


                            <Form.Group className={`mb-3 ${styles.member_register_form}`} 
                                        controlId="formBasicConfirmPassword">
                                Confirmação de senha:
                                <InputGroup className={"mt-2"}>
                                    <Form.Control
                                    type="password" placeholder="Confirme a senha informada" />
                                </InputGroup>
                            </Form.Group>
                        </div>
                       
                        <div className={`${styles.set_register_form}`}>
                            <div className={`${styles.buttons_area_register}`}>
                                <Button style={{backgroundColor:"#991f00",
                                borderColor:"#991f00"}} variant="primary" type="button">
                                    Limpar campos
                                </Button>

                                <Button style={{backgroundColor:"#004d00",
                                borderColor:"#463a8b"}} variant="primary" type="submit">
                                    Cadastrar
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default FormRegister;