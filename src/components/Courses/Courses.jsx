import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from 'redux/operation';
import {
  selectCourses,
  selectLoading,
  selectPage,
  selectPerPage,
} from 'redux/selectors';
import {
  List,
  Item,
  Image,
  Title,
  Text,
  Span,
  StyledNavLink,
} from './Courses.styled';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination';

const Courses = () => {
  const courses = useSelector(selectCourses);
  const dispatch = useDispatch();
  const status = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const itemsPerPage = useSelector(selectPerPage);
  const endOffset = page + itemsPerPage;
  const currentTransactions = courses.slice(page, endOffset);
  const elementToScroll = useRef(null);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);


  return (
    <div ref={elementToScroll}>
      {status === 'pending' && !courses && <Loader />}
      <List>
        {currentTransactions.map(course => (
          <Item key={course.id}>
            <StyledNavLink to={`/${course.id}`}>
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
            </StyledNavLink>
          </Item>
        ))}
      </List>
      {courses.length > itemsPerPage && (
        <Pagination scrollAnchor={elementToScroll} />
      )}
    </div>
  );
};

export default Courses;
