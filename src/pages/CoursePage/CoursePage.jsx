import Course from 'components/Course/Course';
import { Section } from '../CoursesPage/CoursesPage.styled';

// const { useSelector } = require('react-redux');
// const { selectCourses, selectLoading } = require('redux/selectors');

const CoursePage = () => {
  //   const courses = useSelector(selectCourses);

  return (
    <Section>
      <Course />
    </Section>
  );
};

export default CoursePage;