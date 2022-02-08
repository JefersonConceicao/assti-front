import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Breadcrumb from '../../layout/breadcrumb';

const Usuarios = () => {
    useEffect(() => {

    }, []);
    return (
        <>
            <Breadcrumb parent="Home" title="Usuários"/>
            <Container fluid={true}>
                <Row> 
                    <Col sm="12">
                        <Card> 
                            <CardHeader> <h5> Gerenciamento de Usuários </h5> <span> Lista de usuários ativos.</span> </CardHeader>
                            <CardBody> 
                                
                            </CardBody>
                        </Card> 
                    </Col>          
                </Row> 
            </Container>
        </>
    )
}

export default Usuarios

