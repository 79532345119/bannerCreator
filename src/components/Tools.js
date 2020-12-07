import React from "react"
import { BannerParametersForm } from "./tools/BannerParametersForm"
import { Buttons } from "./tools/Buttons"
import { Destination } from "./tools/Destination"
import { PictureParam } from "./tools/PictureParam"
import { Title } from "./tools/Title"
import { Underlay } from "./tools/Underlay"


export const Tools = (props)=> {
    console.log(props)
    return (
        <div className = "col">
            <h1>Tools</h1>
            <BannerParametersForm bannerParams = {props.bannerParams} setBannerSize = {props.setBannerSize} />
            <Underlay onAddUnderlayColor = {props.onAddUnderlayColor} underlayColor = {props.underlayColor}/>
            <PictureParam />
            <Title />
            <Destination />
            <Buttons />
        </div>
    )
}