/**
 * Processes a command and executes the corresponding action on the robot.
 *
 * @param {Robot} robot - The instance of the Robot class to operate on.
 * @param {string} command - The command to execute. Valid commands are:
 *   - 'L': Turn the robot left.
 *   - 'R': Turn the robot right.
 *   - 'M': Move the robot forward.
 *   - '?': Display help/options.
 * @param {string} options - A string containing the help menu or options to display for the '?' command.
 */
const handleCommand = (robot, command, options) => {
  switch (command) {
    case 'L': // Command to turn the robot 90 degrees to the left.
      robot.turnLeft()
      break
    case 'R': // Command to turn the robot 90 degrees to the right.
      robot.turnRight()
      break
    case 'M': // Command to move the robot forward in its current direction.
      robot.moveForward()
      break
    case '?': // Command to display the help menu.
      console.log(options)
      return // Exit early as there's no status update needed for help display.
  }

  // Print the robot's current status after executing the command.
  console.log(robot.getStatus())
}

// Export the function to allow use in other parts of the application.
export default handleCommand
