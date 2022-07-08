import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  LogBox,
} from 'react-native';
import ServiceCard from '../components/ServiceCard';

LogBox.ignoreLogs(['Warning: ...']);

const Services = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDataFromApiAsync = async () => {
    try {
      const response = await fetch('https://stage-api.serw.io/v1/services');
      const serviceData = await response.json();
      setData(serviceData.services);
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
        <View style={{paddingTop: '70%'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => {
            return index;
          }}
          renderItem={({item}) => (
            <ServiceCard
              serviceTitle={item.serviceName}
              serviceAmount={item.price}
              serviceDuration={item.durationMinutes}
              serviceProvider={item.callProvider}
              // serviceImage={item.image + ''}
              servicestatus={item.online}
              serviceRating={item.rating}
              serviceReviews={item.ratingCount}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Services;
