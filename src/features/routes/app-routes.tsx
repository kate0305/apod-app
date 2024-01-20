import { Route, Routes } from "react-router-dom";
import { Layout } from '../ui/layout/layout';
import { MainPage } from "../../pages/main-page/main-page";
import { TodayPage } from "../../pages/today-page";
import { CalendarPage } from "../../pages/calendar";
import { ErrorPage } from "../../pages/error-page";
import { PhotoPage } from "../../pages/photo-page";


export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/today" element={<TodayPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/calendar/:photoId" element={<PhotoPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);
