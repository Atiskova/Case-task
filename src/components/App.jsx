import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectError } from 'redux/selectors';

const CoursesPage = lazy(() => import('../pages/CoursesPage/CoursesPage'));
const CoursePage = lazy(() => import('../pages/CoursePage/CoursePage'));

const App = () => {
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
  }, [error]);

  return (
    <Suspense>
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/:courseId" element={<CoursePage />} />
        <Route path="*" element={<NavLink to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
