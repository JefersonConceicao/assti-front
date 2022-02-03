import React, { useState } from "react";
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";

//ACTIONS
import { ReqLogin } from '../../redux/actions';

const Login = ({
  ReqLogin,
  loading
}) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitFormLogin = (e) => {
    e.preventDefault();

    if(!!form.email && !!form.password){
      ReqLogin(form);
    } 
  }

  console.log(loading);
  return (
    <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card">
            <div>
              <div>
                <div className="logo">
                  <img
                    className="img-fluid for-light"
                    src={require("../../assets/images-transalvador/logo_transalvador.png")}
                    alt="Logotipo Transalvador"
                  />
                </div>
                <div className="login-main login-tab">
                  <div className="content-login">
                    <Form className="theme-form" onSubmit={submitFormLogin}>
                      <h4> Entrar </h4>
                      <p> Utilize suas credenciais para efetuar o login. </p>
                      <FormGroup>
                        <Label className="col-form-label"> E-mail </Label>
                        <Input className="form-control" type="email" onChange={e => {
                            setForm({...form, email: e.target.value});
                        }}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label"> Senha </Label>
                        <Input className="form-control" type="password" onChange={e => {
                            setForm({...form, password: e.target.value});
                        }}/>
                      </FormGroup>
                      <Row className="mb-2">
                        <Col md="12">
                          <a className="pull-right" href="#javascript">
                            Esqueci minha senha
                          </a>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col md="12">
                          <div className="form-group mt-3">
                            <Button color="primary" className="btn-block" disabled={loading}>
                              {loading ? "Aguarde..." : "Login"}
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const estadoProps = ({Auth}) => {
  const { loading } = Auth;
  return { loading }
}

export default connect(estadoProps, {
  ReqLogin,
})(Login);
