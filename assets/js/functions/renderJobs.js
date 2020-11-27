import { cleanDom } from "./cleanDom.js";
import { Job } from "./Job.js";
import { notFoundJob } from "./notFoundJob.js";
import { togleClass } from "./togleClass.js";

export const renderJobs = async (jobs)=>{

    const $loaderDom = document.querySelector('.lds-dual-ring')
    const $notfound = document.querySelector('.notfoundImg')
    cleanDom($notfound)
    togleClass($loaderDom,'activeCenter')



    const jobsTorender = await jobs 
    const $jobsContainer = document.getElementById('jobsContainer')
    
     console.log(jobsTorender);

     if(jobsTorender.length==0){
            const element = document.querySelectorAll('.jobs__job')
            // cleanDom ( element)
            notFoundJob()

     }else{





        jobsTorender.forEach(job=>$jobsContainer.insertAdjacentHTML('beforeend',Job(job)))



     }
     togleClass($loaderDom,'activeCenter')
 

}