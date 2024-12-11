import { ChainId } from '@real-wagmi/sdk';
import { Address } from 'viem';

// @fixme convert to ChainId after all chains are updated
const PERMIT2_ADDRESSES = {
    [ChainId.ETHEREUM]: '0x4b5d9db7910448e2F236509D9eE242673AFa28aA',
    [ChainId.BASE]: '0x16b413526d062142eb9eDA9d75312cA9f2e418FD',
    [ChainId.ZKSYNC]: '0x87C0878B54c174199f438470FD74B3F7e1Def295',
    [ChainId.FANTOM]: '0x07Ed33a242BD9C08CA3C198e01189e35265024Da',
    [ChainId.ARBITRUM]: '0xD6EA74e1b6149195999c820706Ee249E7028Dc55',
    [ChainId.KAVA]: '0xB5fa77E3929fe198a86Aa40fd6c77886785bCd0e',
    [ChainId.OPTIMISM]: '0x127d30002C2aeDc64A5e0C4Ee2043105F58107a9',
    [ChainId.METIS]: '0xb1F795776cB9DdAC6E7e162f31C7419Dd3d48297',
    [ChainId.METIS_SEPOLIA]: '0x1Ac569879EF7EacB17CC373EF801cDcE4acCdeD5',
    [ChainId.IOTA]: '0x8d8B490fCe6Ca1A31752E7cFAFa954Bf30eB7EE2',
    [ChainId.AVALANCHE]: '0x037F7b8de425Afc8A544920Bfb0786c1Fd74E473',
    [ChainId.POLYGON]: '0x5c811Ce03C3C56790C1cF2f3068713b80AB59495',
    [ChainId.BSC]: '0x678F6b93FB0670Be8a6610795cA4896Dc217a650',
    [ChainId.SONIC_TESTNET]: '0x8B741B0D79BE80E135C880F7583d427B4D41F015',
    [ChainId.SONIC]: '0x7Ac9E324c2a211a389fac64b773433A17dB22948'
} satisfies Record<ChainId, Address>;

export const getPermit2Address = (chainId: ChainId): Address => {
    const address = PERMIT2_ADDRESSES[chainId];
    if (!address) throw new Error(`Permit2 not deployed on chain ${chainId}`);
    return address;
};

export const MaxUint48 = BigInt('0xffffffffffff');
export const MaxUint160 = BigInt('0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF');
export const MaxUint256 = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160;
export const MaxAllowanceExpiration = MaxUint48;
export const MaxOrderedNonce = MaxUint48;

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256;
export const MaxUnorderedNonce = MaxUint256;
export const MaxSigDeadline = MaxUint256;

export const PERMIT_EXPIRATION = 2592000000; // 30 day
export const PERMIT_SIG_EXPIRATION = 1800000; // 30 min

export const InstantExpiration = BigInt('0');
