import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PhotoResp, SelectedPeriodReq } from './types';

const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export const nasaApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTodayPhoto: builder.query<PhotoResp, void>({
      query: () => ({
        url: '',
        params: { api_key: API_KEY },
      }),
    }),
    getPhotoOfSelectedDay: builder.query<PhotoResp, string>({
      query: (date) => ({
        url: '',
        params: { api_key: API_KEY, date },
      }),
    }),
    getPhotosOfSelectedPeriod: builder.query<PhotoResp[], SelectedPeriodReq>({
      query: ({ startDay, endDay }) => ({
        url: '',
        params: { api_key: API_KEY, start_date: startDay, end_date: endDay },
      }),
    }),
  }),
});

export const { useGetTodayPhotoQuery, useGetPhotoOfSelectedDayQuery, useGetPhotosOfSelectedPeriodQuery } =
  nasaApi;
