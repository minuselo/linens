import Products from "./products/Products";
import Advantages from "./advantages/Advantages";
import MainPageSlider from "./mainPageSlider/MainPageSlider";
import TripleSlider from "./tripleSlider/TripleSlider";
import NewsSection from "./newsSection/newsSection";

const MainPage = () => {
    return (
        <main>
            <Products/>
            <Advantages/>
            <MainPageSlider/>
            <TripleSlider/>
            <NewsSection/>
        </main>
    )
}

export default MainPage;