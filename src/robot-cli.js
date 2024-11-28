// Import the readline module to handle user input via the command line.
import readline from 'readline'

// Import the Robot class that defines the robot's behavior and state.
import Robot from './robot.class.js'

// Import the handleCommand function to process and execute robot commands.
import handleCommand from './handle-command.js'

// Create an interface for reading input and writing output to/from the console.
const rl = readline.createInterface({
  input: process.stdin, // Read input from standard input (keyboard).
  output: process.stdout, // Write output to standard output (console).
})

// Help message displayed to the user, detailing available robot commands.
const robotOptions = `
  L - Turn left
  R - Turn right
  M - Move forward
  ? - Help (this message)
  Q - Quit
`

/**
 * Main function to control the robot via user commands.
 * This function handles user input, processes commands, and manages the robot's state.
 */
const main = async () => {
  console.log('Hello! Robot coming online.')
  console.log('Command the robot with:')
  console.log(robotOptions)

  // Initialize a new robot instance.
  const robot = new Robot()

  // Handle program termination (e.g., Ctrl+C).
  rl.on('SIGINT', () => {
    console.log('\nRobot shutting down.')
    process.exit(0)
  })

  // Main loop to continuously read and execute user commands.
  while (true) {
    // Prompt the user for a command and convert it to uppercase for case-insensitive matching.
    const command = (
        await new Promise((resolve) => rl.question('> ', resolve))
    ).toUpperCase()

    // Exit the loop and shut down the robot if the user enters 'Q'.
    if (command === 'Q') {
      console.log('Robot shutting down.')
      break
    }

    // Validate the command. If invalid, notify the user and continue the loop.
    if (!['L', 'R', 'M', '?'].includes(command)) {
      console.log('Invalid command.')
      continue
    }

    // Pass the robot instance, the command, and the help message to the handler.
    handleCommand(robot, command, robotOptions)
  }

  // Close the readline interface when the program exits the loop.
  rl.close()
}

// Execute the main function to start the program.
main()
