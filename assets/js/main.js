import {getJobsApi} from './controllers/serviceApi.js'

const defaultLocation='london'

const urlJobs = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${defaultLocation}`


getJobsApi(urlJobs)
