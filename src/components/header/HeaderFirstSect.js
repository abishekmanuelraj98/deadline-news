import classes from "./HeaderFirstSect.module.css";

import {
  phoneIcon,
  emailIcon,
  facebook,
  twitter,
  googlePlus,
  linkedIn,
  pinterest,
  instagram,
} from "../../images/svg";
const HeaderFirstSect = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.contact_info}>
        <div className={classes.contact}>
          <div className={classes.icon}>{phoneIcon}</div>
          <p>354215251</p>
        </div>
        <div className={classes.contact}>
          <div className={classes.icon}>{emailIcon}</div>
          <p>info@barta.com</p>
        </div>
      </div>
      <div className={classes.social_media_info}>
        {[facebook, twitter, googlePlus, linkedIn, pinterest, instagram].map(
          (el, ind) => (
            <div key={ind}>{el}</div>
          )
        )}
      </div>
    </div>
  );
};
export default HeaderFirstSect;
