
let productos = [
    {id:'1', categoria:'Malla', name:'Malla1', precio:1500, imagen:'https://www.pngegg.com/es/png-wtcbb'},
    {id:'3', categoria:'Malla', name:'Malla2', precio:4500, imagen:'../imagenes/Mallahombre2.png'},
    {id:'3', categoria:'Remera', name:'Remera', precio:4500, imagen:'../imagenes/Remerahombre1.png'},
   
  
  
  
  
  ];

  export const gFetch = new Promise( ( resolve, reject ) => {
    let condition = true
    if(condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    }else {
        reject('400 not found')
    }
  })