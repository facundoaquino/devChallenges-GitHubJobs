import { renderJobs } from './functions/renderJobs.js'
import {getJobsApi} from './functions/serviceApi.js'
import {formSubmit} from './functions/submit.js'


const defaultLocation='new york'

const urlJobs = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${encodeURIComponent(defaultLocation)}`


const jobs = getJobsApi(urlJobs)

renderJobs(jobs)

/*---------------------- dom references ---------------------*/


const $submit = document.getElementById('formSearch')

$submit.addEventListener('submit', formSubmit )


 
