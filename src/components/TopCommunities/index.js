import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSearch } from "../../redux/actions/searchActions";
import "./index.css";

const TopCommunities = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (text !== "") {
      dispatch(getSearch(text));
      history.push("/");
    }
  }, [dispatch, text]);

  return (
    <div className="communities">
      <div className="communities__header">
        <h4>Recommended Communities</h4>
      </div>
      <div>
        <ul className="communities__main">
          <li>
            Travel
            <p onClick={() => setText("travel")}>View</p>
          </li>

          <li>
            Fishing <p onClick={() => setText("Fishing")}>View</p>
          </li>
          <li>
            Art<p onClick={() => setText("Art")}>View</p>
          </li>
          <li>
            Science <p onClick={() => setText("Science")}>View</p>
          </li>
          <li>
            Canada <p onClick={() => setText("Canada")}>View</p>
          </li>
          <li>
            Movies <p onClick={() => setText("Movies")}>View</p>
          </li>
          <li>
            Photography <p onClick={() => setText("Photography")}>View</p>
          </li>
          <li>
            Trucks <p onClick={() => setText("Trucks")}>View</p>
          </li>
          <li>
            Technology <p onClick={() => setText("Technology")}>View</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopCommunities;
