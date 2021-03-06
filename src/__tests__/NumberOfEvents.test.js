import React from 'react';
import { shallow } from 'enzyme';
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
        const number = NumberWrapper.state('numberOfEvents');

        expect(NumberWrapper.find('.number-events').prop('value')).toBe(number);
    })

})