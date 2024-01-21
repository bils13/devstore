'use client'

import { ReactNode, useState, createContext } from "react"

export const FilterContext = createContext({
    setSearch: (value: string) => {},
    search: '',
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({children}: ProviderProps) {
    const [search, setSearch] = useState('')

    return(
        <FilterContext.Provider value={{setSearch, search}}>
            {children}
        </FilterContext.Provider>
    )
}
