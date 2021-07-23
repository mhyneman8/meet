import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test('Show more button is rendered', () => {
        EventWrapper.setState({
            show: false,
        });
        expect(EventWrapper.find('.show-more')).toHaveLength(1);
    });
    
    test('Show less button is rendered', () => {
        EventWrapper.setState({
            show: true,
        });
        expect(EventWrapper.find('.show-less')).toHaveLength(1);
    });

    test('Details are hidden after show-less is clicked', () => {
        EventWrapper.setState({
            show: true,
        });
        EventWrapper.find('.show-less').simulate('click');
        expect(EventWrapper.state('show')).toEqual(false);
    })

    test('Show is changed on click', () => {
        EventWrapper.setState({
            show: false,
        });
        
        EventWrapper.find('.show-more').simulate('click');
        expect(EventWrapper.state('show')).toEqual(true);
    });

    test('render list of event', () => {
        expect(EventWrapper.find('.event-title')).toHaveLength(1);
    })

    test('hide details by default', () => {
        EventWrapper.setState({ 
            show: false,
        });
        expect(EventWrapper.find('.details')).toHaveLength(0);
    })

    test('details are shown when show: true', () => {
        EventWrapper.setState({
            show: true,
        });
        expect(EventWrapper.find('.details')).toHaveLength(1);
    })

    test('basic event details are shown', () => {
        expect(EventWrapper.find('.event-location')).toHaveLength(1);
        expect(EventWrapper.find('.event-title')).toHaveLength(1);
        expect(EventWrapper.find('.event-dateTime')).toHaveLength(1);
    })

})