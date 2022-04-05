import React from "react";

// shape of the data
// {
//   "id": 1,
//   "company": "Photosnap",
//   "logo": "./images/photosnap.svg",
//   "new": true,
//   "featured": true,
//   "position": "Senior Frontend Developer",
//   "role": "Frontend",
//   "level": "Senior",
//   "postedAt": "1d ago",
//   "contract": "Full Time",
//   "location": "USA Only",
//   "languages": ["HTML", "CSS", "JavaScript"],
//   "tools": []
// },

const JobComponents = ({
  recent,
  company,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  filterFn,
}) => {
  const handleFilter = (skills) => {
    filterFn(skills);
  };

  const lsArr = [role, level];

  if (tools) {
    lsArr.push(...tools);
  }

  if (languages) {
    lsArr.push(...languages);
  }

  return (
    <>
      {/* features job */}
      <div className="details-container">
        <div className="job-detail-1">
          <p className="company">{company}</p>

          {recent ? <p className="recent">NEW!</p> : null}
          {featured ? <p className="featured">FEATURED</p> : null}
        </div>
        {/* job title */}
        <h4 className="position">{position}</h4>
        {/* postings */}
        <p className="job-detail-2">
          {postedAt} · {contract} · {location}
        </p>
      </div>

      {/* handling the filter */}
      <div className="job-detail-3">
        {" "}
        {lsArr
          ? lsArr.map((arr, idx) => (
              <span
                className="skillsSet"
                key={idx}
                onClick={() => handleFilter(arr)}
              >
                {arr}
              </span>
            ))
          : ""}
      </div>
    </>
  );
};

export default JobComponents;
