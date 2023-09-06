const p = document.querySelectorAll('p');

p.forEach(elem =>{
    const text = elem.textContent;
    const span = document.createElement('span');
    span.textContent = text;
    if(elem.textContent.length > 25){
        var isMore = true;
        var isSliced = true;
        elem.textContent = "";
        const sliced = span.textContent.slice(0, 25);
        span.textContent = `${sliced}...` ;
        const a = document.createElement('a');
        a.textContent = "Read more";
        a.addEventListener('click', ()=>{
            isSliced = !isSliced;
            span.textContent = (isSliced) ? `${sliced}...` : text;
            isMore = !isMore;
            a.textContent = (isMore) ? "Read more" : "Read less";
        })
        elem.append(span, a);
    }
})