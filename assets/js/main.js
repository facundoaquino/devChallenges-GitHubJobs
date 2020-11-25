import { renderJobs } from './functions/renderJobs.js'
import {getJobsApi} from './functions/serviceApi.js'

const defaultLocation='new york'

const urlJobs = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${encodeURIComponent(defaultLocation)}`


const jobs = getJobsApi(urlJobs)


/*---------------------- dom references ---------------------*/


 

renderJobs(jobs)