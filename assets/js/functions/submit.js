import { renderJobs } from "./renderJobs.js"
import { getJobsApi } from "./serviceApi.js"

export const formSubmit = (e)=>{
  
    e.preventDefault()
    const $inputValue = document.getElementById('searchJobs')
     

    const value = $inputValue.value

    const urlJobs = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${encodeURIComponent(value)}`

    const jobs = getJobsApi(urlJobs)

    renderJobs(jobs)




}