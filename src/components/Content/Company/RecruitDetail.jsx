import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BoradDetail from "../../Borad/BoradDetail";
import { recruitList } from "../../../api/data";
import PageTitle from "../PageTitle";
import InnerBox from "../InnerBox";

const RecruitDetail = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const id = searchParams.get('recruitIdx');
  const getData = (id) => {
    const array = recruitList.filter(x => x.BASE_IDX === id);
    if (array.length === 1) {
      return array[0];
    }
    return null;
  }
  useEffect(() => {
    setData(getData(id));
  }, [id]);
  console.log(data)
  return (
    <InnerBox>
      <PageTitle title='채용공고' id='4' />
      <BoradDetail data={data} recruit />
    </InnerBox>
  )
}
export default RecruitDetail;
