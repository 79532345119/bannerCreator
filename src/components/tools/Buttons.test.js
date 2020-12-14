import React from "react"
import {create} from "react-test-renderer"
import {Buttons} from "./Buttons"


describe("Button component", ()=> {
    test("Button component renders correctly", ()=> {
        const component = create(<Buttons/>);
   
        expect(component).toMatchSnapshot();
    })
})