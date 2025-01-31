import React from 'react'
import { usePopperTooltip } from 'react-popper-tooltip'
import styles from '@/styles/react-popper.module.scss'

type ButtonProps = {
  children: React.ReactNode
  className: string
  hover?: string | React.ReactNode
  onClick?: (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ children, className, hover = "", onClick }: ButtonProps) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({delayHide: 100, delayShow: 100, offset: [0, 10], placement: 'top'})
  let toolTip = hover;
  if (typeof hover === "string") {
    toolTip = <p className="text-[11px]">{hover}</p>
  }
  return (
    <>
      <button
        ref={setTriggerRef}
        className={`transition ease-linear duration-150 hover:bg-purple-highlight1 px-[7px] pt-[5px] pb-[2px] rounded-full ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
      {hover !== "" && visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: styles['tooltip-container'] })}
        >
          <div {...getArrowProps({ className: styles['tooltip-arrow'] })} />
          {toolTip}
        </div>
      )}
    </>
  )
}

export default Button
