import AnimalsOne from "../images/ConcentradoDos.jpg";
import AnimalsTwo from "../images/ConcentradoUno.jpg";
import AnimalsThree from "../images/ConcentradoCuatro.jpg";
import AnimalsFour from "../images/ConcentradoTres.jpg";
import AnimalsFive from "../images/ConcentradoCinco.jpg";
import AnimalsSix from "../images/ConcentradoSiete.jpg";
import AnimalsSeven from "../images/ConcentradoDiez.jpg";
import AnimalsEigth from "../images/ConcentradoOcho.png";
import AnimalsNine from "../images/ConcentradoOnce.jpg";
import { useEffect } from "react";

//Lista de productos

//Base de datos de los productos que se ofrecen en formato Json
const dataBase = [
    {
        id: 1,
        nombre: 'Chunky Cachorros Cordero',
        descripcion: 'Alimento Completo y Balaceado para tu pequeño cachorro',
        precio: 40000,
        imagen: AnimalsOne,
        cantidad: 5
    },
    {
        id: 2,
        nombre: 'Chunky Cachorro Pollo Raza Grande',
        descripcion: 'Alimento Completo y Balaceado para tu pequeño cachorro',
        precio: 60000,
        imagen: AnimalsTwo,
        cantidad: 5
    },
    {
        id: 3,
        nombre: 'Chunky Adulto Pequeño',
        descripcion: 'Alimento Completo y Balaceado para tu pequeño Adulto',
        precio: 35000,
        imagen: AnimalsThree,
        cantidad: 5
    },
    {
        id: 4,
        nombre: 'Mamá y Cachorro',
        descripcion: 'Pensando en la importancia de la nutrición en los primeros 4 meses de vida de los cachorros',
        precio: 70000,
        imagen: AnimalsFour,
        cantidad: 5
    },
    {
        id: 5,
        nombre: 'Adultos Piel',
        descripcion: 'Agility Gold Piel es un producto diseñado para nutrir la piel y pelaje de perros adultos',
        precio: 80000,
        imagen: AnimalsFive,
        cantidad: 5
    },
    {
        id: 6,
        nombre: 'Adultos Obesos',
        descripcion: 'Sabemos que el sobrepeso y la obesidad son condiciones que afectan la salud y la calidad de vida',
        precio: 100000,
        imagen: AnimalsSix,
        cantidad: 5
    },
    {
        id: 7,
        nombre: 'Gatos Adulto Pollo',
        descripcion: 'Es un alimento ideal para gatos adultos que contribuye nutrientes necesarios para su vida diaria.',
        precio: 30000,
        imagen: AnimalsSeven,
        cantidad: 5
    },
    {
        id: 8,
        nombre: 'Gatitos',
        descripcion: 'Es una línea de alimentos súper premium, perfecto para controlar las bolas de pelo de tu gato',
        precio: 40000,
        imagen: AnimalsEigth,
        cantidad: 5
    },
    {
        id: 9,
        nombre: 'Gatitos Pollo',
        descripcion: 'Linea de pollo para gatitos. Ideal también para hembras en etapa de gestación y Lactancia.',
        precio: 45000,
        imagen: AnimalsNine,
        cantidad: 5
    }
];

function Products() {
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(response => response.json()).then(data => console.log(data)).catch(e => console.log(e))
    }, [])
}


export { dataBase, Products };