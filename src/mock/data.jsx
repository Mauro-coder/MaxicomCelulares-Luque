const productos = [
    {
        id:'1',
        name:'Xiaomi Redmi Note 13',
        stock: 10,
        price: 275000,
        description: 'Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo.',
        img: '/xiaomi_redmi_note.webp',
        category: 'celulares'
    },
    {
        id:'2',
        name:'Samsung Galaxy A15',
        stock: 5,
        price: 329999,
        description: 'Pantalla súper vívida y brillante.',
        img: '/samsung_galaxy_a15.webp',
        category: 'celulares'
    },
    {
        id:'3',
        name:'Motorola Moto G24',
        stock: 7,
        price: 315999,
        description: 'Pantalla brillante de 6.6" y 90 Hz1 con sonido Dolby Atmos®',
        img: '/motorola_g24.webp',
        category: 'celulares'
    },
    {
        id:'4',
        name:'Motorola Razr',
        stock: 4,
        price: 1299999,
        description: 'Diseño exclusivo con pantalla flexible de 6.9” y bisagra “gota” sin espacios entre sus lados.',
        img: '/motorola_razer.webp',
        category: 'celulares'
    }
]

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente nuevamente')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

export const getOneProduct = (id) =>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let onProduct = productos.find((item)=> item.id === id)
                resolve(onProduct)
            }
        },2000)
    })
}