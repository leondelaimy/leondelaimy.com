export interface ITheme {
  background: string
  colors: IColor
  font: string
}

interface IColor {
  crimson: string
  pastelRed: string
  darkBlue: string
  deepBlue: string
  zimaBlue: string
  darkGrey: string
  lightGrey: string
}

export const theme = {
  background: '#222222',
  colors: {
    crimson: '#972827',
    pastelRed: '#CA504D',
    darkBlue: '#628caa',
    deepBlue: '#698FA4',
    zimaBlue: '#8dc9f4',
    darkGrey: '#222222',
    lightGrey: '#c8c8c8',
  },
  font: 'Rajdhani, Share Tech Mono, monospace',
}
