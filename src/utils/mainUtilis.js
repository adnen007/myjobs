const convertQueryToUrl = (query) => {
  let url = "";

  if (query.searchText) {
    url = `${url}position=${query.searchText}&`;
  }
  if (query.status) {
    url = `${url}status=${query.status}&`;
  }
  if (query.type) {
    url = `${url}type=${query.type}&`;
  }
  if (query.page || query.page === 0) {
    url = `${url}page=${query.page}&`;
  }
  if (query.sort) {
    if (query.sort === "a-z") {
      url = `${url}sort[position]=1&`;
    } else if (query.sort === "z-a") {
      url = `${url}sort[position]=-1&`;
    }
    if (query.sort === "oldest") {
      url = `${url}sort[date]=1&`;
    }
    if (query.sort === "latest") {
      url = `${url}sort[date]=-1&`;
    }
  }

  return url;
};

const convertTime = (date) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  date = date.split("-");
  return ` ${months[date[1] - 1]} ${date[2].slice(0, 2)}th, ${date[0]}`;
};

const fetchJsonData = async (url, option) => {
  const result = {};

  try {
    const res = await fetch(`http://127.0.0.1:8000/api-v2${url}`, { ...option });
    const { data } = await res.json();

    result.data = data;
  } catch (err) {
    result.err = err;
  }

  return result;
};
export { convertQueryToUrl, convertTime, fetchJsonData };
