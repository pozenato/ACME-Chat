import React from 'react';
import section from '../section';
import renderer from 'react-test-renderer';
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


describe("The ChatSection", ()=>{
    it("renders as expected", ()=> {
        const tree = renderer
        .create(<section.ChatSection tags={[`css`, `html`, `go`]} messages={messages}/>)
        .toJSON();
        
        expect(tree).toMatchSnapshot();
    })
})