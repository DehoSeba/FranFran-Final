import {CosplansData} from "./cosplansData";
import {ImageSourcePropType} from "react-native";

interface patronsList {
    name: string;
    price: string;
    image: ImageSourcePropType;
    description: string;
}
export const patronsItems: patronsList[] = [
    {name : "Vi", price: "free", image:require("../../assets/images/vi-skin.png"), description : "Vi from lol"}
]