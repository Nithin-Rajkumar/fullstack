import "../assets/css/sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">BritEngCert</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/dashboard"> <span>Dashboard</span></Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <Link to="/users"><span>Users</span>
            </Link>
          </li>
          <li>
            <StoreIcon className="icon" />
            <Link to="/course"><span>Courses</span></Link>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <Link to="/enquiryad"><span>Enquiries</span></Link>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <Link to="/post"><span>Post Course</span></Link>
          </li>
           <li>
            <InsertChartIcon className="icon" />
            <span>Update Course</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Delete Course</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Payment Details</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <Link to="/"><span>Logout</span></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;