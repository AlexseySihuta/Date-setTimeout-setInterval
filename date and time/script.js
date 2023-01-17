setInterval(()=>{
    let date = new Date;
    dd = date.getDate();
    mm = date.getMonth();
    yy = date.getFullYear();
    if(dd < 10) document.querySelector('.date').innerHTML = `0${dd}:${mm + 1}:${yy}`
     else if(mm < 10) document.querySelector('.date').innerHTML = `${dd}:0${mm + 1}:${yy}`
     else document.querySelector('.date').innerHTML = `${dd}:${mm + 1}:${yy}`

    hh = date.getHours();
    mi = date.getMinutes();
    ss = date.getSeconds();
    if(hh < 10) document.querySelector('.time').innerHTML = `0${hh}:${mi}:${ss}`
     else if(mi < 10) document.querySelector('.time').innerHTML = `${hh}:0${mi}:${ss}`
     else if(ss < 10) document.querySelector('.time').innerHTML = `${hh}:${mi}:0${ss}`
     else document.querySelector('.time').innerHTML = `${hh}:${mi}:${ss}`
}, 1000)