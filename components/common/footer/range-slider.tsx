import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

interface RangeSliderProps {
  value: number,
  onChange: (nextValue: number) => void
}

const RangeSlider = ({value, onChange} : RangeSliderProps) => {
  return (
    <Slider
      min={0}
      max={100}
      defaultValue={50}
      step={2}
      value={value}
      onChange={(nextValue) => onChange(nextValue as number)}
      className="cursor-pointer select-none"
      railStyle={{
        height: 2,
        backgroundColor: '#595560',
      }}
      trackStyle={{
        height: 2,
        backgroundColor: '#FFFFFF',
      }}
      handleStyle={{
        borderColor: '#FFFFFF',
        boxShadow: 'none',
        opacity: '1'
      }}
    />
  )
}

export default RangeSlider
