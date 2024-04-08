import { useTranslations } from 'next-intl';

const SettingsPage = () => {
  const t = useTranslations('Settings');
  
  return (
    <div>
        <h1>{t('title')}</h1>
    </div>
  );
}

export default SettingsPage;