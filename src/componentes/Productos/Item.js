import './Item.css'
const Item = ({imagen, nombre, precio, desc}) => {
    return(
        
        <div className='carta'>
            <h3 className='color'>{nombre}</h3>
            <img className='medidasimg' src={imagen} alt={desc}></img>
            <p className='color'>{precio}</p>
            <button>detalles</button>
        </div>
        
    )
}
export default Item