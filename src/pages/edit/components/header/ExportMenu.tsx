import { FC } from 'react';
import jpeg from '@/assets/images/jpeg.png';
import pdf from '@/assets/images/pdf.png';
import styles from './export-menu.module.scss';
import { openExportPDFHelp } from './export-helper';
import { usePrintStore } from '../../../../store';

interface ExportMenuProps {}

export const ExportMenu: FC<ExportMenuProps> = () => {
  const setIsPrinting = usePrintStore((state) => state.setIsPrinting);

  return (
    <div className={styles.index}>
      <div
        className={styles.item}
        onClick={() => {
          setIsPrinting(true);
          requestAnimationFrame(() => {
            openExportPDFHelp();
          });
        }}
      >
        <img className={styles.icon} src={pdf} alt="" />
        <div className={styles.titleBox}>
          <div className={styles.title}>
            导出为 PDF<span>推荐</span>
          </div>
          <div className={styles.des}>适用于打印和分享</div>
        </div>
      </div>
      <div className={styles.item} onClick={() => {}}>
        <img className={styles.icon} src={jpeg} alt="" />
        <div className={styles.titleBox}>
          <div className={styles.title}>导出为图片</div>
          <div className={styles.des}>适用于分享</div>
        </div>
      </div>
    </div>
  );
};
