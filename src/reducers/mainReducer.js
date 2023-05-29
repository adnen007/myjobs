const mainReducer = (state, action) => {
  if (action.type === "STATS") {
    const jobStats = action.playload.reduce(
      (final, element) => {
        if (element.status === "pending") {
          final.pending += 1;
        } else if (element.status === "declined") {
          final.declined += 1;
        } else if (element.status === "interview") {
          final.interview += 1;
        }
        return final;
      },
      { pending: 0, declined: 0, interview: 0 }
    );

    const date = new Date();
    const beforeSix = date.setMonth(date.getMonth() - 6);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let monthlyStats = action.playload.reduce((final, element) => {
      const elementDate = new Date(element.date);
      const monthAndyear = months[elementDate.getMonth()] + " " + elementDate.getFullYear();

      if (elementDate >= beforeSix) {
        final[monthAndyear] = final[monthAndyear] === undefined ? 1 : final[monthAndyear] + 1;
      }

      return final;
    }, {});

    monthlyStats = Object.entries(monthlyStats).sort((a, b) => {
      if (a[0].split(" ")[1] !== b[0].split(" ")[1]) {
        return a[0].split(" ")[1] - b[0].split(" ")[1];
        // when return positive (b > a) it will put the b before a
        // and when it return negative ( b > a) it will but the a before b
      } else {
        return months.indexOf(a[0].split(" ")[0]) - months.indexOf(b[0].split(" ")[0]);
      }
    });

    monthlyStats = monthlyStats.map((e) => {
      return { date: e[0], count: e[1] };
    });

    return { ...state, stats: { ...state.stats, jobStats, monthlyStats }, jobsStatus: { ...state.jobsStatus, err: false, loading: false } };
  }

  if (action.type === "GET_JOBS") {
    return { ...state, jobs: { ...state.jobs, jobsList: action.playload.data, jobsNumber: action.playload.length }, jobsStatus: { ...state.jobsStatus, loading: false, err: false } };
  }
  if (action.type === "JOBS_LOADING") {
    return { ...state, jobsStatus: { ...state.jobsStatus, loading: action.playload } };
  }
  if (action.type === "ERROR") {
    return { ...state, jobsStatus: { ...state.jobsStatus, err: action.playload } };
  }
};

export default mainReducer;
