export interface Address {
  streetName: string;
  city: string;
  zipCode: number;
  houseNumber: number;
}

export function addressTotring(address: Address): string {
  return `${address.streetName}, \t ${address.houseNumber}, \t ${address.zipCode}, \t ${address.city}, \t`
}
