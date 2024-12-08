import React from "react";
import "./dashboard.css";
import PropTypes from "prop-types";
import graph from "../../assets/vec2.svg";
import { BiArrowBack, BiChevronDown } from "react-icons/bi";
import GrayCard from "./GrayCard";
import ColorCard from "./ColorCard";
function Dashboard({ show }) {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [setScreenWidth]);
  console.log(screenWidth, show);
  return (
    <div className={`dashboard-container`}>
      <h1 className="dash-h1">Dashboard</h1>
      <div className="d-content">
        <div className="l-box">
          <div className="c-cards">
            <ColorCard
              bgColor="#FFEFE7"
              textColor="#FF5151"
              Heading="Availiable Position"
              Number={10}
              Text="4 Urgently needed"
            />
            <ColorCard
              bgColor="#F7F9FF"
              textColor="#3786F1"
              Heading="Job Applications"
              Number={24}
              Text="4 New applications"
            />
            <ColorCard
              bgColor="#F0F9F0"
              textColor="#00B87C"
              Heading="Total Employees"
              Number={216}
              Text="4 Departments"
            />
          </div>
          <div className="t-cards">
            <div className="t-card">
              <div className="l-info">
                <div className="header">Total Employees</div>
                <div className="number">216</div>
                <div className="info">
                  <span>120 men</span>
                  <span>96 women</span>
                </div>
              </div>
              <div className="r-info">
                <div className="absolute">
                  <span id="up">+2%</span>
                  <BiArrowBack className="arrow" />
                </div>
                <img src={graph} alt="graph" />
                <span id="down">+2% past month</span>
              </div>
            </div>
            <div className="t-card">
              <div className="l-info">
                <div className="header">Talent request</div>
                <div className="number">16</div>
                <div className="info">
                  <span>6 men</span>
                  <span>10 women</span>
                </div>
              </div>
              <div className="r-info">
                <div className="absolute">
                  <span id="up">+5%</span>
                  <BiArrowBack className="arrow" />
                </div>
                <img src={graph} alt="graph" />
                <span id="down">+2% past month</span>
              </div>
            </div>
          </div>
          <div className="a-card">
            <div className="heading">
              <h4>Announcement</h4>
              <div className="date">
                <input
                  type="date"
                  name="date"
                  className="no-calendar-icon"
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
                <BiChevronDown className="chev-down" />
              </div>
              {/* gray cards sep component */}
            </div>
            <div className="body">
              <GrayCard
                cardHeading="Outing Schedule for every department"
                cardInfo="5 Minutes ago"
                className={"active"}
              />
              <GrayCard
                cardHeading="Meeting HR Department"
                cardInfo="Yesterday, 12:30 PM"
              />
              <GrayCard
                cardHeading="IT Department needs a new employee"
                cardInfo="Yesterday, 9:15 AM"
              />
            </div>
            <hr />
            <p className="foot">See All Anouncments</p>
          </div>
        </div>
        <div className="r-box">
          <div className="s-card c-card">
            <div className="header">Recently Active</div>
            <div className="info">
              <time>10:40 AM, Sun 08 Dec 2021</time>
              <div className="header-2">You posted a new Job</div>
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </div>
            <div className="footer">
              Today you makes 12 Activity
              <button type="button" className="orange-btn">
                See All Activity
              </button>
            </div>
          </div>
          <div className="a-card">
            <div className="heading">
              <h4>Upcoming Schedule</h4>
              <div className="date">
                <input
                  type="date"
                  name="date"
                  className="no-calendar-icon"
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
                <BiChevronDown className="chev-down" />
              </div>
            </div>
            <div className="body">
              <p>Proirity</p>
              <GrayCard
                cardHeading="Review Candidate applications"
                cardInfo="Today, 10:00 AM"
                className={"active"}
              />
              <p>Other</p>
              <GrayCard
                cardHeading="Interview with the new employee"
                cardInfo="Today, 2:00 PM"
              />
              <GrayCard
                cardHeading="Interview with the new employee"
                cardInfo="Today, 2:00 PM"
              />
              <GrayCard
                cardHeading="IT Department Meeting for new project"
                cardInfo="Today, 9:15 AM"
              />
            </div>
            <hr />
            <p className="foot">Create a new Schedule</p>
            {/* gray cards sep component */}
          </div>
        </div>
      </div>
    </div>
  );
}
Dashboard.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Dashboard;
