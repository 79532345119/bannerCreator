import React from "react"
import {create} from "react-test-renderer"
import {Destination} from "./Destination"


describe("Destination component", ()=> {
    test("Destination component renders correctly", ()=> {
        const component = create(<Destination props="link"/>);
        expect(component).toMatchSnapshot();
    })
})

