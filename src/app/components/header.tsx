import { CartIcon } from "./cart-icon"
import { InputText } from "./input-text"
import Avatar from "../../../public/assets/avatar.png"
import Image from "next/image"

export const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <h1 className="font-sans text-white font-extrabold text-3xl">devstore</h1>
                <InputText />
            </div>
            <div className="flex items-center w-48 justify-between">
                <div className="flex items-center gap-2">
                    <CartIcon />
                    <label className="text-white text-sm hover:cursor-pointer">Cart (3)</label>
                </div>
                <span className="text-white text-sm text-gray">|</span>
                <div className="flex items-center gap-2">
                    <p className="text-white text-sm hover:cursor-pointer">Account</p>
                    <Image src={Avatar} alt="Icon Avatar" />
                </div>
            </div>
        </header>
    )
}