// CALLBACK

// import chalk from "chalk";

// function fetchData(callback){
//     setTimeout(() => {
//         const data = {id: 1, name: "Producto 1"};
//         callback(data)
//     }, 2000)
// }

// function handleData(data){
//     console.log("Datos: ", data)
// }

// fetchData(handleData);

// PROMESAS

// function fetchData2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = {id: 1, name: "Producto 1"};
//             if(data){
//                 resolve(data)
//             }else{
//                 reject("No se pudo obtener la informacion")
//             }
//         }, 2000)
//     })
// }

// fetchData2()
//     .then(data => {
//         console.log("datos recibidos: ", data)
//     })
//     .catch(error => {
//         console.log("error: ", error)
//     })



// SINTACTIC SUGAR

const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(function(numero){
    return numero * 2;
})
console.log(dobles)


const numeros2 = [1, 2, 3, 4, 5];
const dobles2 = numeros2.map(numero => numero * 2)
console.log(dobles2)

// ASYNC/AWAIT FUNCTIONS

function fetchData2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {id: 1, name: "Producto 1"};
            if(data){
                resolve(data)
            }else{
                reject("No se pudo obtener la informacion")
            }
        }, 2000)
    })
}

async function handleData(){
    try{
        const data = await fetchData2();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

// console.log(chalk.blue.bgWhite("nodemon"))
// console.log(chalk.bgMagenta.bold("nodemon"))
// console.log(chalk.green("nodemon"))

// https://www.npmjs.com/package/chalk

require('dotenv').config()

const clave = process.env.CLAVE;

console.log("holi desde github")

// https://git-scm.com/
