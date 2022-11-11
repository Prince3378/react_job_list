import React from 'react';
import { Data } from '../types/types';

import logo from '../images/saveIcon.svg';
import loc from './../images/location.svg';
import { Stars } from './Stars';
import { NavLink } from 'react-router-dom';
import { HandySvg } from 'handy-svg';
import classNames from 'classnames';
import useWindowDimensions from './useWindowDimensions';

type Props = {
  job: Data,
  idStars1: string,
  idStars2: string,
  setSelectedJob: (job: Data) => void,
};

export const Card: React.FC<Props> = ({
  job, idStars1, idStars2, setSelectedJob,
}) => {
  const { width } = useWindowDimensions();

  const getSentence = (str: string) => {
    return `${str.split(' ').slice(0, 5).join(' ')}...`;
  };

  return (
    <div
      className="
        h-40 rounded-lg bg-[#F5F5F5]
        mb-2 py-6 px-4
        flex justify-between
        lg:h-[13rem]"
    >
      <div className="flex gap-7 lg:gap-5 md:gap-3">
        <div>
          <img
            src={`${job.pictures[0]}`}
            alt="img"
            className="
            h-[85px] w-[85px]
            rounded-full object-cover
            lg:h-[66px] lg:w-[66px]
            md:mt-6"
          />
        </div>
        <div className="w-[35rem] lg:w-[30rem] md:w-[80%]">
          <div className="hidden lg:flex justify-between mb-4">
            <Stars />
            <div className="hidden md:block">
              <p className="text-base text-desСolor lg:font-light lg:text-sm">
                {`Posted ${new Date(job.createdAt).toLocaleDateString()}`}
              </p>
            </div>
          </div>
          <NavLink to={`/job-${job.id}`}>
            <h1
              className="font-bold text-xl
              text-titleColor mb-2 cursor-pointer
              lg:text-lg lg:font-normal
              sm:leading-5"
              onClick={() => {
                setSelectedJob(job);
              }}
            >
              {width < 850 ? getSentence(job.title) : job.title}
            </h1>
          </NavLink>
          <p className="text-base font-normal text-desСolor mb-2 sm:leading-5">
            Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
          </p>
          <img src={loc} alt="location" className="inline"/>
          <p className="text-base text-desСolor inline-block pl-2">
            Vienna, Austria
          </p>
        </div>
      </div>
      <div className="lg:hidden">
        {(idStars1 === job.id || idStars2 === job.id) && (
          <Stars />
        )}
      </div>

      <div className="flex flex-col justify-between md:hidden">
        <div
          className="flex justify-end"
        >
          <HandySvg
            src={logo}
            className={classNames(`h-5 w-4
            right-0 fill-none
            hover:fill-[#38415D] hover:stroke-[#38415D] transition-all
            cursor-pointer`,
            { 'fill-none': true })}
          />
        </div>
        <p className="text-base text-desСolor lg:font-light lg:text-sm">
          {`Posted ${new Date(job.createdAt).toLocaleDateString()}`}
        </p>
      </div>
    </div>
  );
};
