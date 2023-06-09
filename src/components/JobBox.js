import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import S from "../css/JobBox.module.css";
import { context } from "../contexts/mainContext";
import { context as menuContext } from "../contexts/menuContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { convertTime } from "../utils/mainUtilis";
import { toast } from "react-toastify";

const JobBox = ({ url, element: { company, date, position, status, location, type, _id } }) => {
  const { dispatch } = useContext(context);
  const { dispatch: menuDispatch } = useContext(menuContext);

  const deleteItem = async (id) => {
    try {
      dispatch({ type: "JOBS_LOADING", playload: true });
      await fetch(`http://127.0.0.1:8000/api-v2/${id}`, {
        method: "DELETE",
      });

      const response = await fetch(`http://127.0.0.1:8000/api-v2?${url}`);
      const data = await response.json();

      toast.success("Job Deleted", {
        position: toast.POSITION.TOP_CENTER,
      });

      dispatch({ type: "GET_JOBS", playload: data });
    } catch (err) {
      console.log(err);
      toast.error("Error", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className={S.job_box}>
      <div className={S.top}>
        <div className={S.icon}>{position[0]}</div>
        <div className={S.info}>
          <div className={S.position}>{position}</div>
          <div className={S.company}>{company}</div>
        </div>
      </div>
      <div className={S.bottom}>
        <div className={S.detail}>
          <div>
            <div>
              <FaLocationArrow /> {location}
            </div>
            <div>
              <FaCalendarAlt /> {convertTime(date)}
            </div>
          </div>
          <div>
            <div>
              <MdWork /> {type}
            </div>
            <div className={S.state}>{status}</div>
          </div>
        </div>
        <div className={S.editing}>
          <div className={S.edit}>
            <Link onClick={() => menuDispatch({ type: "CHANGE_ACTIVE_SECTION" })} to="/add-jobs" state={{ element: { company, position, status, location, type, _id } }}>
              Edit
            </Link>
          </div>
          <div onClick={() => deleteItem(_id)} className={S.delete}>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBox;
