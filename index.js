const commonFun = (event) => {
    let id = parseInt(event.target.id);
    if (id !== 1005) {
        document.getElementById("oops").style.display = "none";
        document.getElementById("m1").innerHTML = "";
        fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
            .then(res => res.json())
            .then(data => formtaData(data));
    }
    else {
        document.getElementById("m1").innerHTML = "";
        document.getElementById("oops").style.display = "block";

    }
}

const formtaData = (data) => {
    const div = document.getElementById("m1");
    data.data.map((data) => {

        const titleClass = ['bg-[]'];
        const imgClass = [''];
        const authorName = ['bg-[#334155]'];
        const authorPic = ['bg-[#334155]'];
        const viwes = ['bg-[#334155]'];
        const iconClass = ['bg-[#334155]'];
        const dateClass = ['bg-[#334155]'];

        const m2 = ['rounded-lg', 'pb-3'];
        const m3t = ['flex', 'justify-center', 'bg-white', 'h-48', 'relative'];
        const m3tim = ['w-full', 'rounded-t-lg'];
        const m3tdate = ['absolute', 'bottom-2', 'end-2', 'bg-black', 'text-white', 'text-sm', 'rounded-sm'];
        const m3b = ['flex', 'space-x-2', 'items-start', 'ms-4'];
        const m3bt = ['rounded-lg', 'w-[35px]', 'h-[25px]', 'bg-white', 'mt-2'];
        const m3btim = ['w-[40px]', 'h-[35px]', 'rounded-full'];
        const m3bb = [];
        const m3bbh = [];
        const m3bbn = [];
        const m3bbv = [];
        const m3bbncheck = ['fa-solid', 'fa-check', 'text-white', 'bg-blue-900', 'p-[1px]', 'ms-2', 'rounded-full'];

        const elem2 = elementCreat2("div", m2);
        const elem3t = elementCreat2("div", m3t);
        const elem3tim = elementCreate(data.thumbnail, "img", m3tim);
        const elem3tdate = time(data.others.posted_date,m3tdate);
        const elem3b = elementCreat2("div", m3b);
        const elem3bt = elementCreat2("div", m3bt);
        const elem3btim = elementCreate(data.authors[0].profile_picture, "img", m3btim);
        const elem3bb = elementCreat2("div", m3bb);
        const elem3bbh = elementCreate(data.title, "h1", m3bbh);
        const elem3bbn = elementCreate(data.authors[0].profile_name, "h1", m3bbn);
        const elem3bbv = elementCreate(data.others.views, "h1", m3bbv);
        const elemm3bbncheck = check(data.authors[0].verified, "i", m3bbncheck);




        elem3t.appendChild(elem3tim);
        elem3t.appendChild(elem3tdate);
        elem2.appendChild(elem3t);

        elem3bt.appendChild(elem3btim);
        elem3b.appendChild(elem3bt);

        elem3bb.appendChild(elem3bbh);
        elem3bb.appendChild(elem3bbn);
        elem3bbn.appendChild(elemm3bbncheck);
        elem3bb.appendChild(elem3bbv);
        elem3b.appendChild(elem3bb);
        elem2.appendChild(elem3b);


        div.appendChild(elem2);







    })
}



const time = (data, clas)=>{
    let element =document.createElement("h1")
    element.classList.add(...clas);

    if(data===""){
        return element;
    }
    var timeMilis = parseInt(data) * 1000;

    var date = new Date(timeMilis);

    var hours = date.getHours();
    var minutes = date.getMinutes();
    element.innerHTML =`${hours}h ${minutes}m ago`;

    console.log(element);
    console.log("Minutes:", minutes);
    return element;
}

const elementCreat2 = (tag, clas) => {
    const element = document.createElement(tag);
    element.classList.add(...clas);
    return element;
}

const check = (data, tag, clas) => {
    const element = document.createElement(tag);
    if (data === true) {
        element.classList.add(...clas);
        return element;
    } else {
        return element;
    }
}

const elementCreate = (data, tag, clas) => {
    const element = document.createElement(tag);
    let str = data.substring(0, 4);

    if (str == "http") {
        element.setAttribute("src", data);
        element.classList.add(...clas);
        return element;
    }
    element.classList.add(...clas);
    element.innerHTML = data;
    return element;
}