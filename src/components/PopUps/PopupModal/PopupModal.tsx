import React, {ReactElement} from 'react';
import {GestureResponderEvent, Modal, SafeAreaView, View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';

interface Props {
  visible: boolean;
  onClose: () => void;
  button?: (event: GestureResponderEvent) => void;
  buttonTitle?: string;
  buttonDisabled?: boolean;
  children?: ReactElement;
}

export const PopupModal = ({
  visible,
  onClose,
  button,
  buttonTitle = 'Ukryj',
  buttonDisabled,
  children,
}: Props): ReactElement => {
  return (
    <Modal
      animationType={'fade'}
      supportedOrientations={['portrait']}
      visible={visible}
      transparent
      onRequestClose={onClose}>
      <View style={styles.firstContainer} onTouchStart={onClose} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.secondContainer}>
          <View style={styles.itemsContainer}>{children && children}</View>
          {button && (
            <Button
              onPress={button}
              disabled={buttonDisabled}
              title={buttonTitle}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btn}
            />
          )}
          <Button
            onPress={onClose}
            title={'Close'}
            containerStyle={styles.btnContainer}
            buttonStyle={styles.closeBtn}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};
