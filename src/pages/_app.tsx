import { trpc } from "@/utils/trpc";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default trpc.withTRPC(App);
