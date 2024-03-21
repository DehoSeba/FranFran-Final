import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { carouselImages } from './carouselImages';

export const CosCarousel = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <View>
            <Carousel
                loop
                width={width}
                height={height}
                autoPlay={true}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                data={carouselImages}
                renderItem={({ item }) => ( // Remove unnecessary { item: { carouselImages } } and access item directly
                    <View style={{ flex: 1 }}>
                        <Image
                            source={item.image} // Access image property directly
                            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                        />
                        <View style={{ position: 'absolute', bottom: 70, left: 45, width: '100%', padding: 10 }}>
                            <Image
                                source={item.name} // Access name property directly
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
