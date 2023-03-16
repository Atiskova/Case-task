import React from 'react';
import ReactPlayer from 'react-player';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourse } from 'redux/operation';
import { selectCourse, selectLoading } from 'redux/selectors';

const Course = () => {
  const course = useSelector(selectCourse);
  const { title, lessons, description } = course;
  const status = useSelector(selectLoading);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, [dispatch, courseId]);
  console.log(lessons);

  return (
    <>
      {status === 'pending' && <Loader />}

      <h1>{title}</h1>
      <ReactPlayer
        url={(lessons && lessons[0]?.link)}
        playing
      />


      <p>{description}</p>
      <ul>
        {lessons?.map(lesson => (
          <li key={lesson.id}>
            <p>{lesson.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Course;
