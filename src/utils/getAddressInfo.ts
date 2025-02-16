interface AddressInfo {
  localidade: string,
  estado: string,
  logradouro: string
  regiao: string
}

export const getAddressInfo = async( zipCode: number ): Promise<AddressInfo> => {
  const response = (await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)).json();
  return response;
}