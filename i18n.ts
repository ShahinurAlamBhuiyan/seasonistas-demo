import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) return notFound();

  const messages = await import(`./messages/${locale}.json`);

  return {
    messages: messages.default,
  };
});