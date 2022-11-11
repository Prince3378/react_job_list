import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../types/types';

const BASE_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
const API_KEY = process.env.REACT_APP_API_KEY;

export const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  tagTypes: ['jobs'],

  endpoints: (builder) => ({
    getJobs: builder.query<Data[], void>({
      query: () => `?access_token=${API_KEY}`,
      providesTags: ['jobs'],
    }),
  }),
});

export const { useGetJobsQuery } = api;
