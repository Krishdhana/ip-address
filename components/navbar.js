import * as styles from "../styles/navbar.module.scss";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";

const NavBar = () => {
  return (
    <div className={`row ${styles.navbar} m-0 `}>
      <p className="col-auto my-auto ms-5 fw-bold fs-5">
        Find Your IP Address <AddLocationRoundedIcon></AddLocationRoundedIcon>
      </p>
      <p className="col-auto me-2 ms-auto my-auto ms-5 fw-bold">
        Powered by Geolocation
      </p>
    </div>
  );
};

export default NavBar;
