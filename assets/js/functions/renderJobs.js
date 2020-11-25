import { Job } from "./Job.js";
import { togleClass } from "./togleClass.js";

export const renderJobs = async (jobs)=>{

    const $loaderDom = document.querySelector('.lds-dual-ring')
    togleClass($loaderDom,'activeCenter')


    const jobsTorender = await jobs 
    const $jobsContainer = document.getElementById('jobsContainer')
    console.log('hola');
     console.log(jobsTorender);

     if(jobsTorender.length==0){
         alert('Not jobs found')
     }else{

        jobsTorender.forEach(job=>$jobsContainer.insertAdjacentHTML('beforeend',Job(job)))



     }
     togleClass($loaderDom,'activeCenter')
 

}