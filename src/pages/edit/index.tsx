import clsx from 'clsx';
import { useEffect } from 'react';
import { usePrintStore } from '../../store';
import { Aside } from './components/aside';
import { Header } from './components/header';
import { PreviewResume, PrintResume } from './components/main';
import styles from './index.module.scss';

const Edit = () => {
  const { isPrinting, setIsPrinting } = usePrintStore();

  useEffect(() => {
    window.onbeforeprint = () => {
      setIsPrinting(true);
    };

    window.onafterprint = () => {
      setIsPrinting(false);
    };
  }, []);

  if (isPrinting) {
    return <PrintResume />;
  }

  return (
    <div className={styles.index}>
      <div className={clsx(styles.main)}>
        <Header />
        <Aside />
        <PreviewResume />
      </div>
    </div>
  );
};

export default Edit;
