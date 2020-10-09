import React from 'react';
import {shallow} from 'enzyme';
import {Form} from 'src/components/Form/Form';
import {Text} from 'react-native-elements';

describe('Form', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Form />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Check render props', () => {
    let component;
    const text = 'Test';

    beforeEach(() => {
      component = shallow(
        <Form>
          <Text>{text}</Text>
        </Form>,
      );
      jest.clearAllMocks();
    });

    it('should render correct children', () => {
      const labelElement = component.find({children: text});
      expect(labelElement).toHaveLength(1);
    });
  });
});
