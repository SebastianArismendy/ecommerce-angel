import React, { useEffect, useState } from "react";
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  TextInput,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  SimpleForm,
  useRecordContext
} from "react-admin";


const filters = [
  <SearchInput placeholder="Buscar" source="q" resettable alwaysOn/>,
  <ReferenceInput label="Cliente"  source="clienteId" reference="client" />
];


export const DirectionList = (props) => {
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

  return   <List filters={filters} {...props}>
  {isMobile ? ( 
      <Datagrid rowClick="edit">
          <TextField source="direccion" />
          <TextField source="ciudad" />
          <EditButton basePath='/Direcciones' />
          <DeleteButton basePath='/Direcciones' />
      </Datagrid>
  ) : (
        <Datagrid rowClick="edit" >
          <TextField source="id" />
          <TextField source="direccion" />
          <TextField source="ciudad" />
          <TextField source="departamento" />
          <TextField source="pais" />
          <ReferenceField source="clienteId" reference="clientes" />
          <EditButton basePath='/Direcciones' />
          <DeleteButton basePath='/Direcciones' />
        </Datagrid>
  )}
  </List>
};

export const DirectionCreate = (props) => {
  return    <Create {...props}>
  <SimpleForm>
    <TextInput source="direccion" />
    <TextInput  source="ciudad" />
    <TextInput source="departamento"/>
    <TextInput source="pais"/>
    <ReferenceInput  source="clienteId" reference="clientes" />
  </SimpleForm>
</Create>
};

export const DirectionEdit = (props) => {

  return    <Edit {...props}>
<SimpleForm>
    <TextInput source="id" disabled/>
    <TextInput source="direccion" />
    <TextInput  source="ciudad" />
    <TextInput source="departamento"/>
    <TextInput source="pais"/>
    <ReferenceInput  source="clienteId" reference="clientes" />
  </SimpleForm>
</Edit>
};


