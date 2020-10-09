import React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native-elements';
import {Wrapper} from 'src/components/Wrapper/Wrapper';

describe('Wrapper', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Wrapper />);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot no scroll ', () => {
      const component = shallow(<Wrapper noScroll />);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot spacing top ', () => {
      const component = shallow(<Wrapper spacingTop />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Check render props', () => {
    let component;
    const text = 'Test';

    beforeEach(() => {
      component = shallow(
        <Wrapper>
          <Text>{text}</Text>
        </Wrapper>,
      );
      jest.clearAllMocks();
    });

    it('should render correct children', () => {
      const labelElement = component.find({children: text});
      expect(labelElement).toHaveLength(1);
    });
  });
  describe('Chceck render props no scroll', () => {
    let component;
    const text = 'Test';

    beforeEach(() => {
      component = shallow(
        <Wrapper noScroll>
          <Text>{text}</Text>
        </Wrapper>,
      );
      jest.clearAllMocks();
    });

    it('should render correct children', () => {
      const labelElement = component.find({children: text});
      expect(labelElement).toHaveLength(1);
    });
  });
});
