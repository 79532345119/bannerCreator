import React from "react"
import { BannerParametersForm } from "./tools/BannerParametersForm"
import { Buttons } from "./tools/Buttons"
import { Destination } from "./tools/Destination"
import { PictureParam } from "./tools/PictureParam"
import { Underlay } from "./tools/Underlay"


export const Tools = ()=> {
    return (
        <div className = "col">
            <h1>Tools</h1>
            <BannerParametersForm />
            <Underlay />
            <PictureParam />
            <Destination />
            <Buttons />

        </div>
    )
}