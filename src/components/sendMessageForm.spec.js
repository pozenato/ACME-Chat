import React from 'react';
import components from '../components'
import renderer from 'react-test-renderer'

describe("The Send Message Form", ()=>{
    it("renders as expected", ()=> {
        const tree = renderer
        .create(<components.sendMessageForm tags={[`css`, `html`, `go`]}/>)
        .toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})