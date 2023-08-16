import { View, Text,Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import { addToCart,removeToCart } from './redux/action';
import { useDispatch,useSelector } from 'react-redux';

const Product = (props) => {
    const [isAdded,setIsAdded] = useState(false);
    const dispatch = useDispatch();
    const {item} = props;
    const handleAddToCart = ()=>{
       console.log(item.name);
       dispatch(addToCart(item));
    }
    const handleRemoveToCart = ()=>{
       console.log(item.name);
       dispatch(removeToCart(item.name));
       setIsAdded(false);
    }
    const cardItems = useSelector((state)=>{return(state.reducer)})
    useEffect(()=>{
      if(cardItems && cardItems.length){
        cardItems.forEach((element)=>{
             if(element.name === item.name){
                setIsAdded(true)
             }
        })
      }
    },[cardItems])
  return (
    <View style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',borderBottomColor:'black',borderBottomWidth:2,paddingBottom:5}} key={item.name}>
    <Text>{item.name}</Text>
    <Text>{item.price}</Text>
    <Text>{item.color}</Text>
{
    isAdded ? 
    (<Button title='Remove to cart'  onPress={handleRemoveToCart}/>)
           : 
    (<Button title='Add to cart' onPress={handleAddToCart}/>) 
}
  </View>
  )
}

export default Product