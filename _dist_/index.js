const url = 'https://platzi-avo.vercel.app';
const api = 'https://platzi-avo.vercel.app/api/avo';
const rootRender = document.querySelector('#root')

const fetchData = async() =>{
    const resp = await fetch(api);
    const { data } = await resp.json();  
    data.map(el =>{
        const container = document.createElement('div');
        const {image, price, name, id} = el;
        const html = `
        <img 
        class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" 
        src="${url}${image}" 
        alt="${id}">
        <div class="text-center md:text-left">
        <h2 class="text-lg">${name}</h2>
        <p class"text-gray-600">Price:${price}</p>
        </div>
        <hr/>
        `;
        container.innerHTML = html;
        rootRender.append(container);
        rootRender.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
        return container;
    });
} 

fetchData();