# VerifyLedger 

This is a decentralized project built with Next.js, Hardhat, and The Graph to ensure transparency and security in the drug supply chain. It provides an explorer for verifying drugs, tracking events, and logging actions securely on the blockchain.

Website: https://verifyledger.vercel.app

Contract Address: 0x720B5911beb3b0930D6D5E5483fa5ccf679409E5


## Project Structure

The project is divided into three main directories:

- **/frontend**: The Next.js frontend that serves as the user interface for exploring drugs, logs, and events.
- **/hardhat**: Smart contracts written and deployed using Hardhat, handling the core blockchain logic.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v16+)
- Hardhat
- 
### Cloning the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/BridgeNode/drugLedger
```

### Frontend Setup
Navigate to the frontend directory:

```bash
cd frontend
```

### Install the dependencies:
```bash
npm install
```

### Run the development server:

```bash
npm run dev
```
The app will be running at http://localhost:3000.

### Hardhat Setup
Navigate to the hardhat directory:
```bash
cd hardhat
```

### Install the dependencies:

```bash
npm install
```
### Compile the smart contracts:

```bash
npx hardhat compile
```
### Deploy the smart contracts:

```bash
npx hardhat run scripts/deploy.js --network <your_network>
```

### Environment Variables
To configure your environment, add the necessary API keys and environment variables in the .env file:

```bash
NEXT_PUBLIC_GRAPH_URL=your-graph-url
HARDHAT_NETWORK=your-network
...etc
```

### Deployed Contracts
Contract Address on **Lisk Sepolia**: 0x720B5911beb3b0930D6D5E5483fa5ccf679409E5 

### Deployed Site
Website: https://verifyledger.vercel.app

Live Demo: 
