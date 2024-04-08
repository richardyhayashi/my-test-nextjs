import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';
 
export default createMiddleware({
  locales,
  localePrefix: 'always',
  defaultLocale: 'jp',
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(jp|en)/:path*']
};