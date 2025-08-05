import {Barriecito, Inter} from "next/font/google"

export const titleFont = Barriecito({
    weight : "400",
    subsets : ["latin"],
    variable: "--title-font"
})

export const paragraphFont = Inter({
    weight : "400",
    subsets : ["latin"],
    variable: "--paragraph-font"
})