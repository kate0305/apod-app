import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PhotoResp } from '../../services/types';

type Dates = {
  startDate?: string | null;
  endDate?: string | null;
};

interface PhotosReducerState {
  photosData: PhotoResp[];
  dates: Dates;
  //   startDate: string | null;
  //   endDate: string | null;
}

export const initialState: PhotosReducerState = {
  photosData: [],
  dates: {
    startDate: null,
    endDate: null,
  },
  //   startDate: null,
  //   endDate: null,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotosData(state, action: PayloadAction<PhotoResp[]>) {
      state.photosData = action.payload;
    },
    setDates(state, action: PayloadAction<Dates>) {
      state.dates.startDate = action.payload.startDate;
      state.dates.endDate = action.payload.endDate;
    },
    clearPhotosData(state) {
      state.photosData = [];
    },
  },
});

export const { setPhotosData, setDates, clearPhotosData } = photosSlice.actions;
export const photosReduser = photosSlice.reducer;
