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
        <div className = "col pt2">
            <BannerParametersForm bannerParams = {props.bannerParams.bannerSize} 
                                  setBannerSize = {props.setBannerSize} />
            <Underlay underlayColors={props.bannerParams.underlayColors} 
                      onAddUnderlayColor = {props.onAddUnderlayColor} 
                      onDeleteUnderlayColor = {props.onDeleteUnderlayColor}/>
            <PictureParam picLink={props.bannerParams.picture.link} 
                          setPicLink={props.setPicLink} picScaleX={props.bannerParams.picture.scaleX} picScaleY={props.bannerParams.picture.scaleY}
                          setPicScaleX={props.setPicScaleX} setPicScaleY={props.setPicScaleY} />
            <Title titles={props.bannerParams.titles}
                     />



            <Destination destLink={props.bannerParams.destLink} setDestLink={props.setDestLink} />
            <Buttons />
        </div>
    )
}