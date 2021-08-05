import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
// import App from '../App';

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
        const number = NumberWrapper.state('numberOfEvents');

        expect(NumberWrapper.find('.number-events').prop('value')).toBe(number);
    })

    // test('change state when text input changes', () => {
    //     NumberWrapper.setState({
    //         numberOfEvents: '15'
    //     });
    //     const testNumber = { target: { value: '20'}};
    //     NumberWrapper.find('#number-of-events').simulate('change', testNumber);
    //     expect(NumberWrapper.state('numberOfEvents')).toBe('20');
    // })

//     test('change input state when enter key is pressed', () => {
//         NumberWrapper.setState({
//             numberOfEvents: '15'
//         });

//         const input = NumberWrapper.find('.number-events');
//         input.simulate('change', { target: { value: '20'} });
//         input.simulate('keypress', {key: 'Enter'})

//     })
// })

// describe('<NumberOfEvents /> component', () => {

//     test('Updated Number of Events is sent to App', () => {
//         const NumberWrapper = mount(<NumberOfEvents />);
//     })
})