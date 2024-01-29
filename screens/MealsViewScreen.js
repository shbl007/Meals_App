import { View,Text,StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsViewScreen({route , navigation }){

   const catId = route.params.categoryId;

   const displayedMeals =  MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >=0;
   });

   useLayoutEffect(()=>{
    const categoryTile= CATEGORIES.find(
        (category)=> category.id === catId
        ).title;

   navigation.setOptions({
    title: categoryTile
   });

   },[catId,navigation ]);

   
   function renderMealItem(itemData){

    const item = itemData.item;

    const mealItemProp ={
        id: item.id,
        title : item.title,
        imageUrl:item.imageUrl,
        duration:item.duration,
        complexity:item.complexity,
        affordability:item.affordability
        
    };
 
    return(
    <MealItem {...mealItemProp}/>
    );
   }

return(
        <View style={styles.container}>
         <FlatList data={displayedMeals}
          keyExtractor={(item)=> item.id}
          renderItem={renderMealItem}/>
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