# Game of Life

This is an implementation of Conway's Game of Life using the p5.js library.

## About the Game of Life

Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

The game is played on a grid of cells, each of which can be in one of two possible states: alive or dead. The grid evolves in discrete time steps, with each generation being a function of the previous one according to certain rules:

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Getting Started

To run the Game of Life locally, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/your-username/game-of-life.git`
2. Navigate to the project directory: `cd game-of-life`
3. Open the `index.html` file in your preferred web browser.


## Dependencies

- [p5.js](https://p5js.org/) - JavaScript library for creative coding.


## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.



