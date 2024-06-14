import React, { useState } from "react"
import axios from "axios"

export default function GetCep() {

    const [cep, setCep] = useState(null)
    const [address, setAddress] = useState(null)

    async function handleAddress(){
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setAddress(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
    <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-4 bg-yellow-200 ">
        <h1 className="text-4xl text-blue-500">Busque seu cep aqui</h1>
          
      
            <input placeholder="Digite seu cep" type="number" name="" id="" className="border border-solid border-black" onChange={(e) => setCep(e.target.value)} />

            <button type="button" className="border-black border-solid rounded-md bg-white" onClick={handleAddress}>Buscar</button>

        </div>
        {
            address  &&

            <div>

                <p>Rua: {address.logradouro}</p>
                <p>DDD: {address.ddd}</p>
                <p>Bairro: {address.bairro}</p>
                <p>Localidade: {address.localidade}</p>

            </div>
        }
    </div>
    )
}