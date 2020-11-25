export const Job = ({company,company_logo,company_url,created_at,title,type,location,url})=>{

    const jobHtml = ` <article class="jobs__job">
    <img src=${company_logo} alt="" class="job__logo">
    <div class="job__container">
        <h3 class="job__company">${company}</h3>

        <h2 class="job__title">${title}</h2>

        <div class="job__container--description">
            <h3 class="job__isfulltime">${type}</h3>
            <div class="job__container--description--flex">
            <p class="job__location"> <i class="fas fa-globe-asia"></i>${location}</p>
           <p class="job__time"><i class="far fa-clock"></i>${created_at.split(' ').slice(1,3).join(' ')}</p>
            
            </div>
        </div>
    </div>
</article>`

return jobHtml


}