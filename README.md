# Code Challenge: Mars Robot

Welcome to the **Mars Robot Code Challenge** repository! This project simulates the movement of a robot on a Mars-like plateau, processing commands to move the robot and turn it left or right. The goal is to execute the robot's commands while staying within the boundaries of the plateau.

---

## Features
- Define a plateau grid for the robot to navigate with optional boundary enforcement.
- Simulate a robot's movement, turning, and stopping.
- Input command sequences to control the robot.
- Prevent the robot from falling off the plateau when boundaries are enabled.

---

## Getting Started

### Prerequisites
To run this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/illmatix/Code-Challenge-Mars-Robot-11-25-2024.git
   cd Code-Challenge-Mars-Robot-11-25-2024
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

---

## Usage

### Starting the Program
Run the program using: 
`npm start` 

You will be prompted to define boundary enforcement:

- Enable boundaries: Enter yes to enforce boundaries, and then specify the maximum boundary limit for both axes.
- Disable boundaries: Enter no to allow the robot to move without restrictions.

### Input
The program accepts the following commands, which can be entered in lowercase or uppercase:

* L: Turn the robot left.
* R: Turn the robot right.
* M: Move the robot forward in its current direction.
* ?: Display help instructions.
* Q: Quit the program.

Additionally, pressing CTRL-C will shut down the program.

---

## Project Structure
- **`src/`**: Contains the main application logic.
- **`tests/`**: Unit tests for the application.
- **`package.json`**: Dependency and script management.

---

## Scripts
- `npm start`: Run the main program.
- `npm test`: Execute unit tests.

---

## Testing
Run the tests to verify functionality:
```bash
npm test
```

---

## Future Improvements
- Add support for multiple robots.
- Implement obstacle detection on the plateau.
- Extend the command set for more complex behaviors.
- Improve error handling for invalid inputs.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For questions or suggestions, feel free to reach out via the repository issues page. Happy coding! 🚀
