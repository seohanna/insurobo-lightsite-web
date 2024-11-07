import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BoradDetail from "../../Borad/BoradDetail";
import { getEventDetail } from "../../../api/benefits";
import PageTitle from "../PageTitle";


const EventDetail = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const id = searchParams.get('eventidx');

  useEffect(() => {
    getEventDetail(id).then((res) => {
        console.log(res.data)
      setData(res.data);
    })
  }, [id]);

  return (
    <>
      <PageTitle title='이벤트' />
      <BoradDetail data={data} event />
    </>
  )
}
export default EventDetail;