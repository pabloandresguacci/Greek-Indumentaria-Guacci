import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {gFetch2} from '../../fetch/getFetch2'

const ItemDetailContainer = () => {

    let param = useParams().id

    const [product,setProduct] = useState({})

    useEffect(() => {
        setTimeout(() => {
              gFetch2
              .then(resp => setProduct(resp))
            .catch( err => console.log(err))
          }, 2000);
    }, [param])
    

  return (
    <>
        <ItemDetail product={product}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer