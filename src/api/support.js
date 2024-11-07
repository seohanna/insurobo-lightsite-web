import { CommonApi } from "./CommonApi"

export const getNoticeList = async (page, per_page) => {
  return CommonApi.get(
    `/api/info/notice_list?page=${page}&per_page=${per_page}`
  );
};

export const getNoticeDetail = async (id) => {
  return CommonApi.get(
    `/api/info/event_detail?eventidx=${id}`);
};
