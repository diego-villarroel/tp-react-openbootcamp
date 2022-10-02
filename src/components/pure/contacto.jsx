import React from "react";
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({contacto}) => {
    return(
        <div class="card m-3">
            <div class="card-body text-primary">
                <h6>Nombre: {  contacto.nombre }</h6>
                <h6>Apellido: {  contacto.apellido }</h6>
                <h6>Email: {  contacto.email }</h6>
                <h6 class={ contacto.conectado ? "text-success" : "text-danger"}>Conectado: {  contacto.conectado ? 'Contacto en Linea' : 'Contacto No Disponible'}</h6>
            </div>
        </div>
    )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf( Contacto )
}

export default ContactoComponent;