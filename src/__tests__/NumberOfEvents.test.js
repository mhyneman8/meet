import React from 'react';
import { shallow, mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberWrapper;
    beforeAll(() => {
        NumberWrapper = shallow(<NumberOfEvents />);
    });

    test('text box is rendered', () => {
        expect(NumberWrapper.find('.number-events')).toHaveLength(1);
    });

    test('label for textbox rendered', () => {
        expect(NumberWrapper.find('.number-label')).toHaveLength(1);
    });

    test('default number is 15', () => {
        const number = NumberWrapper.state('eventNumber');

        expect(NumberWrapper.find('.number-events').prop('value')).toBe(number);
    })

    test('change state when text input changes', () => {
        NumberWrapper.setState({
            eventNumber: '15'
        });
        const testNumber = { target: { value: '20'}};
        NumberWrapper.find('.number-events').simulate('change', testNumber);
        expect(NumberWrapper.state('eventNumber')).toBe('20');
    })
})

// describe('<NumberOfEvents /> component', () => {
//     let NumberWrapper;
//     beforeAll(() => {
//         NumberWrapper = mount(<NumberOfEvents />)
//     })

//     test('', () => {
        
//     })
// })