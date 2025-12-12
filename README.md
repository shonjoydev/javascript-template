# Javascript Template

Professional JavaScript project template with modern tooling: linting, formatting, testing, git hooks, and automated CI/CD. Zero config, maximum productivity.

## 🚀 Features

- **Algorithms**: Efficient implementations of common algorithms (Two Sum, Palindrome checker, etc.)
- **Well-documented**: Comprehensive JSDoc documentation
- **Fully tested**: 100% test coverage with Vitest
- **Type-safe**: TypeScript type checking for JavaScript
- **Docker support**: Containerized development and testing

## 📋 Prerequisites

- **Node.js**: >= 24.12.0 < 25.0.0
- **pnpm**: >= 10.0.0 (enforced via preinstall hook)
- **Docker** (optional): For containerized development

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/shonjoydev/javascript-template.git
cd <project-name>

# Install dependencies (only pnpm is allowed)
pnpm install:pkg
```

## 📦 Available Scripts

### Development

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run documentation server
pnpm docs:dev
```

### Docker Commands

```bash
# Run tests once
pnpm docker:test

# Run tests in watch mode
pnpm docker:test:watch

# Run tests with coverage
pnpm docker:test:coverage

# Run docs dev server
pnpm docker:docs

# Run docs in background
pnpm docker:docs:bg

# Stop all services
pnpm docker:down

# Rebuild containers
pnpm docker:build

# Clean up everything
pnpm docker:clean
```

## 🐳 Docker Setup

### Using Docker Compose

```bash
# Build and run tests
compose up test

# Run tests in watch mode
compose up test-watch

# Run with coverage
compose up test-coverage

# Run documentation server
compose up docs
```

### Manual Docker Commands

```bash
# Build the image
docker build -t myapp-test .

# Run tests
docker run --rm myapp-test

# Run with interactive terminal
docker run -it --rm myapp-test
```

## 📁 Project Structure

```
.
├── src/                    # Source code
│   ├── arrays/            # Array utilities
│   ├── strings/           # String utilities
│   └── ...
├── tests/                 # Test files
├── docs/                  # Documentation
├── .github/               # GitHub workflows
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── jsconfig.json          # JavaScript/TypeScript config
├── package.json           # Project metadata
└── README.md             # This file
```

## 🧪 Testing

Tests are written using [Vitest](https://vitest.dev/).

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test src/isPalindrome.test.js

# Run with UI
pnpm test --ui

# Generate coverage report
pnpm test:coverage
```

## 📝 Code Quality

- **ESLint**: Code linting (if configured)
- **TypeScript**: Type checking for JavaScript files
- **Strict mode**: Enabled in `jsconfig.json`
- **SonarQube**: Docker best practices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Guidelines

- Use clear and descriptive commit messages
- Follow conventional commits format (optional)
- Ensure all tests pass before committing

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👤 Author

**Shonjoy**

## 🙏 Acknowledgments

- [Vitest](https://vitest.dev/) - Testing framework
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Docker](https://www.docker.com/) - Containerization platform

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

Made with ❤️ by Shonjoy
