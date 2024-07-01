import React, { useState } from "react"
import axios from "axios"

export default function GetPokemon() {

    const [pokedex, setPokedex] = useState(null)
    const [pokemon, setPokemon] = useState(null)

    async function handlePokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            setPokedex(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex items-center justify-center flex-col gap-5 bg-violet-400">
            <h1 className="border border-solid border-b-amber-700 rounded-2xl p-1 bg-white">Search Pokemon</h1>
            <input type="text" onChange={(e) => setPokemon(e.target.value) } />
            <button className="bg-white p-1 rounded-xl" onClick={handlePokemon}>search</button>


            {
              pokedex &&   
                        
                        <div className="mb-3 shadow-2xl shadow-violet-600 mt-11 rounded-lg p-4 flex flex-col items-center justify-center w-20 h-30 gap-3">
                            <p>{pokedex.name}</p>
                            <img src={pokedex.sprites.front_default} alt="" />
                            <p>shiny</p>
                            <img src={pokedex.sprites.front_shiny} alt="" />
                        </div>

            }
        </div>
    )
}