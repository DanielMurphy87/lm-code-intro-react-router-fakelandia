import { Route, Routes } from "react-router";
import About from "../about/about";
import Confession from '../confession/confession';
import Home from '../home/home';
import { Main } from "../main_layout/main";
import Misdemeanour from '../misdemeanour/misdemeanour';
import NotFound from '../not_found';

export const Router: React.FC = () => {
  return (

    <Routes>
      <Route path="/" element={<Main />} >
        <Route index element={<Home />} />
        <Route path="confession" element={<Confession />} />
        <Route path="misdemeanour" element={<Misdemeanour />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
};