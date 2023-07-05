import React from "react";

import "./style.scss";

import HeroBanner from "./banner/HeroBanner"
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;
