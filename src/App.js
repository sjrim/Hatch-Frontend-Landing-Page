import "./App.scss";
import Banner from "./components/Banner/Banner";

import CardContainer from "./components/CardContainer/CardContainer.jsx";
import { ReactComponent as WaveLines } from "./assets/wavy-lines-icon.svg";
import { ReactComponent as SunShine } from "./assets/sunshine-heart-icon.svg";
import { ReactComponent as SunRise } from "./assets/sunrise-alarm.svg";

const App = () => {
  const options = [
    {
      id: 1,
      title: "Text",
      imageUrl: <WaveLines />,
    },
    {
      id: 2,
      title: "Text",
      imageUrl: <SunShine />,
    },
    {
      id: 3,
      title: "Text",
      imageUrl: <SunRise />,
    },
  ];

  return (
    <div className="main-container">
      <div className="header-logo">
        <SunRise />
      </div>

      <Banner />

      <div className="card-header">
        <p>Your heading here</p>
      </div>

      <CardContainer options={options} />
    </div>
  );
};

export default App;
