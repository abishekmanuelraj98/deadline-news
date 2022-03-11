import { useState, useEffect } from "react";

const useFetch = (category) => {
  const [dataList, setDataList] = useState({});
  const [loading, setLoading] = useState(dataList ? true : false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const fetchFunc = async (category) => {
    setLoading(true);
    const fetchData = fetch(
      `https://inshortsapi.vercel.app/news?category=${category}`
    );
    const response = (await fetchData).json();
    const data = await response;
    if (data) {
      setDataList(data);
      setLoading(false);
    } else if (!data) {
      setLoading(false);
      throw new Error("Cannot fetch data");
    }
  };

  useEffect(() => {
    fetchFunc(category).catch((err) => {
      console.error(err);
      setLoading(false);
      setIsError(true);
      setErrorMsg(`${err.message}.. Try refreshing`);
    });
  }, [category]);
  if (dataList !== {}) {
    return {
      category: dataList?.category,
      data: dataList?.data,
      isLoading: loading,
      isError,
      errorMsg,
    };
  }
};
export default useFetch;
