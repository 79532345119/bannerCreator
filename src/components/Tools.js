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
            <Underlay underlayColors={props.bannerParams.underlayColors} onAddUnderlayColor = {props.onAddUnderlayColor} onDeleteUnderlayColor = {props.onDeleteUnderlayColor}/>
            <PictureParam />
            <Title />
            <Destination />
            <Buttons />
        </div>
    )
}