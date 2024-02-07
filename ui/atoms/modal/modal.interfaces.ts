import { Props } from 'react-modal';

export interface ModalProps extends Props {
  handleClose: () => void;
  slides?: {
    count: number;
    activeSlideIndex: number;
  };
  pagination?: null | {
    handleNext: () => void;
    handlePrevious: () => void;
  };
  children?: React.ReactNode;
}
