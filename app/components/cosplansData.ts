import { ImageSourcePropType } from 'react-native';

export interface CosplansData {
    name: string;
    from: string;
    image: ImageSourcePropType;
}

export const cosplansData: CosplansData[] = [
    { name: "Archer", from: "Goblin Slayer", image: require("../../assets/images/archer.jpeg") },
    { name: "Death Garon Beta", from: "Monster Hunter", image: require("../../assets/images/death_garon.jpg") },
    { name: "Star guardian Quinn", from: "League of Legends", image: require("../../assets/images/quinn.jpg") },
    { name: "Faputa", from: "Made in Abyss", image: require("../../assets/images/faputa.png") },
];
