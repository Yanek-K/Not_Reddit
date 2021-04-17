import React from "react";
import "./index.css";
import { useSelector } from "react-redux";

const mapState = (state) => ({
  about: state.search.about,
});

const About = () => {
  const {
    about: { data },
  } = useSelector(mapState);

  return (
    <div className="about">
      <div className="about__header">
        {data ? <p>About {data.display_name_prefixed} </p> : null}
      </div>
      <div className="about__main">
        {data ? <p>{data.public_description}</p> : null}
      </div>
    </div>
  );
};

export default About;
