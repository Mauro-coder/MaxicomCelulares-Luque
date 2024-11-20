const productos = [
    {
        id:'xiaomi_note',
        name:'Xiaomi Redmi Note 13',
        stock: 10,
        price: 275000,
        description: 'Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo.',
        Img: '/xiaomi_redmi_note.webp',
        category: 'celulares'
    },
    {
        id:'samsung_galaxy',
        name:'Samsung Galaxy A15',
        stock: 5,
        price: 329999,
        description: 'Pantalla súper vívida y brillante.',
        Img: '/samsung_galaxy_a15.webp',
        category: 'celulares'
    },
    {
        id:'motorola_g24',
        name:'Motorola Moto G24',
        stock: 7,
        price: 315999,
        description: 'Pantalla brillante de 6.6" y 90 Hz1 con sonido Dolby Atmos®',
        Img: '/motorola_g24.webp',
        category: 'celulares'
    },
    {
        id:'moto_razr',
        name:'Motorola Razr',
        stock: 4,
        price: 1299999,
        description: 'Diseño exclusivo con pantalla flexible de 6.9” y bisagra “gota” sin espacios entre sus lados.',
        Img: '/motorola_razer.webp',
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
        },3000)
    })
}

