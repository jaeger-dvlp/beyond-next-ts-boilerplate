export type PopupStatusTypes = 'success' | 'error' | 'loading' | 'info';

export type AlertPopupType = {
  inHTML: boolean;
  isActive: boolean;
  status: PopupStatusTypes;
  text: string;
  onConfirm?: () => void;
};

export type ConfirmPopupType = {
  inHTML: boolean;
  isActive: boolean;
  text: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export type PopupContextType = {
  alertPopup: AlertPopupType | null;
  confirmPopup: ConfirmPopupType | null;
  activateAlertPopup: (
    text: string,
    status: PopupStatusTypes,
    onConfirm?: () => void
  ) => void;
  activateConfirmPopup: (
    text: string,
    onConfirm?: () => void,
    onCancel?: () => void
  ) => void;

  deactivateAlertPopup: () => void;
  deactivateConfirmPopup: () => void;
};
