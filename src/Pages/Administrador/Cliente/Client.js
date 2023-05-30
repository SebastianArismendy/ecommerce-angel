import React, { useEffect, useState } from "react";
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  TextInput,
  NumberInput,
  SelectInput,
  SearchInput,
  SimpleForm 
} from "react-admin";

const tipoDocumento = [
  { id: "CC", name: "Cedula" },
  { id: "CE", name: "Cedula extrangeria" },
  { id: "TI", name: "Tarjeta identidad" },
];

const filters = [
  <SearchInput placeholder="Buscar" source="q" alwaysOn/>
  // <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const postRowStyle = (record, index) => ({
  backgroundColor: record.nb_views >= 500 ? '#efe' : 'white',
});

export const ClientList = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    const mobileWidthThreshold = 768; // Umbral de anchura para dispositivos móviles

    setIsMobile(window.innerWidth < mobileWidthThreshold);
  };

  useEffect(() => {
    // Verificar si es móvil en el montaje inicial del componente
    checkIfMobile();
    // Agregar un listener para actualizar la detección si la ventana cambia de tamaño
    window.addEventListener('resize', checkIfMobile);
    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return   <List filters={filters}   {...props}>
  {isMobile ? ( 
      <Datagrid  rowClick="edit">
          <TextField source="numero_documento" />
          <EmailField source="correo_electronico" />
          <EditButton basePath='/Clientes' />
          <DeleteButton basePath='/Clientes' />
      </Datagrid>
  ) : (
        <Datagrid  rowClick="edit">
          <TextField source="id" />
          <TextField source="nombre" />
          <TextField source="numero_documento" />
          <TextField source="tipo_documento" />
          <EmailField source="correo_electronico" />
          <TextField source="numero_celular" />
          <EditButton basePath='/Clientes' />
          <DeleteButton basePath='/Clientes' />
        </Datagrid>
  )}
  </List>
};

export const ClientCreate = (props) => {
  return    <Create {...props}>
  <SimpleForm>
    <TextInput source="nombre" />
    <NumberInput  source="numero_documento" />
    <SelectInput source="tipo_documento" choices={tipoDocumento} />
    <TextInput source="correo_electronico" />
    <NumberInput  source="numero_celular" />
  </SimpleForm>
</Create>
};

export const ClientEdit = (props) => {

  return    <Edit {...props}>
  <SimpleForm>
    <TextInput source="id" disabled/>
    <TextInput source="nombre" />
    <NumberInput  source="numero_documento" />
    <SelectInput source="tipo_documento" choices={tipoDocumento} />
    <TextInput source="correo_electronico" />
    <NumberInput  source="numero_celular" />
  </SimpleForm>
</Edit>
};


