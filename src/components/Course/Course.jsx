import React, { useRef, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourse } from 'redux/operation';
import { selectCourse, selectLoading } from 'redux/selectors';
import {
  Image,
  Sidebar,
  Span,
  Text,
  Title,
  Wrapper,
  LockedText,
  UnlockedText,
  LessonsWrapper,
  LessonsTitle,
  List,
} from './Course.styyled';
import { useMediaQuery } from 'react-responsive';
import ReactPlayer from 'react-player';

const Course = () => {
  const course = useSelector(selectCourse);
  const { title, tags, description, previewImageLink, rating, meta, lessons } =
    course;
  const status = useSelector(selectLoading);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const player = useRef();
  const [video, setVideo] = useState('');
  const [, setOrder] = useState(1);
  const [videoTitle, setVideoTitle] = useState('')
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, [dispatch, courseId]);

  useEffect(() => {
    if(lessons && lessons[0]?.status === 'unlocked') {setVideo(lessons[0]?.link)};
    if(lessons && lessons[0]?.status !== 'unlocked') {setVideo(previewImageLink + '/' + lessons[0]?.order + '.webp')};
  }, [lessons, previewImageLink]);

  useEffect(() => {
    lessons && setVideoTitle(lessons[0]?.title);
  }, [lessons]);

  const handlePutVideo = lesson => {
    if (lesson.status === 'unlocked' && lesson.link !== video) {
      setVideo(lesson.link);
      setOrder(lesson.order);
      setVideoTitle(lesson.title)
    }
  };

  return (
    <>
      {status === 'pending' && !lessons && <Loader />}
      <Wrapper>
        <Sidebar>
          {title && <Title>{title}</Title>}
          {previewImageLink && (
            <Image
              src={previewImageLink + '/cover.webp'}
              alt="{course.title}"
            />
          )}
          {description && <Text>{description}</Text>}
          {meta && (
            <Text>
              Skills: <Span>{course.meta.skills?.join(', ')}</Span>
            </Text>
          )}
          {tags && (
            <Text>
              Tag: <Span>{tags}</Span>
            </Text>
          )}
          {rating && (
            <Text>
              Rating: <Span>{rating}</Span>
            </Text>
          )}
        </Sidebar>
        {lessons && (
          <LessonsWrapper>
            {lessons && <LessonsTitle>{videoTitle}</LessonsTitle>}
            <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
              {isMobile ? (
                <ReactPlayer
                  ref={player}
                  width={280}
                  height={158}
                  url={video}
                  controls={true}
                  volume={0.5}
                  pip={true}
                  stopOnUnmount={false}
                  onReady={() => player.getInternalPlayer('hls').getCurrentTime()}
                  played={0}
                  loaded={0}
                  playbackRate={1}
                />
              ) : (
                <ReactPlayer
                  ref={player}
                  width={640}
                  height={360}
                  url={video}
                  controls={true}
                  volume={0.5}
                  pip={true}
                  stopOnUnmount={false}
                  onReady={() => player.getInternalPlayer('hls').getCurrentTime()}
                  played={0}
                  loaded={0}
                  playbackRate={1}
                />
              )}
            </div>

            <List>
              {lessons?.map(lesson => (
                <li key={lesson.id} onClick={() => handlePutVideo(lesson)}>
                  {lesson.status === 'locked' ? (
                    <LockedText>
                      {lesson.order}. {lesson.title}
                    </LockedText>
                  ) : (
                    <UnlockedText>
                      {lesson.order}. {lesson.title}
                    </UnlockedText>
                  )}
                </li>
              ))}
            </List>
          </LessonsWrapper>
        )}
      </Wrapper>
    </>
  );
};
<script src="/path/hls.js"></script>;

export default Course;
