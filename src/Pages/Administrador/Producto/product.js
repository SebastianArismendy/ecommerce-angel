import React, { useEffect, useState } from "react";
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  NumberField,
  ImageField,
  ImageInput,
  EditButton,
  DeleteButton,
  TextInput,
  NumberInput,
  SearchInput,
  ReferenceField,
  ReferenceInput,
  SimpleForm 
} from "react-admin";


const filters = [
  <SearchInput placeholder="Buscar" source="q" alwaysOn/>
  // <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const ProductList = (props) => {
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
          <TextField source="nombre_producto" />
          <EditButton basePath='/Productos' />
          <DeleteButton basePath='/Productos' />
      </Datagrid>
  ) : (
        <Datagrid  rowClick="edit">
          <TextField source="id" />
          <TextField source="nombre_producto" />
          <ImageField source="images" src="src" title="title"/>
          <NumberField source="precio" />
          <NumberField source="stock" />
          <ReferenceField source="categoryId" reference="categorias" />
          <EditButton basePath='/Productos' />
          <DeleteButton basePath='/Productos' />
        </Datagrid>
  )}
  </List>
};

export const ProductCreate = (props) => {
  return    <Create {...props}>
  <SimpleForm>
    <TextInput source="nombre_producto" />
    <ImageInput source="images" label="Imagenes del producto" accept="image/*">
        <ImageField source="src" title="title" />
    </ImageInput>
    <NumberInput  source="precio" />
    <NumberInput  source="stock" />
    <ReferenceInput  source="categoryId" reference="categorias" />
  </SimpleForm>
</Create>
};

export const ProductEdit = (props) => {

  return    <Edit {...props}>
  <SimpleForm>
    <TextInput source="id" disabled/>
    <TextInput source="nombre_producto" />
    <ImageInput source="images" label="Imagenes del producto" accept="image/*" multiple>
        <ImageField source="src" title="title" />
    </ImageInput>
    <NumberInput  source="precio" />
    <NumberInput  source="stock" />
    <ReferenceInput  source="categoryId" reference="categorias" />
  </SimpleForm>
</Edit>
};


