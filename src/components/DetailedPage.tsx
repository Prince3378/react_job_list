import { HandySvg } from 'handy-svg';
import React, { useContext, useEffect } from 'react';
import { Data } from '../types/types';

import logo from './../images/saveIcon.svg';
import share from './../images/share.svg';
import { ApplyNow } from './ApplyNow';

import left from './../images/left.svg';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { MapFragment } from './MapFragment';
import { LocContext } from '../context/ReactContext';
import loc from './../images/location.svg';
import useWindowDimensions from './useWindowDimensions';

type Props = {
  selectedJob: Data | null;
}

export const DetailedPage: React.FC<Props> = ({ selectedJob }) => {
  const { width } = useWindowDimensions();

  const getSalary = (salary: string | undefined) => {
    if (salary) {
      const splitedSalary = salary.split('-');

      return `€ ${splitedSalary.map(el => `${el.slice(0, 2)} 000`).join(' - ')}`;
    }
  };

  const getDescription = (desc: string | undefined) => {
    if (desc) {
      return desc.split('\n').map(el => el.trim()).filter(el => el !== '');
    }
  };

  const getList = (sentence: string) => {
    return sentence.split('. ');
  };

  const { setLoc } = useContext(LocContext);

  useEffect(() => {
    if (selectedJob?.location) {
      setLoc(selectedJob?.location);
    }
  }, [selectedJob?.location]);

  return (
    <div className="container mx-auto pt-7
      flex justify-between bg-white
      lg:flex-col"
    >
      <div className="w-[60%] lg:w-[100%]">
        <div className="flex justify-between items-center mb-10 border-b-2
          md:flex-col md:border-none md:items-start md:mb-8"
        >
          <h1 className="font-bold text-3xl text-titleColor mb-2
            md:border-b-2 md:w-[100%] md:pb-3"
          >
            Job Details
          </h1>
          <div className="flex justify-between items-center">
            <HandySvg
              src={logo}
              className="
                fill-none hover:fill-[#7D859C]
                active:fill-[#7D859C]
                transition-all mr-4 cursor-pointer
              "
              width="15"
              height="18"
            />
            <p className="mr-8">Save to my list</p>
            <a
              target={'_blank'}
              href="https://www.facebook.com/"
            >
              <HandySvg
                src={share}
                className="mr-4 inline-block hover:scale-150 transition-all"
                width="15"
                height="18"
              />
              <p className="inline-block">Share</p>
            </a>
          </div>
        </div>
        <div className='md:hidden'>
          <ApplyNow />
        </div>
        <div className="flex justify-between mb-2">
          <h1 className="w-[60%] font-bold text-2xl text-titleColor
          md:w-[100%]">
            {selectedJob?.title}
          </h1>
          <div className="md:hidden">
            <h2 className="font-bold text-xl text-titleColor">
              {getSalary(selectedJob?.salary)}
            </h2>
            <p className="text-titleColor">
              Brutto, per year
            </p>
          </div>
        </div>
        <div>

          <div className="flex justify-between">
            <p className="text-base text-desСolor mb-2">
              {`Posted ${new Date(selectedJob !== null ? selectedJob.createdAt : '').toLocaleDateString()}`}
            </p>
            <div className="hidden md:flex md:flex-col md:items-end">
              <p className="text-titleColor">
                Brutto, per year
              </p>
              <h2 className="font-bold text-xl text-titleColor">
                {getSalary(selectedJob?.salary)}
              </h2>
            </div>
          </div>
        </div>

        {getDescription(selectedJob?.description)?.map((el, i) => (
          <div
            key={el}
            className={classNames(`
             text-titleColor mb-6`,
            { 'paragraph': i % 2 !== 0 })}>
            {i === 4
              ? (<ul className="list-[square]">
                {getList(el).map(item => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>)
              : el}
          </div>
        ))}

        <div className="md:flex md:justify-center">
          <ApplyNow />
        </div>

        <div className="">
          <h1
            className="
              font-bold text-3xl text-titleColor
              border-b-2 pb-[9px] mb-[15px]"
          >
              Additional info
          </h1>
          <p className="text-titleColor mb-2">
            Employment type
          </p>
          <div className="flex">
            {selectedJob?.employment_type.map(emplType => (
              <div
                key={emplType}
                className="
                 py-3 px-[76px] mr-2
                 font-bold text-base text-[#55699E]
                 bg-[#e1e6f4] border-2 border-[#b7c0da]
                 rounded-lg"
              >
                {emplType}
              </div>
            ))}
          </div>
          <p className="text-titleColor mb-2">
            Benefits
          </p>
          <div className="flex mb-[87px]">
            {selectedJob?.benefits.map(benefit => (
              <div
                key={benefit}
                className="
                 py-3 px-[70px] mr-2
                 font-bold text-base text-[#988B49]
                 bg-[#fdf8d9] border-2 border-[#FFCF00]
                 rounded-lg md:px-[30px]"
              >
                {benefit}
              </div>
            ))}
          </div>
          <h1
            className="
              font-bold text-3xl text-titleColor
              border-b-2 pb-[9px] mb-[15px]"
          >
            Attached images
          </h1>
          <div className="flex gap-4">
            {selectedJob?.pictures.map((image, i) => (
              <img
                key={i}
                src={image}
                alt="image"
                className="
                  w-[220px] h-[133px]
                  rounded-lg mb-[90px]
                  hover:scale-105 transition-all
                  object-cover"
              />
            ))}
          </div>
          <NavLink to={'/'}>
            <div
              className="
              w-[33%] mb-[90px]
              py-4 px-3 items-center
              font-semibold text-xs text-[#55699E]
              bg-[#e1e6f4] border-2 border-[#b7c0da]
              hover:bg-[#55699E] hover:text-[#e1e6f4] transition-all
              rounded-lg"
            >
              <HandySvg
                src={left}
                className="fill-[#7D859C] inline-block mr-[12px]"
                width="15"
                height="18"
              />
              {width < 700 ? 'RETURN' : 'RETURN TO JOB BOARD'}
            </div>
          </NavLink>
        </div>
      </div>

      <h1 className="
        hidden
        font-bold text-3xl text-titleColor
        border-b-2 pb-[9px] mb-[15px]
        lg:block"
      >
        Contacts
      </h1>
      <div
        className="relative
        w-[30%] h-[400px]
        bg-[#2A3047] rounded-lg
        overflow-hidden
        lg:mb-10 lg:w-[50%]"
      >
        <div
          className="h-[70%] w-[70%]
          rounded-full right-[55%] top-[-5%]
          absolute bg-[#202336]"
        >
        </div>
        <div className="h-[50%] py-8 px-[60px]
          relative text-mapTitle
          hd:px-[30px]"
        >
          <h1 className="font-bold text-xl pb-2">
            {selectedJob?.name}
          </h1>
          <img src={loc} alt="location" className="inline hd:h-4"/>
          <p className="inline-block text-base
          pl-2 pb-2 hd:font-light hd:text-sm">
            {selectedJob?.address}
          </p>
          <p>{selectedJob?.phone}</p>
          <p>{selectedJob?.email}</p>
        </div>
        <MapFragment />
      </div>
    </div>
  );
};
