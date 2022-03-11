import { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import useRandomNum from "../../hooks/useRandomNum";
import classes from "./NewsGrid.module.css";
import NewsPic from "./NewsPic";
import spinner from "../../images/1494.gif";

const NewsGrid = () => {
  const fetching = useFetch("all");
  const displayData = fetching.data?.map((el) => {
    return { imgUrl: el.imageUrl, title: el.title };
  });

  const randomNum = useRandomNum();
  let data;
  if (displayData) {
    data = [
      displayData[randomNum[1]],
      displayData[randomNum[2]],
      displayData[randomNum[3]],
      displayData[randomNum[4]],
      displayData[randomNum[0]],
    ];
  }
  // const imageUrl = data.map((el) => el.imageUrl);

  // console.log(imageUrl);
  return (
    <Fragment>
      <div className={classes.grid_container}>
        {fetching.isLoading && !fetching.isError && (
          <div className={classes.spinner_container}>
            <img src={spinner} alt="loading" />
          </div>
        )}
        {fetching.isError && !fetching.isLoading && <p>{fetching.errorMsg}</p>}
        {displayData && !fetching.isLoading && !fetching.isError && (
          <Fragment>
            <div className={classes.first_column}>
              <NewsPic values={data[0]} />
              <NewsPic values={data[1]} />
            </div>
            <div className={classes.second_column}>
              <NewsPic values={data[2]} />
            </div>
            <div className={classes.third_column}>
              <NewsPic values={data[3]} />
              <NewsPic values={data[4]} />
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
export default NewsGrid;
