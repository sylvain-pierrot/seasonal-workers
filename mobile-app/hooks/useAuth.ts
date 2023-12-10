import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export interface ITokens {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

export function useAuth() {
  const { getItem, setItem, removeItem } = useAsyncStorage("tokens");

  const getTokens = async () => {
    const tokensStringify = await getItem();
    return tokensStringify ? (JSON.parse(tokensStringify) as ITokens) : null;
  };
  const setTokens = async (tokens: ITokens) =>
    await setItem(JSON.stringify(tokens));
  const removeTokens = async () => await removeItem();

  return { getTokens, setTokens, removeTokens };
}
