import ReactModal, { Props } from 'react-modal';

ReactModal.setAppElement('#__next');

export function Modal(props: Props) {
  return <ReactModal {...props} />;
}
