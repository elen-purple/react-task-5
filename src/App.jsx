import { PageBoard } from "./components/PageBoard/PageBoard";
import menu from "./data/menu.json";
import { MdOutlineTimer } from "react-icons/md";
import { PiChartPieSliceBold } from "react-icons/pi";
import { MdOutlineBarChart } from "react-icons/md";
import { GlobalStyle } from "./AppStyled";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageBoard
        menu={menu}
        icons={[MdOutlineTimer, PiChartPieSliceBold, MdOutlineBarChart]}
      />
    </>
  );
}

export default App;
