import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductsScreen = ({ navigation }) => {

  const dispacth = useDispatch();

  const products = useSelector(state => state.products.products);

    return (
        <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={() => {
              dispacth(productsSlice.actions.setSelectedProduct(item.id))

              navigation.navigate('Product Details')}} style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    );
};

const styles = StyleSheet.create({  
    itemContainer:{
      width: '50%',
      padding: 1,
    },
    image:{
      aspectRatio: 1,
      width: "100%"
    },
});

export default ProductsScreen;
