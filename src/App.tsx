import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetJobsQuery } from './api/generalApi';
import './App.css';
import { Card } from './components/Card';
import { DetailedPage } from './components/DetailedPage';
import { Loader } from './components/Loader';
import { Pagination } from './components/Pagination';
import { Data } from './types/types';

function App() {
  const { data: jobs = [], isLoading } = useGetJobsQuery();
  const [visibleJobs, setVisibleJobs] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [amountPages, setAmountPages] = useState<number>(0);

  const [idStars1, setIdStars1] = useState<string>('');
  const [idStars2, setIdStars2] = useState<string>('');

  const [selectedJob, setSelectedJob] = useState<Data | null>(() => {
    const selJob = localStorage.getItem('selectedJob');

    try {
      return selJob ? JSON.parse(selJob) : null;
    } catch (error) {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem('selectedJob', JSON.stringify(selectedJob));
  }, [selectedJob]);

  useEffect(() => {
    setVisibleJobs(jobs.slice((currentPage * 5) - 5, currentPage * 5));
    setAmountPages(jobs.length / 5);
  }, [jobs.length, currentPage]);

  useEffect(() => {
    if (jobs.length > 0) {
      setIdStars1(jobs[0].id);
      setIdStars2(jobs[2].id);
    };
  }, [jobs.length]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div className="container mx-auto pt-7">
            {isLoading
              ? <Loader />
              : visibleJobs.map(job => (
                <Card
                  key={job.id}
                  job={job}
                  idStars1={idStars1}
                  idStars2={idStars2}
                  setSelectedJob={setSelectedJob}
                />
              )) }
            {jobs.length > 0 && <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              amountPages={amountPages}
            />}
          </div>
        } />
        <Route path="/:jobId" element={(
          <DetailedPage selectedJob={selectedJob} />
        )}/>
      </Routes>
      {(jobs.length === 0 && !isLoading) && (
        <h1 className="text-titleColor font-bold text-xl text-center">
          Page not found
        </h1>
      )}
    </div>
  );
}

export default App;
