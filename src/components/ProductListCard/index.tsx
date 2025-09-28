import { useCallback } from "react";
import { FlatList } from "react-native";
import ItemCard from "./ProductItemCard";
import { w } from "../../layout/metrics";
import SeparatorList from "../ui/SeparatorList";
import { useGetCards } from "../../api/card";
import Loading from "../ui/Loading";
import WrongLoadList from "../WrongLoadList";

const ITEM_HEIGHT = w(250)

const ProductListCard = () => {

  const { data, isError, isLoading, error } = useGetCards();
    
  const renderItem = useCallback(({item}: {item: DataCard}) => {
    return (
      <ItemCard data={item}/>
    )
  },[]);

  if (isLoading) return <Loading title="Loading..." />;
  if (isError) return <WrongLoadList error={error?.message} />;

  return (
    <FlatList 
      data={data ?? []} 
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <SeparatorList space={10}/>}
      contentInsetAdjustmentBehavior="automatic"
      initialNumToRender={1}
      windowSize={3}
      getItemLayout={(_, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,  
      })}
    />
  )
}

export default ProductListCard