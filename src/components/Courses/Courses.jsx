// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { getCourses } from 'redux/operation';
import { selectCourses } from 'redux/selectors';
import { List, Item, Image, Title, Text, Span } from './Courses.styled';

const Courses = () => {
  const courses = useSelector(selectCourses);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <div>
      <List>
        {courses.map(course => (
          <Item key={course.id}>
            <NavLink state={{ from: location }} to={'/:' + course.id}></NavLink>
            <Image
              src={course.previewImageLink + '/cover.webp'}
              alt="{course.title}"
            />
            <Title>{course.title}</Title>
            {course.lessonsCount && (
              <Text>
                Number of lessons: <Span>{course.lessonsCount}</Span>
              </Text>
            )}
            {course.meta.skills && (
              <Text>
                Skills: <Span>{course.meta.skills?.join(', ')}</Span>
              </Text>
            )}
            {course.rating && (
              <Text>
                Rating: <Span>{course.rating}</Span>
              </Text>
            )}
          </Item>
        ))}
      </List>
    </div>
  );
};

export default Courses;

