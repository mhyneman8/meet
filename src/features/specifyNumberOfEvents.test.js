import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from "jest-cucumber";
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let NumberOfEventsWrapper;

    test('When user has not specifed a number, 15 is the default nubmer.', ({ given, when, then }) => {
        given('The events have fully loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user doesn\'t specify the number of events', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
        });

        then('user will see a list of fifteen events.', () => {
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(15);
        });
    });
    test('User can change the number of events', ({ given, when, then }) => {
        given('the events have fully loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user changes the number of events', () => {
            const eventObject = { target: { value: 1 } };
            AppWrapper.find('.number-events').simulate('change', eventObject);
        });

        then('user will see the chosen number of events.', () => {
            NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(1);
        });
    });
});