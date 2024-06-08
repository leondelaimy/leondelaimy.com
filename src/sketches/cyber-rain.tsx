// Cyber rain inspired by https://github.com/emilyxxie/green_rain

import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import styled from 'styled-components'

export const CyberRain: React.FC = () => {
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

  return <SketchWrapper ref={sketchRef}></SketchWrapper>
}

const SketchWrapper = styled.div`
  position: fixed;
  z-index: -1;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`

const fadeInterval = 1.4
const symbolSize = 15
const highlightSpeed = 2 // Increased speed for the highlight effect
const baseColor = '#CA504D' // Base red color
const highlightColor = '#8DC9F4' // Blue color for highlighting
const highlightRange = symbolSize * 3 // Range of symbols to highlight

let leftStream: Stream, rightStream: Stream

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(0)

    // Create a single stream on the left edge
    leftStream = new Stream(p)
    leftStream.generateSymbols(symbolSize, -50)

    // Create a single stream on the right edge
    rightStream = new Stream(p)
    rightStream.generateSymbols(p.width - symbolSize * 2, -500)

    p.textFont('Share Tech Mono')
    p.textSize(symbolSize)
  }

  p.draw = () => {
    p.background(34, 34, 34, 150) // Background with transparency to create trailing effect
    leftStream.render()
    rightStream.render()
  }
}

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
    this.color = p.color(baseColor) // Set color to red
    this.switchInterval = p.round(p.random(30, 60))
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
  highlightPosition: number
  constructor(private p: p5) {
    this.p = p
    this.symbols = []
    this.totalSymbols = p.round(p.random(5, 35))
    this.speed = p.random(0.5, 1) // Slowed down rain effect
    this.highlightPosition = 0 // Track the position of the highlight effect
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
    // Move the highlight effect down the stream
    this.highlightPosition += highlightSpeed // Increased speed of the highlight movement
    if (this.highlightPosition >= this.p.height) {
      this.highlightPosition = 0
    }

    this.symbols.forEach((symbol: MatrixSymbol) => {
      const distanceFromHighlight = this.p.abs(symbol.y - this.highlightPosition)

      if (distanceFromHighlight < highlightRange) {
        const blendAmount = this.p.map(distanceFromHighlight, 0, highlightRange, 0, 1)
        const blendedColor = this.p.lerpColor(this.p.color(highlightColor), this.p.color(baseColor), blendAmount)
        this.p.drawingContext.shadowBlur = this.p.map(distanceFromHighlight, 0, highlightRange, 20, 0)
        this.p.drawingContext.shadowColor = blendedColor
        this.p.fill(blendedColor) // Highlight and add blend effect to the symbol at the highlight position
      } else {
        this.p.drawingContext.shadowBlur = 0
        this.p.fill(this.p.red(symbol.color), this.p.green(symbol.color), this.p.blue(symbol.color), symbol.opacity) // Maintain the red colored stream
      }

      this.p.text(symbol.value, symbol.x, symbol.y)
      symbol.rain()
      symbol.setToRandomSymbol()
    })

    // Reset shadow settings after drawing each stream
    this.p.drawingContext.shadowBlur = 0
    this.p.drawingContext.shadowColor = 'transparent'
  }
}
