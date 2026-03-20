import { createConfig, http } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { reefChain, reefRpcTransportUrl } from './config';

export const wagmiConfig = createConfig({
  chains: [reefChain],
  connectors: [injected()],
  transports: {
    [reefChain.id]: http(reefRpcTransportUrl),
  },
});