import { Job } from "./Job.js";

export const renderJobs = async (jobs)=>{

    const jobsTorender = await jobs 
    const $jobsContainer = document.getElementById('jobsContainer')
    console.log('hola');
     console.log(jobsTorender);

     if(jobsTorender.length==0){
         alert('Not jobs found')
     }else{

        jobsTorender.forEach(job=>$jobsContainer.insertAdjacentHTML('beforeend',Job(job)))



     }
 

}