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

### Input
The program takes the following input:
1. **Plateau Dimensions**: Define the size of the grid (e.g., `5 5` for a 5x5 grid).
2. **Initial Position and Orientation**: Set the robot's starting point and direction (e.g., `1 2 N` where `N` is North).
3. **Command Sequence**: A series of commands to control the robot:
   - `L` (turn left)
   - `R` (turn right)
   - `M` (move forward)

### Output
The program outputs the robot's final position and orientation after processing all commands.

### Example
**Input:**
```
5 5
1 2 N
LMLMLMLMM
```

**Output:**
```
1 3 N
```

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
