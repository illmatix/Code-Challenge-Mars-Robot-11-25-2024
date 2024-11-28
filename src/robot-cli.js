import readline from 'readline'
import Robot from './robot.class.js'
import handleCommand from './handle-command.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const robotOptions = `
  L - Turn left
  R - Turn right
  M - Move forward
  ? - Help (this message)
  Q - Quit
`

const main = async () => {
  console.log('Hello! Robot coming online.')
  console.log('Command the robot with:')
  console.log(robotOptions)

  const robot = new Robot()

  rl.on('SIGINT', () => {
    console.log('\nRobot shutting down.')
    process.exit(0)
  })

  while (true) {
    const command = (
      await new Promise((resolve) => rl.question('> ', resolve))
    ).toUpperCase()

    if (command === 'Q') {
      console.log('Robot shutting down.')
      break
    }

    if (!['L', 'R', 'M', '?'].includes(command)) {
      console.log('Invalid command.')
      continue
    }

    handleCommand(robot, command, robotOptions)
  }

  rl.close()
}

main()
