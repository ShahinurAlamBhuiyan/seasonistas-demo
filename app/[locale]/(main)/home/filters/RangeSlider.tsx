import * as Slider from "@radix-ui/react-slider";

export function RangeSlider() {
  return (
    <Slider.Root
      className='SliderRoot'
      defaultValue={[0, 100]}
      max={100}
      step={1}
    >
      <Slider.Track className='SliderTrack'>
        <Slider.Range className='SliderRange' />
      </Slider.Track>
      <Slider.Thumb className='SliderThumb' />
      <Slider.Thumb className='SliderThumb' />
    </Slider.Root>
  );
}
