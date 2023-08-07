import { Image, StyleSheet, Text, View } from "react-native";

const Card = ({title, content, imageUrl}) => {

    const styles = StyleSheet.create({
        body:{
            height:'100%',
            width:'100%',
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#112'
        },
        titleText:{
            fontSize:45,
            color:'#f00'
        },
        menuText:{
            paddingTop:12,
            fontSize:15,
            width: 350,
            textAlign: 'justify',
            color:'white'
        },
        image:{
            marginTop: 30,
            height: 190,
            width: 350,
            borderRadius: 23
        }
    })

    return (
        <View style={styles.body}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.menuText}>{content}</Text>
            <Image style={styles.image} source={imageUrl}/>
        </View>
    );
}

export default Card;