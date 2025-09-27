import { FC, useCallback } from "react";
import { FlatList, View } from "react-native";
import ItemCard from "./ItemCard";
import { w } from "../layout/metrics";
import SeparatorList from "./SeparatorList";

const ITEM_HEIGHT = w(250)

type Props = {
  data: DataCard[];
}

const ListCard: FC<Props> = ({data}) => {
  
  const renderItem = useCallback(({item}: {item: DataCard}) => {
    return (
      <ItemCard data={item}/>
    )
  },[])

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

export default ListCard