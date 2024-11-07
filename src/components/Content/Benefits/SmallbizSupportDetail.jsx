import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BoradDetail from "../../Borad/BoradDetail";
import { getBizSupportDetail } from "../../../api/benefits";


const SmallbizSupportDetail = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const id = searchParams.get('pblancseq');

  useEffect(() => {
    getBizSupportDetail(id).then((res) => {
      setData(res.data)
    })
  }, [id]);

  return (
    <>
      <BoradDetail data={data} />
    </>
  )
}
export default SmallbizSupportDetail;

