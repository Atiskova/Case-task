import Courses from 'components/Courses/Courses';
import { Section, SectionTitle } from './CoursesPage.styled';

// const { useSelector } = require('react-redux');
// const { selectCourses, selectLoading } = require('redux/selectors');

const CoursesPage = () => {
  //   const courses = useSelector(selectCourses);

  return (
    <Section>
      <SectionTitle>Courses</SectionTitle>
      <Courses />
    </Section>
  );
};

export default CoursesPage;
