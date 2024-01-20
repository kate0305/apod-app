export type SelectedPeriodReq = {
  startDate: string;
  endDate: string;
};

export type PhotoResp = {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
