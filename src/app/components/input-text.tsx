'use client'

import { useFilter } from "../hooks/useFilter"
import { SearchIcon } from "./search-icon"

export const InputText = () => {
    const {search, setSearch} = useFilter()
    // console.log(search)
    return(
        <div className="flex items-center px-5 py-3 bg-light-black rounded-3xl gap-3 w-80">
            <SearchIcon />
            <input 
                onChange={(e) => setSearch(e?.target!.value)}
                type="text" 
                placeholder="Buscar produtos..."
                className="bg-light-black text-light-gray-2 outline-none border-transparent text-sm"/>
        </div>
    )
}