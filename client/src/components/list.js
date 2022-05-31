import React, { useEffect, useState } from "react";

function List() {
  const [jobs, setJobs] = useState([]);
  const [toggle, setToggle] = useState(false);

  const deleteJobs = async (job) => {
    try {
      const response = await fetch(
        `http://localhost:9000/jobs/${job.jobapp_id}`,
        {
          method: "DELETE",
        }
      ).then(() => {console.log(`Deleted Job ${job.description}`)
    setToggle(!toggle)
    });
    } catch (error) {
      console.log(error);
    }
  };

  const getJobs = async () => {
    try {
      const response = await fetch("http://localhost:9000/jobs");
      const jsonData = await response.json();
      setJobs(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, [toggle]);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>edit</th>
            <th>Delete</th>
          </tr>

          {jobs.map((job) => {
            return (
              <tr key={job.jobapp_id}>
                <td>{job.description}</td>
                <td>Edit</td>
                <td onClick={() => deleteJobs(job)}>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
