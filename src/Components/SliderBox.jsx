import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
const SliderBox = () => {
  return (
    <div>

<Slider aria-label='slider-ex-2' colorScheme='green' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
        
    </div>
  )
}

export default SliderBox