import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-contex';
import { MEALS } from '../data/dummy-data';
import { StyleSheet ,View, Text } from 'react-native';

function FavScreen() {

  const favoriteMealsContext =useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal =>
     favoriteMealsContext.ids.includes(meal.id));

    if (favoriteMeals.length  === 0){
      return<View style={styles.rootContainer}>
        <Text style={styles.text}>You have  no favorited meals yet!!</Text>
      </View>
    }

  return <MealsList items={favoriteMeals}/>;
}

export default FavScreen;

const styles = StyleSheet.create({

  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
});
