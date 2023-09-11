import { BrowserRouter as Router , Route , Link , Routes } from "react-router-dom" ;

import HomePage from "./pages/home/HomePage" ;
import NotFound  from "./pages/404/NotFoundPage" ;

function AppRouting() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />   
      </Routes>
    </Router>
  );
}

export default AppRouting;
