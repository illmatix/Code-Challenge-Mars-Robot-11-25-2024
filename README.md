# Code Challenge: Mars Robot

Welcome to the **Mars Robot Code Challenge** repository! This project simulates the movement of a robot on a Mars-like plateau, processing commands to move the robot and turn it left or right. The goal is to execute the robot's commands while staying within the boundaries of the plateau.

---

## Features
- Define a plateau grid for the robot to navigate.
- Simulate a robot's movement, turning, and stopping.
- Input command sequences to control the robot.
- Prevent the robot from falling off the plateau.

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

You can run `npm start` to execute the program. 

### Input
Commands can be entered in lowercase or uppercase.

The following inputs will move the robot `L, R, M`.

To output the instructions again you can use `?`.

To quit you can use `Q` or `CTRL-C`.

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
