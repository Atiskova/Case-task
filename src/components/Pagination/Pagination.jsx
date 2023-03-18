import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses, selectPerPage } from 'redux/selectors';
import { setPage } from 'redux/slice';
import css from './Pagination.module.css';
import { useMediaQuery } from 'react-responsive';


export const Pagination = () => {
  const courses = useSelector(selectCourses);
  const itemsPerPage = useSelector(selectPerPage);
  const dispatch = useDispatch();

  const pageCount = Math.ceil(courses.length / itemsPerPage);

  const handlePageClick = e => {
    const newPage = (e.selected * itemsPerPage) % courses.length;
    dispatch(setPage(newPage));

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
    {isMobile ? (<ReactPaginate
           pageCount={pageCount}
           pageRangeDisplayed={1}
           marginPagesDisplayed={0}
           nextLabel=">"
           previousLabel="<"
           breakLabel="..."
           onPageChange={handlePageClick}
           renderOnZeroPageCount={null}
           containerClassName={css.pagination}
           pageLinkClassName={css.pageLink}
           nextLinkClassName={css.pageLink}
           previousLinkClassName={css.pageLink}
           breakLinkClassName={css.pageLink}
           activeClassName={css.active}
           disabledClassName={css.disabled}
        />) : (<ReactPaginate
            pageCount={pageCount}
           pageRangeDisplayed={2}
           marginPagesDisplayed={2}
           nextLabel=">"
           previousLabel="<"
           breakLabel="..."
           onPageChange={handlePageClick}
           renderOnZeroPageCount={null}
           containerClassName={css.pagination}
           pageLinkClassName={css.pageLink}
           nextLinkClassName={css.pageLink}
           previousLinkClassName={css.pageLink}
           breakLinkClassName={css.pageLink}
           activeClassName={css.active}
           disabledClassName={css.disabled}
          />)}
    </>
    
        
  );
};