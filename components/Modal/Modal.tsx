import React, { ReactNode } from 'react'
import ReactModal from 'react-modal'
import cx from 'clsx'
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  header?: ReactNode
  onClose: () => void
  variant?: string
  children: ReactNode
}

export default function Modal({
  isOpen,
  header,
  onClose,
  variant,
  children,
}: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={200}
      onRequestClose={onClose}
      ariaHideApp={false}
      className={cx(styles.modal, variant && styles[variant])}
      overlayClassName={styles.overlay}
    >
      {header && <div className={styles.header}>{header}</div>}
      <button className={styles.closebtn} onClick={onClose}>
        ×
      </button>
      {children}
    </ReactModal>
  )
}
