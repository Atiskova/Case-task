import Course from 'components/Course/Course';
import { Link } from 'react-router-dom';
import { Section } from '../CoursesPage/CoursesPage.styled';

// const { useSelector } = require('react-redux');
// const { selectCourses, selectLoading } = require('redux/selectors');

const CoursePage = () => {
  //   const courses = useSelector(selectCourses);

  return (
    <Section>
      <Link to="/" style={{fontSize: 20, fontWeight: 500, color: 'black', padding: 20, display: 'block'}}>
      ⬅ Go back
    </Link>
      <Course />
    </Section>
  );
};

export default CoursePage;