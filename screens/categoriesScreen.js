import { useState } from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){ 
        function pressHandler(){
            navigation.navigate('MealDetails' , {
                categoryId:itemData.item.id,
            });
    
        }
    
    
        return (
        <CategoryGridTile title={itemData.item.title} 
        color={itemData.item.color}
        onPress={pressHandler}/>
        );
    }
    
    const [numColumns, setNumColumns] = useState(2);

    const keyExtractor = (item) => `${item.id}_${numColumns}`;

    return <FlatList 
    data={CATEGORIES}
    keyExtractor={(item)=> item.id} 
    renderItem={renderCategoryItem}
    numColumns={numColumns}
    />
}

export default CategoriesScreen;