import {NavigationHome} from "../Components/NavsOfPages"
import { About_Us } from "../Components/AboutUs";
import { ShoppingCart } from "../Components/Cart";

export const HomeApp = () => {
    return (
        <>
            <NavigationHome></NavigationHome>
            <ShoppingCart></ShoppingCart>
            <About_Us></About_Us>
        </>
    )
};
