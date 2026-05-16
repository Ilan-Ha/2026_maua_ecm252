import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({imgStyle, photos}) => {
  return (
    photos.map((photos, key) => (
        <Imagem
            imgStyle={imgStyle}
            key={key}
            src={photos.src.small}
            alt={photos.alt}
        />
    ))
  )
}

export default ListaImagens