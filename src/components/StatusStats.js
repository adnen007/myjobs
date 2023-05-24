import S from "../css/StatusStats.module.css";
import { FaSuitcaseRolling } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";
import { AiFillBug } from "react-icons/ai";

const StatusStats = ({ data: { pending, interview, declined } }) => {
  return (
    <div className={S.status_stats}>
      <div className={S.pending}>
        <div className={S.top}>
          <span>{pending}</span>
          <div className={S.icon}>
            <FaSuitcaseRolling />
          </div>
        </div>
        <div className={S.bottom}>Pending Application</div>
      </div>
      <div className={S.interview}>
        <div className={S.top}>
          <span>{interview}</span>
          <div className={S.icon}>
            <IoIosCheckbox />
          </div>
        </div>
        <div className={S.bottom}>Interviews Scheduled</div>
      </div>
      <div className={S.declined}>
        <div className={S.top}>
          <span>{declined}</span>
          <div className={S.icon}>
            <AiFillBug />
          </div>
        </div>
        <div className={S.bottom}> Jobs Declined</div>
      </div>
    </div>
  );
};

export default StatusStats;
