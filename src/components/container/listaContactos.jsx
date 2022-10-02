import React from "react";
import { Contacto } from "../../models/contacto.class";
import ContactoComponent from "../pure/contacto";

const ListaContactoComponente = () => {
    const defaultListaContactos = new Contacto('Diego','Villarroel','diego.n.villarroel@gmail.com',true);

    const defaultListaContactos2 = new Contacto('Anlly','Salazar','anllySalazar@gmail.com',false);

    return (
        <div>
            <ContactoComponent contacto={defaultListaContactos}></ContactoComponent>
            <ContactoComponent contacto={defaultListaContactos2}></ContactoComponent>
        </div>
    )
};

export default ListaContactoComponente;