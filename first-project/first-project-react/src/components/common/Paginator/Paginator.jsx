import React from "react";
import s from "../../Users/Users.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div>
      {slicedPages.map((p) => {
        return (
          <span
            className={props.currentPage === p && s.selectedPage}
            onClick={() => {
              props.onPageChanged(p);
            }}
            key={p.id}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
