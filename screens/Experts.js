import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  LogBox,
} from 'react-native';
import ProfileCard from '../components/ProfileCard';

LogBox.ignoreLogs(['Warning: ...']);

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
    <View>
      {isLoading ? (
        <View style={{paddingTop: '70%'}}>
          <ActivityIndicator />
        </View>
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
