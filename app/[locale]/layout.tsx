import "../styles/tailwind-reset.css";
import "../styles/global.css";
import 'react-datepicker/dist/react-datepicker.css';


import { Urbanist } from "next/font/google";
import { CustomProvider as RSuiteProvider } from "rsuite";
import { Toaster } from "react-hot-toast";
import { ReactQueryProvider } from "../providers/ReactQueryProvider";
import AuthGuard from "../providers/AuthGuard";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import config from "next-intl/config";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Seasonistas",
  description: "Searching for seasonal work made simple!",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <Toaster
          containerStyle={{ zIndex: 99999 }}
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <RSuiteProvider>
          <ReactQueryProvider>
            <NextIntlClientProvider messages={messages}>
              <AuthGuard>{children}</AuthGuard>
            </NextIntlClientProvider>
          </ReactQueryProvider>
        </RSuiteProvider>
      </body>
    </html>
  );
}
