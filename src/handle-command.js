const handleCommand = (robot, command, options) => {
  switch (command) {
    case 'L':
      robot.turnLeft()
      break
    case 'R':
      robot.turnRight()
      break
    case 'M':
      robot.moveForward()
      break
    case '?':
      console.log(options)
      return
  }
  console.log(robot.getStatus())
}

export default handleCommand
