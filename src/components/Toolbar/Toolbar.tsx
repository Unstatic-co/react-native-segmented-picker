import React, { ReactElement } from 'react';
import { View, TouchableOpacity, Text, TextStyle } from 'react-native';
import styles from './ToolbarStyles';
import { TEST_IDS } from '../../config/constants';

interface Props {
  confirmText: string;
  cancelText: string;
  confirmTextColor: string;
  toolbarBackground: string;
  toolbarBorderColor: string;
  textConfirmStyle?: TextStyle;
  textCancelStyle?: TextStyle;
  textTitleStyle?: TextStyle;
  title?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
export default ({
  confirmText,
  cancelText,
  toolbarBackground,
  toolbarBorderColor,
  textCancelStyle,
  textConfirmStyle,
  textTitleStyle,
  title,
  onConfirm,
  onCancel,
}: Props): ReactElement => (
  <View
    style={[
      styles.toolbarContainer,
      {
        backgroundColor: toolbarBackground,
        borderBottomColor: toolbarBorderColor,
      },
    ]}>
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onCancel}
      testID={TEST_IDS.CONFIRM_BUTTON}>
      <View style={styles.toolbarConfirmContainer}>
        <Text style={[styles.toolbarConfirmText, textCancelStyle]}>
          {cancelText}
        </Text>
      </View>
    </TouchableOpacity>
    {!!title && <Text style={textTitleStyle}>{title}</Text>}
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onConfirm}
      testID={TEST_IDS.CONFIRM_BUTTON}>
      <View style={styles.toolbarConfirmContainer}>
        <Text style={[styles.toolbarConfirmText, textConfirmStyle]}>
          {confirmText}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
