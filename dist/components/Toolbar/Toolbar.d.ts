import { ReactElement } from 'react';
interface Props {
    confirmText: string;
    confirmTextColor: string;
    toolbarBackground: string;
    toolbarBorderColor: string;
    onConfirm: () => void;
}
/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
declare const _default: ({ confirmText, confirmTextColor, toolbarBackground, toolbarBorderColor, onConfirm, }: Props) => ReactElement;
export default _default;
