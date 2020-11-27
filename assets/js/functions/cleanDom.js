export const cleanDom =(elementDom) =>{

    console.log(  elementDom);
    elementDom?elementDom.forEach(el=>el.remove()):''
    
}