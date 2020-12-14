import React from "react";
import PropTypes from "prop-types";

const Repo = ({ repo }) => {
  return (
    <div className='card repo'>
      <a href={repo.html_url} target='_blank'>
        {repo.name}
      </a>
    </div>
  );
};

Repo.propTypes = { repo: PropTypes.object.isRequired };

export default Repo;
