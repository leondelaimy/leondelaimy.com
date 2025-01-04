// Cyber rain inspired by https://github.com/emilyxxie/green_rain

import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import styled from 'styled-components'

const SketchWrapper = styled.div`
  position: fixed;
  z-index: -1;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`

export const MatrixRain: React.FC = () => {
  const streams: Stream[] = []
  const fadeInterval = 1.4
  const symbolSize = 10
  const sketchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (sketchRef.current) {
      const p5Instance = new p5(sketch, sketchRef.current)

      return () => {
        p5Instance.remove()
      }
    }
  }, [])

  class MatrixSymbol {
    p: p5
    x: number
    y: number
    value: string
    speed: number
    first: boolean
    opacity: number
    color: p5.Color
    switchInterval: number

    constructor(p: p5, x: number, y: number, speed: number, first: boolean, opacity: number) {
      this.p = p
      this.x = x
      this.y = y
      this.value = ''
      this.speed = speed
      this.first = first
      this.opacity = opacity
      // Assign a random color to each symbol upon creation
      this.color = p.color(p.random() > 0.5 ? '#CA504D' : '#8DC9F4')
      this.switchInterval = p.round(p.random(30, 60)) // Slow down the symbol switch interval
    }

    setToRandomSymbol() {
      if (this.p.frameCount % this.switchInterval === 0) {
        // Use Katakana characters
        this.value = String.fromCharCode(0x30a0 + this.p.round(this.p.random(0, 96)))
      }
    }

    rain() {
      this.y = this.y >= this.p.height ? 0 : this.y + this.speed
    }
  }

  class Stream {
    symbols: MatrixSymbol[]
    totalSymbols: number
    speed: number

    constructor(private p: p5) {
      this.p = p
      this.symbols = []
      this.totalSymbols = p.round(p.random(5, 35))
      this.speed = p.random(1, 2) // Slowed down rain effect
    }

    generateSymbols(x: number, y: number) {
      let opacity = 255
      let first = this.p.round(this.p.random(0, 4)) === 1
      for (let i = 0; i <= this.totalSymbols; i++) {
        const symbol = new MatrixSymbol(this.p, x, y, this.speed, first, opacity)
        symbol.setToRandomSymbol()
        this.symbols.push(symbol)
        opacity -= 255 / this.totalSymbols / fadeInterval
        y -= symbolSize
        first = false
      }
    }

    render() {
      this.symbols.forEach(symbol => {
        // Glowing effect by drawing shadow
        this.p.drawingContext.shadowBlur = 1
        this.p.drawingContext.shadowColor = symbol.color

        this.p.fill(this.p.red(symbol.color), this.p.green(symbol.color), this.p.blue(symbol.color), symbol.opacity)

        this.p.text(symbol.value, symbol.x, symbol.y)
        symbol.rain()
        symbol.setToRandomSymbol()

        // Reset shadow for the next draw
        this.p.drawingContext.shadowBlur = 0
      })
    }
  }

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight)

      let x = 0
      for (let i = 0; i <= p.width / symbolSize; i++) {
        const stream = new Stream(p)
        stream.generateSymbols(x, p.random(-2000, 0))
        streams.push(stream)
        x += symbolSize
      }

      p.textFont('Share Tech Mono')
      p.textSize(symbolSize)
    }

    p.draw = () => {
      p.background(34, 34, 34, 150) // Background with transparency to create trailing effect
      streams.forEach(stream => {
        stream.render()
      })
    }
  }

  return <SketchWrapper ref={sketchRef}></SketchWrapper>
}
