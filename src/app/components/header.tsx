import { InputText } from "./input-text"

export const Header = () => {
    return (
        <header className="flex items-center">
            <div className="flex items-center gap-3">
                <h1 className="font-sans text-white font-extrabold text-3xl">devstore</h1>
                <InputText />
            </div>
            
        </header>
    )
}