
let producto2 = [
    {id:'1', categoria:'Malla', name:'Malla1', precio:1500, imagen:'https://www.opensports.com.ar/media/catalog/product/cache/25e89759b69d23d0ee436c9ddbb4ede0/1/6/164522_0.jpg'},
    {id:'3', categoria:'Malla', name:'Malla2', precio:4500, imagen:'https://http2.mlstatic.com/D_NQ_NP_848003-MLA26019518991_092017-O.webp'},
    {id:'3', categoria:'Remera', name:'Remera', precio:4500, imagen:'https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg'},
    
];

export const gFetch2 = new Promise( ( resolve, reject ) => {
    let condition = true
    if(condition) {
        setTimeout(()=>{
            resolve(producto2)
        }, 2000)
    }else {
        reject('400 not found')
    }
})