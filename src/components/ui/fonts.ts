import {Barriecito, Inter, IBM_Plex_Sans} from "next/font/google"

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

export const subtitle = IBM_Plex_Sans({
    weight : "700",
    subsets : ["latin"],
    variable: "--subtitle-font"
})