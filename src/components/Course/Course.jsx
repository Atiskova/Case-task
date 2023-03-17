import React, { useRef } from 'react';
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
  const player = useRef();

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, [dispatch, courseId]);
  console.log(lessons);

  // const onPlay = e => localStorage.setItem('videoplayer-current-time', e.seconds);
  // const currentTime = localStorage.getItem('videoplayer-current-time');

  // if (currentTime) player.setCurrentTime(currentTime);
  // player.on('timeupdate', onPlay);

  console.log(player);

  return (
    <>
      {status === 'pending' && <Loader />}

      <h1>{title}</h1>
      <ReactPlayer
        ref={player}
        // url={lessons && lessons[0]?.link}
        controls={true}
        volume={0.5}
        pip={true}
        stopOnUnmount={false}
        onReady={() => player.getInternalPlayer('hls').getCurrentTime()}
        played={0}
        loaded={0}
        playbackRate={1}
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
<script src="/path/hls.js"></script>;

export default Course;
