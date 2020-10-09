import React from 'react';
import {shallow} from 'enzyme';
import {PopupModal} from 'src/components/PopUps/PopupModal/PopupModal';

describe('PopupModal', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <PopupModal visible={true} onClose={jest.fn()} />,
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe('Check render props', () => {
    let props;
    let component;
    const mockFn = jest.fn();
    const visible = true;
    const difficulty = 2;
    const price = 1;
    const rating = '2.49';
    const time = '60';
    const animationType = 'fade';

    beforeEach(() => {
      component = shallow(
        <PopupModal
          onClose={mockFn}
          visible={visible}
          difficulty={difficulty}
          price={price}
          rating={rating}
          time={time}
        />,
      );
      props = component.props();
      jest.clearAllMocks();
    });

    it('should call onClose', () => {
      props.onRequestClose();
      expect(mockFn).toHaveBeenCalled();
    });
    it('should be visible', () => {
      expect(props.visible).toEqual(visible);
    });
    it('should match animationType', () => {
      expect(props.animationType).toEqual(animationType);
    });
  });
});
