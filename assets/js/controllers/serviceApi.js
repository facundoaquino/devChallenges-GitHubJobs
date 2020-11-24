



export const getJobsApi= async (url)=>{

    const response = await fetch(url)
    
    const json = await response.json()
    console.log(json);
}
