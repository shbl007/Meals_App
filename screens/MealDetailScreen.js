import { View,Image,Text ,StyleSheet} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetails";

function MealDetailScreen({route}){
    const mealId=route.params.mealId;

    const selectedMeal = MEALS.find((meal) =>meal.id === mealId);

    return(
    <View>
    <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
    <Text style={styles.title}>{selectedMeal.title}</Text>
    <View>
        <MealDetail duration={selectedMeal.duration} 
         complexity={selectedMeal.complexity} 
         affordability={selectedMeal.affordability}/>
    </View>
    <Text>Ingredients:- </Text>
    {selectedMeal.ingredients.map((ingredient)=>(
        <Text key={ingredient}> {ingredient}</Text>
    ))}
    <Text>Steps:-</Text>
     {selectedMeal.steps.map((step)=>(
        <Text key={step}> {step}</Text>
    ))}

    </View>
    );
}

export default MealDetailScreen;

const styles=StyleSheet.create({
    image:{
        width:"100%",
        height:350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin: 8,
        textAlign:'center'
    }
});