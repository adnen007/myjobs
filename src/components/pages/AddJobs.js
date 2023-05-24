import S from "../../css/AddJobs.module.css";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";

const AddJobs = () => {
  const [job, setJob] = useState({
    position: "",
    company: "",
    location: "",
    status: "interview",
    type: "full-time",
  });

  const onClear = (e) => {
    e.preventDefault();
    setJob({
      position: "",
      company: "",
      location: "",
      status: "interview",
      type: "full-time",
    });
  };

  const { state: locationState } = useLocation();

  const onSubmit = async (e) => {
    e.preventDefault();

    for (let x in job) {
      if (job[x] === "") window.alert("PLEASE FILL ALL THE FIELDS ");
    }

    if (!locationState) {
      const res = await fetch("http://127.0.0.1:8000/api-v2/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      await res.json();
      alert("JOB CREATED");
    } else {
      const res = await fetch(`http://127.0.0.1:8000/api-v2/${job._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      await res.json();
      alert("JOB updated");
      //update instead fo posting.
    }
  };

  useEffect(() => {
    if (locationState) {
      setJob(locationState.element);
    }
  }, [locationState]);

  return (
    <div className={S.add_jobs}>
      <div className="container">
        <div className={S.content}>
          <div className={S.title}> {`${locationState === "edit" ? "Edit" : "Add"}Jobs`}</div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className={S.row}>
              <label htmlFor="#position">Position</label>
              <input
                required="required"
                onChange={(e) => {
                  setJob({ ...job, position: e.currentTarget.value });
                }}
                id="position"
                type="text"
                value={job.position}
              />
            </div>
            <div className={S.row}>
              <label htmlFor="#company">Company</label>
              <input
                required
                onChange={(e) => {
                  setJob({ ...job, company: e.currentTarget.value });
                }}
                id="company"
                type="text"
                value={job.company}
              />
            </div>
            <div className={S.row}>
              <label htmlFor="#location">Job Location</label>
              <input
                required
                onChange={(e) => {
                  setJob({ ...job, location: e.currentTarget.value });
                }}
                id="location"
                type="text"
                value={job.location}
              />
            </div>
            <div className={S.row}>
              <label htmlFor="#status">Status</label>
              <select
                required
                onChange={(e) => {
                  setJob({ ...job, status: e.currentTarget.value });
                }}
                name="status"
                id="status"
                value={job.status}
              >
                <option value="inerview">interview</option>
                <option value="declined">declined</option>
                <option value="pending">pending</option>
              </select>
            </div>
            <div className={S.row}>
              <label htmlFor="#type">Job Type</label>
              <select
                required
                onChange={(e) => {
                  setJob({ ...job, type: e.currentTarget.value });
                }}
                name="type"
                id="#type"
                value={job.type}
              >
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>
                <option value="remote">remote</option>
                <option value="internship">internship</option>
              </select>
            </div>

            <div className={S.row}>
              <button type="button" onClick={(e) => onClear(e)} className={S.clear}>
                Clear
              </button>
              <button type="submit" className={S.submit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
