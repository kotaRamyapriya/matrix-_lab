import logo from './logo.svg';
import './App.css';
import Box from "./components/Box";

function App() {
  return (
    <div className="parent">
      <div className="sidebar">
        <div className="sidebarDiv1">
          <div className="netlify">
            <div style={{ marginRight: "20px" }}>
              <img
                width="20px"
                height="20px"
                src="https://cdn.icon-icons.com/icons2/2389/PNG/512/netlify_logo_icon_145039.png"
              />
            </div>
            <div>nFTify</div>
          </div>
          <div className="token">
            <div style={{ marginRight: "20px" }}>
              <img
                width="20px"
                height="20px"
                src="https://cdn.icon-icons.com/icons2/2389/PNG/512/netlify_logo_icon_145039.png"
              />
            </div>
            <div>Token Address</div>
          </div>
          <div className="address">
            <div style={{ marginRight: "20px" }}>
              <img
                width="20px"
                height="20px"
                src="https://cdn.icon-icons.com/icons2/2389/PNG/512/netlify_logo_icon_145039.png"
              />
            </div>
            <div>Pair Address</div>
          </div>
        </div>
        <div className="fb">
          <div className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
              width="25px"
              height="25px"
            />
          </div>
          <div className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png?20140125013055"
              width="25px"
              height="25px"
            />
          </div>
          <div className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
              width="25px"
              height="25px"
            />
          </div>
        </div>
      </div>
      <div className="cardBox">
        <div className="search">
          <div className="searchBar">
            <input
              style={{ width: "350px", height: "35px", borderRadius: "10px" }}
              placeholder="search"
            />
          </div>
          <div className="connect">
            <button
              style={{
                width: "100px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#390554",
                color: "white",
              }}
            >
              connect
            </button>
          </div>
        </div>
        <div className="boxes">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((ele) => {
            return <Box />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
