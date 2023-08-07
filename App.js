import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';

export default function App() {
  return(
    <View>
      <Card
        title={'Porsche 911 GT3 RS'}
        content={`  O desempenho máximo exige mais do que condições perfeitas e sorte. A vontade de tornar-se mais rápido e forte a cada sessão de treino é decisiva. Questionando tudo, especialmente a si mesmo. Para aumentar ainda mais o desempenho nos circuitos - graças à incrível downforce e à leveza de toda a estrutura. Experimente o novo 911 GT3 RS em sua melhor forma.`}
        imageUrl={require('./img/porsche.jpg')}
      />
    </View>
  );
}
