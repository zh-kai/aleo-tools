export function isValidAddress(address: string) {
  return /^(aleo)[a-z0-9]{59}$/.test(address);
}

export * from "./data";
