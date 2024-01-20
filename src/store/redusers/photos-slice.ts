import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PhotoResp } from '../../services/types';

interface PhotosReducerState {
  photosData: PhotoResp[];
}

export const initialState: PhotosReducerState = {
  photosData: [],
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotosData(state, action: PayloadAction<PhotoResp[]>) {
      state.photosData = action.payload;
    },
    clearPhotosData(state) {
      state.photosData = [];
    },
  },
});

export const { setPhotosData, clearPhotosData } = photosSlice.actions;
export const photosReduser = photosSlice.reducer;
