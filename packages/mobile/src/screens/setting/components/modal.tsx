import React from 'react';
import { Modal } from 'react-native';
import { CText as Text } from '../../../components/text';

export const ModalComponent = ({
  children,
  visible,
  style,
  onRequestClose,
  transparent = true,
  animationType,
  presentationStyle
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      onRequestClose={onRequestClose}
      presentationStyle={presentationStyle}
      visible={visible}
      style={style}
    >
      {children}
    </Modal>
  );
};
