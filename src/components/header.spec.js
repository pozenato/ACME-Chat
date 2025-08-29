import React from 'react';
import components from '../components'
import renderer from 'react-test-renderer'

describe("The Header", ()=>{
    it("renders as expected", ()=> {
        const tree = renderer
        .create(<components.header tags={[`css`, `html`, `go`]}/>)
        .toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})