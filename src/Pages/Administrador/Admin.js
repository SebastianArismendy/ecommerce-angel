import React, {useEffect} from 'react';
import { Admin, Resource } from 'react-admin';
import {ClientList,ClientEdit,ClientCreate} from './Cliente/Client'
import {DirectionList,DirectionCreate,DirectionEdit} from './Direccion/Direction'
import {ProductList,ProductCreate,ProductEdit} from './Producto/product'

import { MdSupervisorAccount,MdDirections,MdCategory,MdAllInbox } from 'react-icons/md';
import { AiTwotoneTags,AiTwotoneNotification,AiTwotoneTag } from "react-icons/ai";
import fakeDataProvider from 'ra-data-fakerest';

const dataProvider = fakeDataProvider({
  clientes: [ { 
     id: 1,
     nombre: "Sebastian Arismendy", 
     numero_documento: 1000754923 ,
     tipo_documento: 'CC',
     correo_electronico: "sebax1502@gmail.com",
     numero_celular: "3045864289"
    },
    { 
      id: 2,
      nombre: "Jeferson Arismendy", 
      numero_documento: 1000754924 ,
      tipo_documento: 'CC',
      correo_electronico: "gemelo1502@gmail.com",
      numero_celular: "3045864289"
     } 
  ],
  direcciones: [
    { 
      id: 1,
      direccion: "Calle 85a 51b-58", 
      ciudad: "Medellín" ,
      departamento: "Antioquia",
      pais: "Colombia",
      clienteId: 1
     },
     { 
      id: 2,
      direccion: "Calle 85a 51b-58", 
      ciudad: "Medellín" ,
      departamento: "Antioquia",
      pais: "Colombia",
      clienteId: 2
     }
  ],
  productos: [
    { 
      id: 1,
      nombre_producto: "Pantalon negro", 
      images: [
          {
              title: 'pantalon atrás',
              src: 'https://tiendakalendar.vteximg.com.br/arquivos/ids/350675-1400-2147/PANTALON-KALENDAR-PLSH083-4R12C-NNEGROO_2.jpg?v=638028478943700000',
          },
          {
              title: 'pantalon frente',
              src: 'https://tiendakalendar.vteximg.com.br/arquivos/ids/350674-1400-2147/PANTALON-KALENDAR-PLSH083-4R12C-NNEGROO_1.jpg?v=638028478937700000',
          },
      ],
      precio: 7500,
      stock: 1000,
      categoryId: 1
     }
  ],
  categorias: [
    { 
      id: 1,
      nombre_categoria: "Pantalón"
     }
  ],
})


const App = () => {

    useEffect(() => {
      document.getElementsByClassName("navbar-expand-md")[0].style.display = 'none'
    }, []);

    return (
      <div style={{marginTop: '76px'}}>
        <Admin dataProvider={dataProvider}>
          {/* <Resource name="Ventas" icon={AiTwotoneTag} list={ClientList} edit={ClientEdit} create={ClientCreate} /> */}
          <Resource name="clientes" icon={MdSupervisorAccount} list={ClientList} edit={ClientEdit} create={ClientCreate} recordRepresentation="correo_electronico"/>
          <Resource name="direcciones" icon={MdDirections}  list={DirectionList} edit={DirectionEdit} create={DirectionCreate}  />
          <Resource name="productos" icon={AiTwotoneTags} list={ProductList} edit={ProductEdit} create={ProductCreate} />
          <Resource name="categorias" icon={MdCategory} list={ClientList} edit={ClientEdit} create={ClientCreate} recordRepresentation="nombre_categoria"/>
          {/* 
          
          <Resource name="Promociones" icon={AiTwotoneNotification} list={ClientList} edit={ClientEdit} create={ClientCreate} />
          <Resource name="Proovedores" icon={MdAllInbox} list={ClientList} edit={ClientEdit} create={ClientCreate} /> */}
        </Admin>
      </div>

    );
};

export default App;