import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata : Metadata = {
    title: 'Dashboard',
}

const DashboardPage = () => {
  const t = useTranslations('Dashboard');

  return (
    <div>
        <h1>{t('title')}</h1>
    </div>
  );
}

export default DashboardPage;