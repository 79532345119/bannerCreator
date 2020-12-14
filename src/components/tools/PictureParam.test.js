import React from "react"
import {create} from "react-test-renderer"
import {PictureParam} from "./PictureParam"


describe("PictureParam component", ()=> {
    test("PictureParam component renders correctly", ()=> {
        const component = create(<PictureParam/>);
        expect(component).toMatchSnapshot();
    })
})