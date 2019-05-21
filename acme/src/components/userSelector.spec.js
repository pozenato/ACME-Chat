import React from 'react';
import components from '../components'
import renderer from 'react-test-renderer'
import usersMacked from '../utils/chatUsers'

const userSelected = {   
    id: 1, 
    name: "Bugs Bunny", 
    image: "http://www.latimes.com/includes/projects/hollywood/portraits/bugs_bunny.jpg"     
}

describe("The User Selector", ()=>{
    it("renders as expected", ()=> {
        const tree = renderer
        .create(<components.userSelector tags={[`css`, `html`, `go`]} users={usersMacked} userSelected={userSelected}/>)
        .toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})