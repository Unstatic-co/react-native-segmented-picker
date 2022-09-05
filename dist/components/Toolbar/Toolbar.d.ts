import { ReactElement } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
interface Props {
    confirmText: string;
    cancelText: string;
    confirmTextColor: string;
    toolbarBackground: string;
    toolbarBorderColor: string;
    textConfirmStyle?: TextStyle;
    textCancelStyle?: TextStyle;
    textTitleStyle?: TextStyle;
    toolbarContainerStyle?: ViewStyle;
    title?: string;
    onConfirm: () => void;
    onCancel: () => void;
}
/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
declare const _default: ({ confirmText, cancelText, toolbarBackground, toolbarBorderColor, textCancelStyle, textConfirmStyle, textTitleStyle, title, toolbarContainerStyle, onConfirm, onCancel, }: Props) => ReactElement;
export default _default;
