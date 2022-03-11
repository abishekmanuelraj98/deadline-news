import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import classes from "./NewsPic.module.css";
const NewsPic = (props) => {
  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    if (props.values) {
      setCurrentData(props.values);
    }
  }, [props.values]);
  return (
    <div className={classes.picture_container}>
      <img src={currentData.imgUrl} className={classes.img} alt="news" />
      <div className={classes.overlay}>
        <Link to={"/"} className={classes.title}>
          {currentData.title}
        </Link>
      </div>
    </div>
  );
};
export default NewsPic;
