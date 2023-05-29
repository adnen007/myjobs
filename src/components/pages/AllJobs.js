import S from "../../css/AllJobs.module.css";
import Search from "../Search";
import JobBox from "../JobBox";
import Pagination from "../Pagination";
import { useState, useContext } from "react";
import { convertQueryToUrl } from "../../utils/mainUtilis";
import { context } from "../../contexts/mainContext";
import { useEffect } from "react";
import Loading from "../Loading";

const AllJobs = () => {
  const { state, dispatch } = useContext(context);
  const [query, setQuery] = useState({
    searchText: "",
    status: "",
    type: "",
    sort: "latest",
    page: 0,
  });
  let url = convertQueryToUrl(query);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({ type: "JOBS_LOADING", playload: true });

        const response = await fetch(`http://127.0.0.1:8000/api-v2?${url}`);
        const data = await response.json();

        dispatch({ type: "GET_JOBS", playload: data });
      } catch (err) {
        console.log(err);
        dispatch({ type: "ERROR", playload: true });
        alert("something went wrong check your internet or try later");
      }
    };

    getData();
  }, [query, dispatch]);

  return (
    <div className={S.all_jobs}>
      <Search query={query} setQuery={setQuery} />
      {state.jobsStatus.loading ? (
        <Loading />
      ) : (
        <>
          <div className={S.jobs_list}>
            <div className="container">
              <h2>{state.jobs.jobsNumber} Jobs Found</h2>
              <div className={S.content}>
                {state.jobs.jobsList.map((e) => {
                  return (
                    <div key={e._id}>
                      <JobBox url={url} element={e} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
      <Pagination query={query} setQuery={setQuery} />
    </div>
  );
};

export default AllJobs;

// fetch the data in useEffect when you want to fetch the data in the first render or when
// you want to fetch the data whenever a peice of the state changed

// fetch the data in an event handler when you want to fetch the data whenever an event happens
