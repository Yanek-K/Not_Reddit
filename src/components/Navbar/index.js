import React, { useState } from "react";
import "./index.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import TrendingUpTwoToneIcon from "@material-ui/icons/TrendingUpTwoTone";
import EqualizerTwoToneIcon from "@material-ui/icons/EqualizerTwoTone";
import { getSearch } from "../../redux/actions/searchActions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Tooltip from "@material-ui/core/Tooltip";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    const term = e.target.value.split(" ").join("");
    setSearchTerm(term);
  };

  const handleClick = (e) => {
    dispatch(getSearch(searchTerm));
    history.push("/");
  };

  const handleTrending = (e) => {
    dispatch(getSearch("trending"));
    history.push("/");
  };

  const handlePopular = (e) => {
    dispatch(getSearch("askreddit"));
    history.push("/");
  };
  return (
    <div className="NavBar">
      <div className="NavBar__left">
        <Link to="/">
          <img className="NavBar__logo" src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="NavBar__center">
        <input
          // value={value}
          type="text"
          placeholder="Search"
          onChange={handleChange}
        ></input>
        <SearchIcon onClick={handleClick} />
      </div>
      <div className="NavBar__right">
        <Link to="/">
          <Tooltip title="Home" placement="top">
            <HomeIcon className="NavBar__homeIcon" style={{ fill: "#fff" }} />
          </Tooltip>
        </Link>
        <Tooltip title="Trending" placement="top">
          <TrendingUpTwoToneIcon
            className="NavBar__trendingIcon"
            style={{ fill: "#fff" }}
            onClick={handleTrending}
          />
        </Tooltip>
        <Tooltip title="Ask Reddit" placement="top">
          <EqualizerTwoToneIcon
            className="NavBar__EqualizerIcon"
            style={{ fill: "#fff" }}
            onClick={handlePopular}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
