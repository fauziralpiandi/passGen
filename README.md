# passGen

Simple CLI Password Generator

## Overview

`passGen` is a simple command-line interface (CLI) tool for generating secure passwords. This tool is ideal for developers, system administrators, and anyone who needs to quickly generate strong passwords from the terminal.

## Why Use passGen?

- **Security**: Generates strong, random passwords to enhance security.
- **Convenience**: Quickly generate passwords directly from your terminal without needing to open a browser or another application.
- **Customization**: Easily adjust password length and character sets to meet your specific requirements.

## When to Use passGen?

- When you need to generate a password for a new user account.
- When creating passwords for services, databases, or other secure applications.
- When setting up temporary passwords that need to be strong and random.
- Anytime you need a quick and secure password without distraction.

## Install

Make sure you have [Node.js](https://nodejs.org) installed on your computer. Clone this repository and navigate into the project directory:

```sh
git clone https://github.com/fauziralpiandi/passGen.git
```
or

```sh
gh repo clone fauziralpiandi/passGen
```

## Usage

You can generate a password:

```sh
cd passGen
```

> By default, this generates a 16-character password that includes numbers, letters, and symbols.

### Options

- `--length=<number>`: Specify the length of the password.
- `--no-numbers`: Exclude numbers from the password.
- `--no-letters`: Exclude letters from the password.
- `--no-symbols`: Exclude symbols from the password.

## License

[MIT License](LICENSE)