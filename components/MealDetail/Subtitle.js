import { Children } from "react";
import { Text,StyleSheet } from "react-native";

function Subtitle({children}){
    return(
        <Text style={styles.subTitle}>{children} </Text>
    );

}

export default Subtitle;

const styles=StyleSheet.create({
    subTitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:12,
        marginVertical:4,
        padding:6,
        textAlign:'center',
        borderBottomColor:'#e2b497',
        borderBottomWidth: 2
    },
});