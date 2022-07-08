import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const ServiceCard = ({
  serviceTitle,
  serviceAmount,
  serviceDuration,
  serviceProvider,
  // serviceImage
  serviceStatus,
  serviceRating,
  serviceReviews,
}) => {
  return (
    <View elevation={1} style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: 'https://www.countryandtownhouse.com/wp-content/uploads/2019/04/GettyImages-964395046-600x400.jpg',
          }}>
          <View style={styles.imageContainrHeader}>
            <View style={styles.textStatusContainer}>
              <Text style={styles.textStatus}>Online</Text>
            </View>
            <View style={styles.stylesimageLike}>
              <Icon name="heart" size={15} color={'#e97778'} />
            </View>
          </View>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0)',
            ]}
            style={styles.imageContainrFooter}>
            {serviceRating == 1 ? (
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={'#efb060'} />
              </View>
            ) : serviceRating == 2 ? (
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
              </View>
            ) : serviceRating == 3 ? (
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
              </View>
            ) : serviceRating == 4 ? (
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
              </View>
            ) : serviceRating == 5 ? (
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
                <Icon name="star" size={15} color={'#efb060'} />
              </View>
            ) : null}
            <Text style={styles.textRating}> {serviceRating}</Text>
            <Text style={styles.textReviews}>
              {' '}
              ({serviceReviews} {serviceReviews == 1 ? 'review' : 'reviews'})
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>{serviceTitle}</Text>
          <View style={styles.subTitleContainer}>
            <Text style={styles.textSubTitle}>Pro</Text>
          </View>
        </View>
        <Text style={styles.textAmount}>${serviceAmount}</Text>
        <Text style={styles.textDuration}>
          duration - {serviceDuration} Min
        </Text>
        <Text style={styles.textProvider}>{serviceProvider}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '15%',
    marginTop: '8%',
    padding: 1,
    borderRadius: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: 200,
  },
  imageContainrHeader: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  stylesimageLike: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainrFooter: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#000000',
    marginTop: 100,
    padding: 10,
    alignItems: 'center',
  },
  detailsContainer: {
    width: '100%',
    height: 125,
    padding: 15,
    justifyContent: 'space-between',
  },
  textStatusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  textStatus: {
    textTransform: 'capitalize',
    color: '#61c154',
    textAlign: 'center',
    justifyContent: 'center',
  },
  textRating: {
    textTransform: 'capitalize',
    color: '#ffffff',
  },
  textReviews: {
    color: '#ffffff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    textTransform: 'capitalize',
    color: 'black',
    fontWeight: 'bold',
  },
  subTitleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: '#061453',
    borderRadius: 15,
  },
  textSubTitle: {
    textTransform: 'capitalize',
    color: '#ffffff',
    fontSize: 10,
  },
  textAmount: {
    textTransform: 'capitalize',
    color: '#afafaf',
  },
  textDuration: {
    textTransform: 'capitalize',
    color: '#808286',
  },
  textProvider: {
    textTransform: 'capitalize',
    color: '#000000',
  },
});

export default ServiceCard;
