import React from "react"
import {create} from "react-test-renderer"
import {BannerParametersForm} from "./BannerParametersForm"


describe("BannerParametersForm component", ()=> {
    test("BannerParametersForm component renders correctly", ()=> {
        const component = create(<BannerParametersForm/>);
        expect(component).toMatchSnapshot();
    })
})