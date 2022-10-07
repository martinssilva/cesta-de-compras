import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';

import Texto from '../../../components/Texto';

//dimensionando a imagem
const width = Dimensions.get('screen').width;

export default function Topo({ tituloPrincipal, fotoTopo }){


  return(
    <>
      <Image source={fotoTopo} style={estilos.topo} />
      <Texto style={estilos.tituloPrincipal}>
        {tituloPrincipal}
      </Texto>
    </>
  )
}

const estilos = StyleSheet.create({
  topo:{
    width: '100%',
    height: 578 / 768 * width, // alturaImagem / larguraImagem * larguraTela
  },
  tituloPrincipal:{
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 20,
    color:"#FFFFFF",
    fontWeight: "bold",
    padding: 16,
  },
})
