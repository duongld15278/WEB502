import { getAll } from "../api/pokemons"
import Pokemon from "../models/Pokemons";

const HomePage = {

    render: async () => {
        const data = await getAll()
        console.log(data.data);
        return `
        <h1 class="text-center font-bold text-2xl my-5">Home Page</h1>
        <div class="grid grid-cols-6 container mx-auto">
            ${data.data.map((item: Pokemon) => `
            <a href="/pokemon/${item.id}" class="text-center border-2 m-2 rounded">
                <img class="mx-auto" src="${item.image}"/>
                <p>${item.name}</p>
            </a>
            `).join('')}
        </div>
        
        `
    }
}
export default HomePage