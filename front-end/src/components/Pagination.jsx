import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePageThunkActionCreator,
  fetchCapsulesThunkActionProvider,
} from "../redux/action";

function Pagination(props) {
  let page = useSelector((store) => {
    return store.page;
  });
  let dispatch = useDispatch();

  return (
    <div className="pagination">
      <button
        onClick={() => {
          dispatch(changePageThunkActionCreator(page - 1));
          dispatch(fetchCapsulesThunkActionProvider());
        }}
        disabled={page === 1}
      >
        Prev
      </button>
      <span>{page}</span>
      <button
        onClick={() => {
          dispatch(changePageThunkActionCreator(page + 1));
          dispatch(fetchCapsulesThunkActionProvider());
        }}
        disabled={page === 3}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
