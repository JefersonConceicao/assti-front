import React, { useState, useRef } from "react";
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { Container, Row, Col, Form, FormGroup,Input, Label, Button,} from "reactstrap";
//Validator
import { validatorMessages } from "../../components/validatorMessages";
//ACTIONS
import { ReqLogin } from '../../redux/actions';

const Login = ({
  ReqLogin,
  loading
}) => {
  const [, forceUpdate] = useState();
  const simpleValidator = useRef(new SimpleReactValidator({
    forceUpdate: forceUpdate,
    ...validatorMessages
  })).current;

  const [form, setForm] = useState({
    usu_nom_login: "",
    usu_num_senha: "",
  });

  const submitFormLogin = (e) => {
    e.preventDefault();
    if(simpleValidator.allValid()){
      ReqLogin(form);
    }
  }

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
                        <Input
                          className="form-control"
                          name="usu_nom_login" 
                          type="email" 
                          value={form.usu_nom_login}
                          onChange={e => {
                            setForm({ ...form, usu_nom_login: e.target.value });
                            simpleValidator.showMessageFor("usu_nom_login")
                          }}
                        />
                        <Label className="text-danger"> 
                          {simpleValidator.message('usu_nom_login', form.usu_nom_login, 'required|email')} 
                        </Label>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label"> Senha </Label>
                        <Input 
                          name="usu_num_senha"
                          value={form.usu_num_senha}
                          className="form-control" 
                          type="password" 
                          onChange={e => {
                            setForm({ ...form, usu_num_senha: e.target.value });
                            simpleValidator.showMessageFor("usu_num_senha");
                          }}
                        />
                        <Label className="text-danger">
                          {simpleValidator.message('usu_num_senha', form.usu_num_senha, 'required')} 
                        </Label>
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

const estadoProps = ({ Auth }) => {
  const { loading } = Auth;
  return { loading }
}

export default connect(estadoProps, {
  ReqLogin,
})(Login);
