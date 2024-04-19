import { FC } from 'react';
import jpeg from '@/assets/images/jpeg.png';
import pdf from '@/assets/images/pdf.png';
import styles from './export-menu.module.scss';
import { openExportPDFHelp } from './export-helper';
import { usePrintStore } from '../../../../store';
import { toBlob } from 'html-to-image'
import { message } from 'antd';
import saveAs from 'file-saver';

interface ExportMenuProps {}

export const ExportMenu: FC<ExportMenuProps> = () => {
  const setIsPrinting = usePrintStore((state) => state.setIsPrinting);

  const handleExportPNG = async () => {
    try {
      message.loading({
        key: 'exportPng',
        content: '正在导出为图片...',
      })
      const container = document.getElementById('resume-container')!

      const options = {
        type: 'image/jpeg',
        cacheBust: true,
        canvasHeight: container.clientHeight,
        canvasWidth: container.clientWidth,
      }

      // 提前调用两次避免生成空白的页面
      await toBlob(container, options)
      await toBlob(container, options)

      const data = await toBlob(container, options)
      saveAs(data!, 'resume.jpeg')
      message.destroy('exportPng')
    } catch (err: any) {
      message.error(err.message)
    }
  }

  return (
    <div className={styles.index}>
      <div
        className={styles.item}
        onClick={() => {
          setIsPrinting(true);
          requestAnimationFrame(() => {
            openExportPDFHelp();
          })
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
      <div className={styles.item} onClick={handleExportPNG}>
        <img className={styles.icon} src={jpeg} alt="" />
        <div className={styles.titleBox}>
          <div className={styles.title}>导出为图片</div>
          <div className={styles.des}>适用于分享</div>
        </div>
      </div>
    </div>
  );
};
