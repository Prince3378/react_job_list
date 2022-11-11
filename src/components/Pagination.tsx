import classNames from 'classnames';
import { HandySvg } from 'handy-svg';
import React from 'react';

import left from './../images/left.svg';
import right from './../images/right.svg';

type Props = {
  currentPage: number,
  setCurrentPage: (n: number) => void,
  amountPages: number,
};

export const Pagination: React.FC<Props> = ({
  currentPage, setCurrentPage, amountPages,
}) => {
  const arrOfPages = Array.from({ length: amountPages }, (_, i) => i + 1);

  return (
    <div className="
      w-[560px]
      rounded-lg
      bg-white
      mx-auto my-12 px-6
      flex justify-between items-center
      md:w-[360px] sm:w-[240px]"
    >
      {currentPage === 1
        ? <button
          className="
            h-[31px] w-[43px]
            flex justify-between items-center
            border-r-2"
          disabled
        >
          <HandySvg
            src={left}
            className="fill-[#7D859C]"
            width="15"
            height="18"
          />
        </button>

        : <button
          className="
            h-[31px] w-[43px]
            flex justify-between items-center
            border-r-2"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          <HandySvg
            src={left}
            className="fill-titleColor hover:fill-[#7D859C] transition-all"
            width="15"
            height="18"
          />
        </button>
      }

      <ul className="flex justify-around items-center">
        {arrOfPages.map(page => (
          <li
            key={page}
            className={
              classNames(
                `flex justify-center items-center
                h-full w-[31px] py-2 text-center
                font-bold text-xl text-pagColor
                hover:text-pagActiveColor
                transition-colors cursor-pointer`,
                { 'active': page === currentPage },
              )}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </li>
        ))}
      </ul>

      {currentPage === amountPages
        ? <button
          className="
            h-[31px] w-[43px] py-2
            flex justify-end items-center
            border-l-2"
          disabled
        >
          <HandySvg
            src={right}
            className="fill-[#7D859C]"
            width="15"
            height="18"
          />
        </button>

        : <button
          className="
          h-[31px] w-[43px] py-2
          flex justify-end items-center
          border-l-2"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          <HandySvg
            src={right}
            className="
              fill-titleColor
              hover:fill-[#7D859C]
              transition-all"
            width="15"
            height="18"
          />
        </button>
      }
    </div>
  );
};
