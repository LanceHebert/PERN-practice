const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");
const pool = require("./db");
const res = require("express/lib/response");

// Middleware

app.use(cors());
app.use(express.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// create a jobs
app.post("/job", async (req, res) => {
  try {
    const { description } = req.body;
    const newJob = await pool.query(
      "INSERT INTO jobapp (description) VALUES($1) RETURNING * ",
      [description]
    );
    res.json(newJob);
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});
// get all job_search_app
app.get("/jobs", async (req, res) => {
  try {
    const allJobs = await pool.query("SELECT * FROM jobapp");
    res.json(allJobs.rows);
  } catch (err) {
    console.log(err);
  }
});

// get a job

app.get("/jobs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const job = await pool.query("SELECT * FROM jobapp WHERE jobApp_id = $1", [
      id,
    ]);
    res.json(job.rows)
  } catch (error) {
    console.log(error);
  }
});

// update a job
app.put("/jobs/:id",async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateJob = await pool.query("UPDATE jobapp SET description = $1 WHERE jobApp_id = $2",[description,id])
        res.json("Job was updated")
    } catch (error) {
        
    }
})



// delete a job


app.delete("/jobs/:id",async (req, res)=>{
    try {
        const  {id}  = req.params;
        const deleteJobs = await pool.query("DELETE FROM jobapp WHERE jobApp_id = $1",[id])
        res.json("Job was deleted")
    } catch (error) {
        
    }
})