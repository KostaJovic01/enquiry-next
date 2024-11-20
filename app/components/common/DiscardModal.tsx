'use client'
import React from 'react'
import Button from './Button'
import Modal from '../Modal'
import { createPortal } from 'react-dom'

type Props = {
    isOpen: boolean

    setIsOpen: (open: boolean) => void
    onDiscard: () => void
    onClose: () => void
}

export default function DiscardModal(props: Props) {
    if (typeof window === 'undefined') return null
    return createPortal(
        <Modal id='Discard Modal' z="z-20" open={props.isOpen} setOpen={props.setIsOpen}>
        <div className="flex flex-col space-y-8">
            <span className="text-xl">You have unsaved changes, do you want to discard them?</span>
            <div className="flex flex-row justify-end space-x-8">
                <Button color='danger' onClick={props.onDiscard} label="Discard!" />
                <Button color='warning' onClick={props.onClose} label="Close" />
            </div>
        </div>
    </Modal>,
        document.body
    );
}