import React, { useEffect } from 'react';
import ReactModal, { Styles } from 'react-modal';
import { Icon } from 'design-system/atoms';
import { CarouselArrowLeft } from 'design-system/atoms/carousel-arrow-left';
import { CarouselArrowRight } from 'design-system/atoms/carousel-arrow-right';

import { ModalProps } from './modal.interfaces';

ReactModal.setAppElement('#__next');

const styles: Styles = {
  content: {
    border: 'none',
    background: 'transparent',
    borderRadius: 0,
    padding: 0,
    inset: 0,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(var(--black-rgb), .5)',
    zIndex: 100,
  },
};

export function Modal({ handleClose, children, slides, pagination, ...props }: ModalProps) {
  useEffect(() => {
    const body = document.querySelector('body');
    if (props.isOpen) {
      if (body) {
        body.style.overflowY = 'hidden';
      }
    }

    return () => {
      const fullpageId = document.querySelector('#fullpage');
      if (body) {
        if (!fullpageId) {
          body.style.overflowY = 'auto';
        }
      }
    };
  }, [props.isOpen]);

  return (
    <ReactModal
      style={{ ...styles, ...props.style }}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      onRequestClose={handleClose}
      {...props}
    >
      <div className='h-full w-full p-10'>
        <div className='flex items-center justify-between mb-4'>
          {slides && (
            <p className='text-white text-xl'>
              {slides.activeSlideIndex + 1} / {slides.count}
            </p>
          )}
          <button className='h-12'>
            <Icon icon='x' className='text-white' onClick={handleClose} />
          </button>
        </div>
        {children}
      </div>

      {pagination && (
        <>
          <CarouselArrowLeft className='left-0.5' onClick={pagination.handlePrevious}></CarouselArrowLeft>
          <CarouselArrowRight className='right-0.5' onClick={pagination.handleNext}></CarouselArrowRight>
        </>
      )}
    </ReactModal>
  );
}
