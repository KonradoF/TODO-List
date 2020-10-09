import React from 'react';
import {shallow} from 'enzyme';
import {Loader} from '../Loader';

describe('Loader', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Loader />);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - secondary', () => {
      const component = shallow(<Loader secondary />);
      expect(component).toMatchSnapshot();
    });
  });
});
