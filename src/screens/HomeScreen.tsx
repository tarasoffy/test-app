import { View, StyleSheet } from "react-native";
import { useGetCards } from "../api/cards";
import ListCard from "../components/ListCard";
import { colors } from "../theme/colors";
import WrongLoadList from "../components/WrongLoadList";
import Loading from "../components/Loading";
import { w } from "../layout/metrics";

const HomeScreen = () => {
  const { data, isError, isLoading, error } = useGetCards();
  
  if (isLoading) return <Loading title="Loading..." />;
  if (isError) return <WrongLoadList error={error?.message} />;

  return (
    <View style={styles.container}>
      <ListCard data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: w(20),
  },
});

export default HomeScreen;