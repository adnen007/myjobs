import { useEffect, useContext, useState } from "react";
const useFetch = (url, context) => {
  const [data, setData] = useState({});

  const { state, dispatch } = useContext(context);

  useEffect(() => {
    //  .count("one effect render");
    console.log("before the dispatch");

    const getData = async () => {
      try {
        dispatch({ type: "JOBS_LOADING", playload: true });

        const response = await fetch(`http://127.0.0.1:8000/api-v2?${url}`);
        const data = await response.json();

        console.log("after awiat");
        // dispatch({ type: "GET_JOBS", playload: data });
        setData(data);
      } catch (err) {
        console.log(err);
        dispatch({ type: "JOBS_ERROR", playload: err });
      }
    };
    getData();
  }, []);

  return { data };
};

export default useFetch;

// I met many problems working with the custom hook and also with dispatch with things that i
// still didn't use to use them i'll try firt to solide my knowledge learng redux then come
// back to learn this
