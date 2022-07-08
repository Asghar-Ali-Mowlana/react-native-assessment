import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileCard from '../components/ProfileCard';

const Experts = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDataFromApiAsync = async () => {
    try {
      const response = await fetch('https://stage-api.serw.io/v1/experts');
      const userData = await response.json();
      setData(userData.experts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromApiAsync();
  }, []);

  return (
    <View style={{}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={styles.listStyle}
          data={data}
          keyExtractor={({id}, index) => {
            return index;
          }}
          renderItem={({item}) => (
            <ProfileCard
              expertName={item.name}
              expertCountry={item.country == null ? 'N/A' : item.country}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '5%',
  },
});

export default Experts;
