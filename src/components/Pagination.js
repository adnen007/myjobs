import S from "../css/Pagination.module.css";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { context } from "../contexts/mainContext";
import { useContext } from "react";
//import useFetch from "../hooks/useFetch";

const Pagination = ({ setQuery, query }) => {
  const { state } = useContext(context);
  const pageNumber = Math.ceil(state.jobs.jobsNumber / 10);

  const changePage = (current) => {
    if (current >= pageNumber || current < 0) {
      return;
    }
    setQuery({ ...query, page: current });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  if (state.jobs.jobsNumber <= 0) {
    return;
  }

  let numbers = [];

  for (let i = 0; i < pageNumber; i++) {
    numbers[i] = i;
  }

  return (
    <div className={S.pagination}>
      <div onClick={() => changePage(query.page - 1)} className={S.next}>
        <MdKeyboardDoubleArrowLeft /> <span>Prev</span>
      </div>
      <div className={S.numbers}>
        {numbers.map((number) => {
          return (
            <div
              key={number}
              onClick={() => {
                changePage(number);
              }}
              className={number === query.page ? S.active : ""}
            >
              {number + 1}
            </div>
          );
        })}
      </div>
      <div onClick={() => changePage(query.page + 1)} className={S.prev}>
        <span>Next</span> <MdKeyboardDoubleArrowRight />
      </div>
    </div>
  );
};

export default Pagination;

//like the useState when you use useReducer the state will not change  till the next render(or exacatly till the
// ex context compete) so the result of the reducer will be pending till the ex compelate then it will change
// and the rerender will happen.
// that mean if you use many dispatch for the same state the rerender will happen only for when time casue each
// time it will just put the new value of the state in to be pending then it will take the last value and put it as
// the state and rerender.
