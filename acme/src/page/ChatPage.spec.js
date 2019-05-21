import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import page from "../page";
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("Chat Page", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <page.ChatPage />
                </Provider>
            ).exists(<h1>ACME Discussions</h1>)
        ).toBe(false);
    });
});