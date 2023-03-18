import { Routes, Route } from "react-router";
import Home from '../home/home';
import Confession from '../confession/confession';
import Misdemeanour from '../misdemeanour/misdemeanour';
import NotFound from '../not_found';

export const Router: React.FC = () => {
	return (
		
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confession" element={<Confession />} />
        <Route path="/misdemeanour" element={<Misdemeanour />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
};