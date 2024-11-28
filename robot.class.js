class Robot {
  constructor() {
    this.position = [0, 0]
    this.facingDirection = 'north'
    this.directions = ['north', 'east', 'south', 'west']
    this.validCommands = ['L', 'R', 'M', '?', 'Q']
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
        if (y < 5) this.position[1]++
        break
      case 'east':
        if (x < 5) this.position[0]++
        break
      case 'south':
        if (y > -5) this.position[1]--
        break
      case 'west':
        if (x > -5) this.position[0]--
        break
    }
    if (y >= 5) console.log('Cannot move further north')
  }

  getStatus() {
    return `Robot at (${this.position[0]}, ${this.position[1]}) facing ${this.facingDirection.charAt(0).toUpperCase()}${this.facingDirection.slice(1)}`
  }
}

export default Robot
