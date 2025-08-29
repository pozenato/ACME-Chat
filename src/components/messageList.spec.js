import React from 'react';
import components from '../components'
import renderer from 'react-test-renderer'
import moment from 'moment';

const messages = [
    {
        date: moment(),
        id: 0.10333680223058983,
        text: "asdfasdf",
        userMessage: {id: 3, name: "Daffy Duck", image: "https://vignette.wikia.nocookie.net/characters/images/f/f3/1.jpg/revision/latest?cb=20110511195714"},
    },
    {
        date: moment(),
        id: 0.10333680223058973,
        text: "asdfasdf",
        userMessage: {id: 3, name: "Daffy Duck", image: "https://vignette.wikia.nocookie.net/characters/images/f/f3/1.jpg/revision/latest?cb=20110511195714"},
    }
]

describe("The Message List Component", ()=>{
    it("renders as expected", ()=> {
        const tree = renderer
        .create(<components.messageList tags={[`css`, `html`, `go`]} messages={messages}/>)
        .toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})