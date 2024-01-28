import { View,Text, Pressable,Image,StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function MealItem({title ,imageUrl , duration,complexity,affordability }){
    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}
            style={({pressed})=> (pressed ? styles.buttonPressed : null)}
            >
            <View>
                <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:"hidden",
        backgroundColor:'white',
        elevation:4
    },
    buttonPressed:{
        opacity:0.5,
    },
    image:{
        width:'100%',
        height:200,
    },
    title:{
        margin:8,
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18
    },
    detail:{
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
        padding:8
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
        fontWeight:'500'
    }
});