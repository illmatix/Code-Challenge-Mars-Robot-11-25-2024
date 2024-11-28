/**
 * Represents a robot navigating on a 2D grid.
 * The robot can turn left, turn right, or move forward while maintaining its position and facing direction.
 */
class Robot {
  /**
   * Initializes a new robot instance with default position and direction.
   */
  constructor() {
    // Current position of the robot on the grid, starting at (0, 0).
    this.position = [0, 0]

    // Current facing direction of the robot. Defaults to 'north'.
    this.facingDirection = 'north'

    // Array of valid directions the robot can face in clockwise order.
    this.directions = ['north', 'east', 'south', 'west']

    // Valid commands the robot can process.
    this.validCommands = ['L', 'R', 'M', '?', 'Q']
  }

  /**
   * Turns the robot 90 degrees to the left.
   * Updates the facing direction based on the current direction.
   */
  turnLeft() {
    // Calculate the new direction index in a circular manner.
    const index =
        (this.directions.indexOf(this.facingDirection) -
            1 +
            this.directions.length) %
        this.directions.length

    // Update the robot's facing direction.
    this.facingDirection = this.directions[index]
  }

  /**
   * Turns the robot 90 degrees to the right.
   * Updates the facing direction based on the current direction.
   */
  turnRight() {
    // Calculate the new direction index in a circular manner.
    const index =
        (this.directions.indexOf(this.facingDirection) + 1) %
        this.directions.length

    // Update the robot's facing direction.
    this.facingDirection = this.directions[index]
  }

  /**
   * Moves the robot forward in the direction it is currently facing.
   * Prevents movement beyond a predefined boundary of -5 to 5 on both axes.
   */
  moveForward() {
    const [x, y] = this.position

    // Adjust the position based on the current facing direction.
    switch (this.facingDirection) {
      case 'north':
        if (y < 5) this.position[1]++ // Move north within the boundary.
        break
      case 'east':
        if (x < 5) this.position[0]++ // Move east within the boundary.
        break
      case 'south':
        if (y > -5) this.position[1]-- // Move south within the boundary.
        break
      case 'west':
        if (x > -5) this.position[0]-- // Move west within the boundary.
        break
    }

    // Log a message if the robot attempts to exceed the boundary.
    if (y >= 5) console.log('Cannot move further north')
  }

  /**
   * Retrieves the current status of the robot.
   * @returns {string} A formatted string indicating the robot's position and direction.
   */
  getStatus() {
    return `Robot at (${this.position[0]}, ${this.position[1]}) facing ${this.facingDirection.charAt(0).toUpperCase()}${this.facingDirection.slice(1)}`
  }
}

export default Robot
