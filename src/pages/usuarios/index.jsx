import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    FormGroup,
    Label,
    Form,
    Input,
    Button,
    CardHeader,
} from 'reactstrap';
import { Edit, Trash, Search } from 'react-feather'
import { connect } from 'react-redux'
import Breadcrumb from '../../layout/breadcrumb';
import Loading from '../../components/loading';

import { RequestGetUsuarios } from '../../redux/usuarios/actions';

const Usuarios = ({
    loadingUsuarios,
    RequestGetUsuarios,
    dataUsuarios
}) => {
    const [formSearch, setFormSearch] = useState({
        usu_nom_usuario: "",
        usu_nom_login: "",
    })

    const handleSubmitFormSearch = (e) => {
        e.preventDefault()
        RequestGetUsuarios(formSearch);
    }

    useEffect(() => {
        RequestGetUsuarios();
    }, [])
    return (
        <>
            <Breadcrumb parent="Home" title="Usuários" />
            <Container fluid={true}>
                <Row>
                    <Col md="12">
                        <Card>
                            <Form className="form" onSubmit={handleSubmitFormSearch}>
                                <CardBody>
                                    <h5> Filtro </h5>
                                    <Row>
                                        <Col md="3">
                                            <FormGroup>
                                                <Label htmlFor="inputSearchNome"> Nome </Label>
                                                <Input name="usu_nom_usuario" onChange={e => {
                                                    setFormSearch({ ...formSearch, usu_nom_usuario: e.target.value })
                                                }} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="3">
                                            <FormGroup>
                                                <Label htmlFor="inputSearchLogin"> Login </Label>
                                                <Input name="usu_mom_login" onChange={e => {
                                                    setFormSearch({ ...formSearch, usu_nom_login: e.target.value })
                                                }} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Button color="primary" size='sm' type="submit">
                                                <Search size={12} /> Pesquisar
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                {loadingUsuarios ?
                                    <Loading />
                                    :
                                    <>
                                        <Row>
                                            <Col md="12" className="mb-3">
                                                <Button color="primary" className="float-right">
                                                    Novo
                                                </Button>
                                            </Col>
                                        </Row>
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th> Nome </th>
                                                    <th> Login </th>
                                                    <th> Ultimo acesso </th>
                                                    <th> Status </th>
                                                    <th width="2%"> Ações </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!!dataUsuarios.length && dataUsuarios.map((value, index) => (
                                                    <tr key={index}>
                                                        <td> {value.usu_nom_usuario} </td>
                                                        <td> {value.usu_nom_login} </td>
                                                        <td> {!!value.usu_dat_ultimo_acesso ? value.usu_dat_ultimo_acesso : "Não informado"} </td>
                                                        <td>
                                                            <Badge color={value.usu_flg_ativo ? "primary" : "secondary"}>
                                                                {value.usu_flg_ativo ? "Ativo" : "Inativo"}
                                                            </Badge>
                                                        </td>
                                                        <td>
                                                            <div className="btn-showcase" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <a href="#">
                                                                    <Edit />
                                                                </a>
                                                                <a href="#">
                                                                    <Trash color='red' />
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToPros = ({ Usuarios }) => {
    const { loadingUsuarios, dataUsuarios } = Usuarios;
    return {
        loadingUsuarios,
        dataUsuarios
    }
}

export default connect(mapStateToPros, {
    RequestGetUsuarios,
})(Usuarios)

