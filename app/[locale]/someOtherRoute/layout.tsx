'use client'
import React, {ReactNode, useState} from 'react'
import Button from "@/app/components/common/Button";
import Modal from "@/app/components/Modal";

type Props = {
    children: ReactNode
    modal: ReactNode
}

const Layout = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
    <div className='w-screen h-screen flex flex-col'>
        <div>Some Other Page</div>
        <Button onClick={() => setIsModalOpen(true)} label={'Open Multi Media'}/>
        {props.children}
        <Modal open={isModalOpen} setOpen={setIsModalOpen} type={'lg'} >
            {props.modal}
        </Modal>
    </div>
  )
}

export default Layout