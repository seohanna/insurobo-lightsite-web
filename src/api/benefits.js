import { CommonApi } from "./CommonApi";


export const getBizSupportList = async (page, per_page, searchCodeA, searchDvsn, searchStr) => {
  return CommonApi.get(
    `/api/info/smallbiz_support_list?${searchCodeA && `searchCodeA=${searchCodeA}&`}${searchStr && `searchDvsn=${searchDvsn}&searchStr=${searchStr}&`}page=${page}&per_page=${per_page}`
  );
};

export const getBizSupportDetail = async (id) => {
  return CommonApi.get(
    `/api/info/smallbiz_support_detail?pblancseq=${id}`);
};

export const getCivilSafetyList = async (page, per_page, searchDvsn, searchStr) => {
  return CommonApi.get(
    `/api/info/citizen_safety_list?${searchDvsn && `searchDvsn=${searchDvsn}&`}${searchStr && `searchStr=${searchStr}&`}page=${page}&per_page=${per_page}`
  );
};

export const getEventList = async () => {
  return CommonApi.get(`/api/info/event_list?page=1&per_page=10`);
}

export const getEventDetail = async (id) => {
  return CommonApi.get(`/api/info/event_detail?eventidx=${id}`);
}