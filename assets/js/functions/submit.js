import { cleanDom } from "./cleanDom.js"
import { renderJobs } from "./renderJobs.js"
import { getJobsApi } from "./serviceApi.js"

export const formSubmit = (e)=>{

    //-----------prevent refresh page
     
    e.preventDefault()

    //-----------clean section jobs dom
    const element = document.querySelectorAll('.jobs__job')
    cleanDom ( element)

    const $inputValue = document.getElementById('searchJobs')
     

    const value = $inputValue.value

    // const urlJobs = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${encodeURIComponent(value)}`
    const urlJobs = `https://api.allorigins.win/https://jobs.github.com/positions.json?description=${encodeURIComponent(value)}`

    const jobs = getJobsApi(urlJobs)

    renderJobs(jobs)




}