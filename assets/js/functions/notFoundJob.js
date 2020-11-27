export const notFoundJob = ()=>{
    const img = `<img class='notfoundImg' src="../assets/images/notfound.png" alt=""/>`
    // const img = document.createElement('img')
    // img.setAttribute('src','../assets/images/notfound.png')
    // img.classList.add('notfoundImg')
    const containerJobs = document.getElementById('jobsContainer')
    containerJobs.innerHTML = img
}