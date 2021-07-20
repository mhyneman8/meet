import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test('Show is changed on click', () => {
        EventWrapper.setState({
            show: false,
        });
        const show = EventWrapper.state('.show-more');
        EventWrapper.find('.show-more').simulate('click');
        expect(EventWrapper.state(show)).toEqual(true);
    });

    // test('Event details are listed once button clicked', () => {
    //     expect(EventWrapper.find('.details')).toHaveLength(1);
    // })

    test('Show more button is rendered', () => {
        expect(EventWrapper.find('.show-hide')).toHaveLength(1);
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
    // test('Show more details on click', () => {
    //     EventWrapper.setState({
    //         show: false,
    //     });
    //     EventWrapper.find('.show-hide').simulate('click');
    //     expect(EventWrapper.state('show')).toEqual(true);
    // });
})