import { useTranslations } from 'next-intl';

const RootPage = () => {
  const t = useTranslations('Index');

  return (
    <>
        <h1>{t("welcome")}</h1>
    </>
  );
}

export default RootPage;