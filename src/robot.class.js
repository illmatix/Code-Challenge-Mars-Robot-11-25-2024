class Robot {
  /**
   * @param {boolean} enforceBoundary - Whether to enforce boundaries for the robot's movement.
   * @param {number} [boundaryLimit=5] - The maximum absolute value for x and y coordinates.
   */
  constructor(enforceBoundary = false, boundaryLimit = 5) {
    this.position = [0, 0]
    this.facingDirection = 'north'
    this.directions = ['north', 'east', 'south', 'west']
    this.validCommands = ['L', 'R', 'M', '?', 'Q']
    this.enforceBoundary = enforceBoundary // Flag to enable or disable boundary enforcement.
    this.boundaryLimit = boundaryLimit // Defines the boundary limits for x and y coordinates.
  }

  turnLeft() {
    const index =
        (this.directions.indexOf(this.facingDirection) -
            1 +
            this.directions.length) %
        this.directions.length
    this.facingDirection = this.directions[index]
  }

  turnRight() {
    const index =
        (this.directions.indexOf(this.facingDirection) + 1) %
        this.directions.length
    this.facingDirection = this.directions[index]
  }

  moveForward() {
    const [x, y] = this.position
    switch (this.facingDirection) {
      case 'north':
        if (!this.enforceBoundary || y < this.boundaryLimit) this.position[1]++
        break
      case 'east':
        if (!this.enforceBoundary || x < this.boundaryLimit) this.position[0]++
        break
      case 'south':
        if (!this.enforceBoundary || y > -this.boundaryLimit) this.position[1]--
        break
      case 'west':
        if (!this.enforceBoundary || x > -this.boundaryLimit) this.position[0]--
        break
    }

    if (this.enforceBoundary) {
      if (y >= this.boundaryLimit) console.log('Cannot move further north')
      if (x >= this.boundaryLimit) console.log('Cannot move further east')
      if (y <= -this.boundaryLimit) console.log('Cannot move further south')
      if (x <= -this.boundaryLimit) console.log('Cannot move further west')
    }
  }

  getStatus() {
    return `Robot at (${this.position[0]}, ${this.position[1]}) facing ${this.facingDirection.charAt(0).toUpperCase()}${this.facingDirection.slice(1)}`
  }
}

export default Robot
