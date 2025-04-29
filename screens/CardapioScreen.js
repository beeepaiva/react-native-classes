import { View, Text, SectionList, StyleSheet, SafeAreaView } from 'react-native';

import Header from '../components/Header'
import Footer from '../components/Footer'
import {styles} from '../components/styles';

export default function Cardapio() {
const cardapio = [
    {
      title: 'Tradicionais',
      data: [
        { nome: 'Mussarela', preco: 'R$ 35,00' },
        { nome: 'Calabresa', preco: 'R$ 37,00' },
      ],
    },
    {
      title: 'Especiais',
      data: [
        { nome: 'Portuguesa', preco: 'R$ 42,00' },
        { nome: 'Dois queijos', preco: 'R$ 44,00' },
        { nome: 'Pepperoni', preco: 'R$ 46,00' },
      ],
    },
    {
      title: 'Doces',
      data: [
        { nome: 'Chocolate com Morango', preco: 'R$ 39,00' },
        { nome: 'Banana com Canela', preco: 'R$ 36,00' },
      ],
    },
  ];

  const Item = ({nome}) =>{
    return(
      <View>
      <Text style={style.itensLista}>
        {nome}
      </Text>
      </View>
    )
  }
  
  const funcaoRenderItem = ({item}) => <Item nome={item.nome}/>
  
  const renderSectionHeader = ({section: {title}}) => (
     <Text style={style.headerLista}>{title}</Text>
     )
  const Separador = () => <View style={style.separadorLista}/>
  
    return (
      <SafeAreaView style={{flex: 1, padding: 20}}>
      <Header/>
       <View style={{flex: 0.5, padding: 20}}>
        <SectionList
          sections={cardapio}
          renderItem={funcaoRenderItem}
          ItemSeparatorComponent={Separador}
          renderSectionHeader={renderSectionHeader}></SectionList>
      </View>
      </SafeAreaView>
    );
  }
  
  const style = StyleSheet.create({
    headerLista:{
      fontWeight: 'bold',
      color:"white",
      padding: 4,
      backgroundColor: '#E97132'
    },
    itensLista:{
      fontWeight: 'bold',
      padding: 4,
      borderBottomColor: '#E97132',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    separadorLista:{
      borderBottomWidth:1,
      borderColor: "orange"
    }
  })