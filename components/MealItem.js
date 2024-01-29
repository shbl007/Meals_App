import { View,Text, Pressable,Image,StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetails";

function MealItem({id, title ,imageUrl , duration,complexity,affordability }){
   const navigation =useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {
         mealId : id
        });

    }

    
    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}
            style={({pressed})=> (pressed ? styles.buttonPressed : null)}
            onPress={selectMealItemHandler}
            >
            <View>
                <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetail duration={duration}
             affordability={affordability}
             complexity={complexity}/>
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
});