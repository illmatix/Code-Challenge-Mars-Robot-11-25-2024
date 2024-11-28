import { describe, it, expect } from 'vitest'
import Robot from '../../src/robot.class.js'

describe('Robot', () => {
  it('should turn left correctly', () => {
    const robot = new Robot()
    robot.turnLeft()
    expect(robot.facingDirection).toBe('west')
  })

  it('should turn right correctly', () => {
    const robot = new Robot()
    robot.turnRight()
    expect(robot.facingDirection).toBe('east')
  })

  it('should complete a full 360-degree turn', () => {
    const robot = new Robot()
    robot.turnLeft() // Facing west
    robot.turnLeft() // Facing south
    robot.turnLeft() // Facing east
    robot.turnLeft() // Back to north
    expect(robot.facingDirection).toBe('north')
  })

  it('should move forward correctly', () => {
    const robot = new Robot()
    robot.moveForward()
    expect(robot.position).toEqual([0, 1])
  })

  it('should move correctly in all directions', () => {
    const robot = new Robot()
    robot.facingDirection = 'east'
    robot.moveForward()
    expect(robot.position).toEqual([1, 0])

    robot.facingDirection = 'south'
    robot.moveForward()
    expect(robot.position).toEqual([1, -1])

    robot.facingDirection = 'west'
    robot.moveForward()
    expect(robot.position).toEqual([0, -1])

    robot.facingDirection = 'north'
    robot.moveForward()
    expect(robot.position).toEqual([0, 0])
  })

  it('should respect grid boundaries when moving north', () => {
    const robot = new Robot(true, 5) // Boundary enabled
    robot.position = [0, 5]
    robot.facingDirection = 'north'
    robot.moveForward()
    expect(robot.position).toEqual([0, 5]) // No movement
  })

  it('should respect grid boundaries when moving south', () => {
    const robot = new Robot(true, 5) // Boundary enabled
    robot.position = [0, -5]
    robot.facingDirection = 'south'
    robot.moveForward()
    expect(robot.position).toEqual([0, -5]) // No movement
  })

  it('should respect grid boundaries when moving east', () => {
    const robot = new Robot(true, 5) // Boundary enabled
    robot.position = [5, 0]
    robot.facingDirection = 'east'
    robot.moveForward()
    expect(robot.position).toEqual([5, 0]) // No movement
  })

  it('should respect grid boundaries when moving west', () => {
    const robot = new Robot(true, 5) // Boundary enabled
    robot.position = [-5, 0]
    robot.facingDirection = 'west'
    robot.moveForward()
    expect(robot.position).toEqual([-5, 0]) // No movement
  })

  it('should move freely when boundaries are disabled', () => {
    const robot = new Robot(false) // Boundary disabled
    robot.position = [5, 5]
    robot.facingDirection = 'north'
    robot.moveForward()
    expect(robot.position).toEqual([5, 6]) // Movement allowed
  })

  it('should correctly report its status', () => {
    const robot = new Robot()
    robot.position = [2, 3]
    robot.facingDirection = 'east'
    const status = robot.getStatus()
    expect(status).toBe('Robot at (2, 3) facing East')
  })
})
