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
 * Prompt the user to define the boundary for the robot.
 * @returns {Promise<{ enforceBoundary: boolean, boundaryLimit: number }>}
 */
const getBoundarySettings = async () => {
  return new Promise((resolve) => {
    rl.question('Enable boundary enforcement? (yes/no): ', (enableBoundary) => {
      if (enableBoundary.toLowerCase() === 'yes') {
        rl.question('Enter the boundary limit (positive integer): ', (limit) => {
          const boundaryLimit = parseInt(limit, 10)
          if (isNaN(boundaryLimit) || boundaryLimit <= 0) {
            console.log('Invalid boundary limit. Defaulting to 5.')
            resolve({ enforceBoundary: true, boundaryLimit: 5 })
          } else {
            resolve({ enforceBoundary: true, boundaryLimit })
          }
        })
      } else {
        resolve({ enforceBoundary: false, boundaryLimit: 0 })
      }
    })
  })
}

/**
 * Main function to control the robot via user commands.
 * This function handles user input, processes commands, and manages the robot's state.
 */
const main = async () => {
  console.log('Hello! Robot coming online.')
  console.log('Command the robot with:')
  console.log(robotOptions)

  // Get boundary settings from the user.
  const { enforceBoundary, boundaryLimit } = await getBoundarySettings()

  // Initialize the robot with user-defined boundaries.
  const robot = new Robot(enforceBoundary, boundaryLimit)

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
