import React from 'react';
import components from '../components'
import renderer from 'react-test-renderer'

describe("The ChatMemberList Component", ()=>{
    it("renders as expected", ()=> {
        const tree = renderer
        .create(<components.chatMemberList tags={[`css`, `html`, `go`]}/>)
        .toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})