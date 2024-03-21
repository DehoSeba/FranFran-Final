import { ImageSourcePropType } from 'react-native';

interface CarouselImage {
    name: ImageSourcePropType;
    image: ImageSourcePropType;
}

export const carouselImages: CarouselImage[] = [
    { name: require("../../assets/images/Ahri-icon.png"), image: require("../../assets/images/Ahri_3.jpg") },
    { name: require("../../assets/images/Tamaki-icon.png"), image: require("../../assets/images/Tamaki_10.jpg") },
    { name: require("../../assets/images/Ashe-icon.png"), image: require("../../assets/images/Ash_4.jpg") },
    { name: require("../../assets/images/Gnar-icon.png"), image: require("../../assets/images/Gnar_2.jpg") },
    { name: require("../../assets/images/Megumin-icon.png"), image: require("../../assets/images/Megumin_11.png") },
];
