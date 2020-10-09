import React from 'react';
import {shallow} from 'enzyme';
import {Container} from 'src/components/Container/Container';
import {Text} from 'react-native-elements';

describe('Container', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Container />);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - noSafeAreaView', () => {
      const component = shallow(<Container shouldSafeAreaView={false} />);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot - keyboardAvoidingView', () => {
      const component = shallow(<Container keyboardAvoidingView />);
      expect(component).toMatchSnapshot();
    });
    it('should match to snapshot  - shouldSafeAreaView && keyboardAvoidingView', () => {
      const component = shallow(
        <Container shouldSafeAreaView={false} keyboardAvoidingView />,
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe('Check render props', () => {
    let component;
    const text = 'Test';

    beforeEach(() => {
      component = shallow(
        <Container>
          <Text>{text}</Text>
        </Container>,
      );
      jest.clearAllMocks();
    });

    it('should render correct children', () => {
      const labelElement = component.find({children: text});
      expect(labelElement).toHaveLength(1);
    });
  });
  describe('Check render props noSafeAreaView', () => {
    let component;
    const text = 'Test';

    beforeEach(() => {
      component = shallow(
        <Container noSafeAreaView>
          <Text>{text}</Text>
        </Container>,
      );
      jest.clearAllMocks();
    });

    it('should render correct children', () => {
      const labelElement = component.find({children: text});
      expect(labelElement).toHaveLength(1);
    });
  });
  describe('Check render props keyboardAvoidingView', () => {
    let component;
    const text = 'Test';

    beforeEach(() => {
      component = shallow(
        <Container keyboardAvoidingView>
          <Text>{text}</Text>
        </Container>,
      );
      jest.clearAllMocks();
    });

    it('should render correct children', () => {
      const labelElement = component.find({children: text});
      expect(labelElement).toHaveLength(1);
    });
  });
  describe('Check render props keyboardAvoidingView noSafeAreaView', () => {
    let component;
    const text = 'Test';

    beforeEach(() => {
      component = shallow(
        <Container keyboardAvoidingView noSafeAreaView>
          <Text>{text}</Text>
        </Container>,
      );
      jest.clearAllMocks();
    });

    it('should render correct children', () => {
      const labelElement = component.find({children: text});
      expect(labelElement).toHaveLength(1);
    });
  });
});
