# Contributing

## Requirements

- [Git](https://git-scm.com/)
- [Node.js]()https://nodejs.org/en/
- [Docker](https://www.docker.com/)
- [Docker Compose]()https://docs.docker.com/compose/
- [GNU/Make](https://www.gnu.org/software/make/)

## Issue

Choose an [issue](./issues) to solve.

## Fork

See [Fork a repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

## Commands

Command | Description
---|---
`make start` | Start the Docker Compose services.
`make stop` | Stop the Docker Compose services.
`make restart` | Alias for `make stop start`.
`make install` | Install the Node.js dependencies.
`make test` | Run the unit tests.
`make build` | Build files for the `lib` folder.
`make clean` | Removes the `node_modules` as well as some other artifacts.

## Submit

See [Creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
