import './App.css';
import MediaQuery from  'react-responsive';

import { Desktop } from "./components/desktop/desktop";
import { Laptop } from "./components/laptop/laptop";
import { BigScreen } from "../src/components/big-screen/big-screen";
import { Mobile } from "../src/components/mobile/mobile";
import { TabletMobile } from "../src/components/tablet-mobile/tablet-mobile";

function App() {

  return (
    <div className="App">
      <h1>React Responsive - a guide</h1>   
      <MediaQuery minWidth={320}>
        <Mobile />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <TabletMobile />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <Desktop />
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <Laptop />
      </MediaQuery>
      <MediaQuery minWidth={1201}>
        <BigScreen />
      </MediaQuery>
    </div>
  );
}

export default App;
