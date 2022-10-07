import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native' ;

import Texto from '../../../components/Texto';
import Botao from './Botao';

export default function Detalhes({tituloView, logoFazenda, nomeFazenda, descricao, preco, botao}){
  return(
    <>

      <Texto style={estilos.tituloView}>{tituloView}</Texto>

      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>

      <Botao>{botao}</Botao>

    </>
  )
}

const estilos = StyleSheet.create({
  tituloView:{
    color: '#464646',
    fontSize: 26,
    lineHeight: 46,
    fontWeight: "bold",
    //fontFamily: "MontserratBold",
  },
  fazenda:{
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imagemFazenda:{
    width: 32,
    height: 32,
    marginRight: 12,
  },
  nomeFazenda:{
    fontSize: 16,
    lineHeight: 26,
    //fontFamily: "MontserratRegular",
  },
  descricao:{
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight:26,
  },
  preco:{
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
  },
})