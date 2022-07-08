import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
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
          data={data}
          keyExtractor={({id}, index) => {
            return index;
          }}
          renderItem={({item}) => (
            // <TouchableOpacity
            //   onPress={() => {
            //     Linking.openURL(item.url).catch(err =>
            //       console.error('Error', err),
            //     );
            //   }}>
            //   <Card item={item} />
            // </TouchableOpacity>
            // <Text style={{color: 'black'}}>{item.name}</Text>
            <ProfileCard expertName={item.name} expertCountry={item.country} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Experts;
