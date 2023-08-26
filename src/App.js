import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="parent">
      parent
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
            <div>netlify</div>
          </div>
          <div className="token">token</div>
          <div className="address">taddress</div>
        </div>
        <div className="fb">fb</div>
      </div>
      <div className="cardBox">cardbox</div>
    </div>
  );
}

export default App;
