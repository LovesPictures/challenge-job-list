import React, { useState, useEffect } from "react";
import ListData from "./Data/data.json";

//import Components
import Header from "./Header";
import Filter from "./Filter";
import JobList from "./JobList";
import Footer from "./Footer";

const App = () => {
  const [list, setList] = useState([]);
  const [filtering, setFiltering] = useState([]);

  useEffect(() => {
    filtering.length === 0 && setList(ListData);
  }, [filtering]);

  const filterList = (filter = "") => {
    if (!filtering.includes(filter) && filter !== "")
      setFiltering([...filtering, filter]);

    setList(
      list.filter((item) =>
        [item.role, item.level, ...item.languages, ...item.tools].includes(
          filter
        )
      )
    );
  };

  const removeFilter = (currentFilter) => {
    setFiltering(filtering.filter((element) => element !== currentFilter));
  };

  const clearFilters = () => {
    setFiltering([]);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      {filtering.length > 0 && (
        <div className="filtering">
          {filtering.map((filter, idx) => (
            <span className="tools-filter" key={idx}>
              <Filter item={filter} key={filter} />
              <button
                className="close-text-btn"
                onClick={() => removeFilter(filter)}
              ></button>
            </span>
          ))}
          <button className="clear-text-btn" onClick={clearFilters}>
            Clear Text
          </button>
        </div>
      )}
      <main>
        <div className="container">
          {list.map((item) => {
            return (
              <JobList list={item} key={item.company} filter={filterList} />
            );
          })}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default App;
