import React from 'react';
import components from '../components'
import renderer from 'react-test-renderer'

describe("The Search Table Component", ()=>{
    it("renders as expected", ()=> {
        const tree = renderer
        .create(<components.searchTable tags={[`css`, `html`, `go`]}/>)
        .toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})