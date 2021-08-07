/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {fetchItems} from './Api';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ListRenderItem,
  Dimensions,
  Button,
} from 'react-native';
import AddPhoto from './components/AddPhoto';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

////////////////////////////////////////////////////////////////////////////////
// INTERVIEW NOTES: START WITH THIS COMPONENT FOR YOUR IMPLEMENTATION
////////////////////////////////////////////////////////////////////////////////

interface Photo {
  id: string;
  memberId: number;
  url: string;
  position: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

interface Photos {
  photos: Photo[];
}

const App: () => React.Node = () => {
  const [photos, setPhotos] = useState<any>([]);
  useEffect(() => {
    const newPhotos = async () => {
      const newPhotos = await fetchItems();
      console.log(newPhotos);
      setPhotos(newPhotos);
    };
    newPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const newPhotoId = Math.floor(Math.random() * 1000000000);

  const addPhoto = (url: string) => {
    setPhotos((prevPhotos: any) => {
      return [...prevPhotos, {id: newPhotoId.toString(), url}];
    });
  };

  const removePhoto = (id: string) => {
    const newPhotos = photos.filter(
      (photo: Photo) => photo.id !== id.toString(),
    );
    setPhotos(newPhotos);
  };

  const renderItem: ListRenderItem<Photo> = ({item}) => (
    <View>
      <Image style={styles.image} source={{uri: item.url}} />
      <Button
        onPress={() => removePhoto(item.id)}
        title="X"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={photos}
          style={styles.flatList}
          renderItem={renderItem}
        />
        <AddPhoto addPhoto={addPhoto} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 80,
  },
});

export default App;
