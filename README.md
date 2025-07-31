# Hardhat Simple Storage

This project demonstrates a basic Hardhat use case with a simple storage contract. It includes deployment scripts, tests, and coverage analysis.

## Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Hardhat

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/victoryanonymous/hardhat-simple-storage.git
cd hardhat-simple-storage
```

2. Install dependencies:

```bash
yarn install
```

## Local Development

1. Start a local Hardhat node:

```bash
yarn hardhat node
```

2. Deploy the contract:

```bash
yarn hardhat run scripts/deploy.js --network sepolia
```

3. Check the current block number:

```bash
yarn hardhat block-number
```

## Contract Interaction

1. Open Hardhat console:

```bash
yarn hardhat console --network sepolia
```

2. Verify contract on Etherscan:

```bash
yarn hardhat verify --network sepolia
```

## Testing

1. Run all tests:

```bash
yarn hardhat test
```

2. Run specific test:

```bash
yarn hardhat test --grep "Should update when we call store"
```

## Coverage Analysis

Generate test coverage report:

```bash
yarn hardhat coverage
```

## Clean Build

Clean the build artifacts:

```bash
yarn hardhat clean
```

## Project Structure

- `/contracts`: Smart contracts
- `/scripts`: Deployment scripts
- `/test`: Test files
- `/tasks`: Hardhat custom tasks

## License

MIT
