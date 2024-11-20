import classNamesHelper from '@/app/utils/classNamesHelper'
import React from 'react'

type Props = {
    type?: 'button'| 'submit'|'reset'
    style?: 'primary'|'secondary'
    size?: 'sm'|'lg'
    color?: 'standard'|'success'|'warning'|'danger'
    label?: string
    onClick?: ()=>void
}

export default function Button(props: Props) {
    const color = () =>{
        const style = props.style?? 'primary'
        const color = props.color?? 'standard'
        switch(style){
            case 'primary':
                switch (color){
                    case 'standard':
                        return 'bg-indigo-600 hover:bg-indigo-700 text-white focus-visible:outline-indigo-700'
                    case 'success':
                        return 'bg-green-600 hover:bg-green-700 text-white focus-visible:outline-green-700'
                    case 'warning':
                        return 'bg-orange-600 hover:bg-orange-700 text-white focus-visible:outline-orange-700'
                    case 'danger':
                        return 'bg-red-600 hover:bg-red-700 text-white focus-visible:outline-red-700'
                }
            case 'secondary':
                switch (color){
                    case 'standard':
                        return 'bg-indigo-300 hover:bg-indigo-300 text-indigo-700 focus-visible:outline-indigo-700'
                    case 'success':
                        return 'bg-green-300 hover:bg-green-300 text-green-700 focus-visible:outline-green-700'
                    case 'warning':
                        return 'bg-orange-300 hover:bg-orange-300 text-orange-700 focus-visible:outline-orange-700'
                    case 'danger':
                        return 'bg-red-300 hover:bg-red-300 text-red-700 focus-visible:outline-red-700'
                }
        }
    }
    const size = () => {
        const size = props.size?? 'sm'
        switch (size){
            case 'sm':
                return 'py-2 px-3'
            case 'lg':
                return 'py-3 px-4'
        }
    }
  return (
    <button
    type={props.type??'button'}
    onClick={props.onClick?? (()=>{})}
    className={classNamesHelper(color()+' '+size())+`w-mas  inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
>
    {props.label?? 'please give me a label'}
</button>
  )
}