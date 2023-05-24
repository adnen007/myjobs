import S from "../css/Search.module.css";

const Search = ({ query, setQuery }) => {
  return (
    <div className={S.search}>
      <div className="container">
        <div className={S.content}>
          <div className={S.title}> Search Form</div>
          <form>
            <div className={S.row}>
              <label htmlFor="#search">Search</label>
              <input
                id="search"
                type="text"
                value={query.searchText}
                onChange={(e) => {
                  setQuery({ ...query, searchText: e.currentTarget.value, page: 0 });
                }}
              />
            </div>
            <div className={S.row}>
              <label htmlFor="#status">Status</label>
              <select value={query.status} name="status" id="status" onChange={(e) => setQuery({ ...query, status: e.currentTarget.value, page: 0 })}>
                <option value="">all</option>
                <option value="interview">interview</option>
                <option value="declined">declined</option>
                <option value="pending">pending</option>
              </select>
            </div>
            <div className={S.row}>
              <label htmlFor="#type">Type</label>
              <select value={query.type} name="type" id="#type" onChange={(e) => setQuery({ ...query, type: e.currentTarget.value, page: 0 })}>
                <option value="">all</option>
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>
                <option value="remote">remote</option>
                <option value="internship">internship</option>
              </select>
            </div>
            <div className={S.row}>
              <label htmlFor="#sort">Sort</label>
              <select value={query.sort} name="sort" id="#sort" onChange={(e) => setQuery({ ...query, sort: e.currentTarget.value, page: 0 })}>
                <option value="latest">latest</option>
                <option value="oldest">oldest</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
              </select>
            </div>

            <div className={S.row}>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setQuery({ searchText: "", status: "", type: "", sort: "", page: 0 });
                }}
              >
                Clear Filters
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
