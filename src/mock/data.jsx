export const productosDB = [
    {
        name:'Samsung Galaxy A15',
        stock: 5,
        price: 329999,
        description: 'Pantalla súper vívida y brillante.',
        img: '/samsung_galaxy_a15.webp',
        category: 'celulares'
    },
    {
        name:'Motorola Moto G24',
        stock: 7,
        price: 315999,
        description: 'Pantalla brillante de 6.6" y 90 Hz1 con sonido Dolby Atmos®',
        img: '/motorola_g24.webp',
        category: 'celulares'
    },
    {
        name:'Motorola Razr',
        stock: 4,
        price: 1299999,
        description: 'Diseño exclusivo con pantalla flexible de 6.9” y bisagra “gota” sin espacios entre sus lados.',
        img: '/motorola_razer.webp',
        category: 'celulares'
    },
    {
        name:'Auriculares MotoBud',
        stock: 25,
        price: 74999,
        description: 'Mayor Duración de Bateria.',
        img: '/moto_bud.webp',
        category: 'accesorios'
    },
    {
        name:'Auriculares Galaxy Buds Color Grafito',
        stock: 15,
        price: 144200,
        description: 'Descubre la excelencia en sonido con los Galaxy Buds Fe Color Grafito, una creación de la reconocida marca Samsung.',
        img: '/samsung_buds.webp',
        category: 'accesorios'
    },
    {
        name:'Cargador Inalambrico Celular Con Parlante',
        stock: 20,
        price: 27840,
        description: 'Novedosa Lampara 3 en 1, Iluminacion + Base de Carga + Parlante.',
        img: '/cargador.webp',
        category: 'accesorios'
    },
    {
        name:'SmartWatch K37 Gps Negro',
        stock: 6,
        price: 110000,
        description: 'El SmartWatch se vincula con la app "InfoWear", la misma se encuentra disponible tanto para android como iOS.',
        img: '/smart1.webp',
        category: 'articulos varios'
    },
    {
        name:'Smartwatch Redmi Watch 5 Active Blanco',
        stock: 3,
        price: 85000,
        description: 'Los datos del ritmo cardíaco en tiempo real las 24hs son más precisos con el sensor mejorado. Puedes revisar los cambios en el ritmo cardíaco mediante el reloj y el teléfono móvil.',
        img: '/smart2.webp',
        category: 'articulos varios'
    },
    {
        name:'Smartwatch HK10 Ultra 3 Wifi Plateado',
        stock: 7,
        price: 130000,
        description: 'Una de las mayores virtudes que presenta este modelo es la posibilidad de escuchar música sin necesidad de llevar tu celular en la mano.',
        img: '/smart3.webp',
        category: 'articulos varios'
    }
]

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente nuevamente')
            }else{
                resolve(productosDB)
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
                let onProduct = productosDB.find((item)=> item.id === id)
                resolve(onProduct)
            }
        },2000)
    })
}