import { createContext, useEffect, useState } from 'react';

const newContext = createContext();
export const Context = newContext;

const AppContext = (props) => {

    // heandle search bar
    // #######################################
    const [openSearch, SetSearch] = useState(false);

    const SearchBarHendle = () => {
        if (openSearch === false) { SetSearch(true) }
        else { SetSearch(false); }
    }
    // #######################################

    // Top Banner data handle
    const [TopBannerHeading, setTopBannerHeading] = useState("");
    const [TopBannerParagraph, setTopBannerParagraph] = useState("");
    const [TopBannerImg, setTopBannerImg] = useState("https://imagescdn.thecollective.in/img/app/product/8/898415-10977834.jpg?w=900&amp;auto=format");
    // #######################################

    // Phone Crousel CardSize
    // #####################################
    const [PhoneCrouselCardSize] = useState(2);

    // App Name Handle
    const [appName, setAppName] = useState("YouWe Fashion");
    // #####################################

    // footer data handle
    // ####################################
    const [FooteText, setFooteText] = useState("");

    const [Phone, SetPhone] = useState("");
    const [mail, setmail] = useState("");
    // ####################################

    // contact us data handle
    const [contactUsHading] = useState("YouWe Fashion Contact Us");
    // ####################################

    // Best Selling Product api 
    const [bestsallings, setBestSelling] = useState({});

    // all product's 
    const [pruducts, setProducts] = useState({});

    // NewArrival product
    const [getNewArrival, setNewArrival] = useState({});

    // send data in chackout pge.
    // const [getCartProduct, SetCartProduct] = useState([]);
    // const [getCartCount, setCartCount] = useState("");

    // #################################################


    //  set the data in shoppin cart
    const BestSelling = async () => {
        const res = await fetch(`http://localhost:8000/api/productsbycategory/BestSalling`);
        const resData = await res.json();
        setBestSelling(resData);
    }



    const Getproduct = async () => {
        // const res = await fetch(`http://127.0.0.1:8000/api/products/`);
        const res = await fetch(`http://localhost:1337/api/listings?populate=*`);
        const resData = await res.json();
        // console.log(resData);
        
        setProducts(resData);
    }



    const Homepagedata = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/homepage/`);
        const resData = await res.json();

        setTopBannerHeading(resData[0]?.TopBanner_title);
        setTopBannerParagraph(resData[0]?.TopBanner_paragraph);
        setTopBannerImg(resData[0]?.TopBanner_image);

        setAppName(resData[0]?.Foote_title);
        setFooteText(resData[0]?.Footer_text);

        SetPhone(resData[0]?.Footer_Contact_num);
        setmail(resData[0]?.Footer_Contact_mail);
    }




    const NewArrival = async () => {
        const res = await fetch(`http://localhost:8000/api/productsbycategory/NewArrival`);
        const resData = await res.json();
        setNewArrival(resData);
    }




    const [getTranding, SetTranding] = useState({})
    const Trandding = async () => {
        const res = await fetch(`http://localhost:8000/api/productsbycategory/Tranding`);
        const resData = await res.json();
        SetTranding(resData);
    }


    const [getAllCategory, setAllcategory] = useState({})
    const AllCategory = async () => {
        const res = await fetch(`http://localhost:8000/api/category/`);
        const resData = await res.json();
        setAllcategory(resData);
    }

    // get filter by  category
    const [getCategoryData, setCategoryData] = useState({})





useEffect(() => {
    AllCategory();
    Trandding();
    NewArrival();
    BestSelling();
    Getproduct();
    Homepagedata();
}, []);



return (
    <Context.Provider value={{
        appName, TopBannerHeading, PhoneCrouselCardSize, TopBannerParagraph, TopBannerImg, FooteText, Phone, mail, contactUsHading, openSearch, SetSearch, SearchBarHendle, bestsallings, pruducts, getNewArrival, getTranding, getAllCategory, getCategoryData, setCategoryData
    }}>
        {props.children}
    </Context.Provider>
);
}

export default AppContext;
