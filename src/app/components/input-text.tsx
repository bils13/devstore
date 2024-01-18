'use client'

export const InputText = () => {
    return(
        <div className="flex items-center px-5 py-3 bg-light-black rounded-3xl">
            <input 
                type="text" 
                placeholder="Buscar produtos..."
                className="bg-light-black text-light-gray-2 outline-none border-transparent"/>
        </div>
    )
}