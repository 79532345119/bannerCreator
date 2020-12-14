import React from "react"
import {create} from "react-test-renderer"
import App from "./App"


describe("App component", ()=> {
    test("App component renders correctly", ()=> {
        const component = create(<App/>);
        expect(component).toMatchSnapshot();
    })
})