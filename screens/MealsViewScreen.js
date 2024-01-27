import { View,Text,StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsViewScreen({route}){

   const catId = route.params.categoryId;

return(
        <View style={styles.container}>
            <Text>Meals Overview Screen -{catId}</Text>
        </View>
);
}

export default MealsViewScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    },


});