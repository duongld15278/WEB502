import { get } from "../api/pokemons"
import Header from "../components/header"
import Pokemon from "../models/Pokemons"

const DetailPage = {
    render: async (id: number) => {
        const data = await get(id)
        const poke: Pokemon = data.data
        const type: any = poke.type
        const abilities: any = poke.abilities

        return `
        ${Header.render()}
        <div class="mx-auto container m-3">
            <h1 class="text-center text-2xl">Who's That Pokémon?</h1>
            <div class="mx-auto flex justify-between w-2/6  font-bold rounded-md bg-gray-500 text-white py-10">
                <div class="mx-5">
                    <h1 class="">Name: ${poke.name}</h1>
                    <h1 class="">Abilities: 
                        ${abilities.map((abi: any) => `
                            ${abi.ability.name}
                        `)}
                    </h1>
                    <h1 class="flex">Type: 
                        ${type.map((t: any) => `
                            ${t.type.name}
                        `).join()}
                    </h1>
                    <h1 class="">Height: ${poke.height}</h1>
                    <h1 class="">Weight: ${poke.weight}</h1>
                </div>
                <img class="mx-auto drop-shadow-md" src="${poke.image}"/>
            </div>
        </div>
        `
    }
}
export default DetailPage