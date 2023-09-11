import { BrowserRouter as Router , Route , Link , Routes } from "react-router-dom" ;

import HomePage from "./pages/home/HomePage" ;
import NotFound  from "./pages/404/NotFoundPage" ;
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetail" ;

function AppRouting() {
  return (
   
    <Router>
      <div>
        <aside>
          <Link to="/"> | HOME |</Link>
          <Link to="/about"> | ABOUT | </Link>
          <Link to="/faqs"> | FAQS |</Link>
          <Link to="/asdasdas"> | 404 |</Link>
        </aside>

        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/task/:id" element={<TaskDetailPage />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />   
        </Routes>
        </main>
      </div>
      
    </Router>
  );
}

export default AppRouting;
