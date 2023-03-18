import Course from 'components/Course/Course';
import { useDispatch } from 'react-redux';
import { refreshCourse } from 'redux/operation';
import { Section, LinkStyled } from '../CoursesPage/CoursesPage.styled';


const CoursePage = () => {
  const dispatch = useDispatch();

  return (
    <Section>
      <LinkStyled to="/" onClick={() => dispatch(refreshCourse())} >
      ⬅ Go back
    </LinkStyled>
      <Course />
    </Section>
  );
};

export default CoursePage;