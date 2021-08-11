import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let EventWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the main page is open.', () => {
            AppWrapper = mount(<App />);
        });
        when('the user first sees the event list', () => {
            expect(AppWrapper.find('.EventList')).toHaveLength(1);
        });
        then('user will see the details of the event collapsed by default.', () => {
            expect(AppWrapper.find('.details')).toHaveLength(0);
        });
    });
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the elements are collapsed', () => {
            EventWrapper = shallow(<Event event={mockData[1]} />);
            expect(EventWrapper.find('.details')).toHaveLength(0);
        });
        when('the user clicks on see more button', () => {
            EventWrapper.find('.details-btn').simulate('click');
        });
        then('the event info will be shown.', () => {
            expect(EventWrapper.find('.details')).toHaveLength(1);
        });
    });
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the event info is shown', () => {
            // EventWrapper.find('.details-btn').simulate('click');
            expect(EventWrapper.find('.details')).toHaveLength(1);
        });
        when('the user clicks see less button', () => {
            EventWrapper.find('.details-btn').simulate('click');
        });
        then('the event info will hide.', () => {
            expect(EventWrapper.find('.details')).toHaveLength(0);
        });
    })
})