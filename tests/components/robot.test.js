import { describe, it, expect } from 'vitest'
import Robot from '../../src/robot.class.js'

describe('Robot', () => {
  it('should turn left correctly', () => {
    const robot = new Robot()
    robot.turnLeft()
    expect(robot.facingDirection).toBe('west')
  })

  it('should move forward correctly', () => {
    const robot = new Robot()
    robot.moveForward()
    expect(robot.position).toEqual([0, 1])
  })

  it('should respect grid boundaries', () => {
    const robot = new Robot()
    robot.position = [5, 5]
    robot.facingDirection = 'north'
    robot.moveForward()
    expect(robot.position).toEqual([5, 5]) // No movement
  })
})
