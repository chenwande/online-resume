import { Button, Dropdown } from 'antd';
import { useState } from 'react';
import { saveAs } from 'file-saver'
import { ExportMenu } from './ExportMenu';
import { Breadcrumb } from 'antd';
import styles from './index.module.scss';
import { useResumeConfigStore } from '../../../../store';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { resumeConfig } = useResumeConfigStore();


  const handleExportConfig = () => {
    saveAs(
      new Blob(
        [
          JSON.stringify(resumeConfig),
        ],
        { type: 'text/plain;charset=utf-8' }
      ),
      `resume.json`
    );
  };

  return (
    <header className={styles.index}>
      <div className={styles.left}>
        <Breadcrumb
          items={[
            {
              title: <a href=""> 首页 </a>,
            },
            {
              title: '编辑简历',
            },
          ]}
        />
      </div>

      <div className={styles.right}>
        <Button onClick={handleExportConfig} size="large">
          导出配置
        </Button>

        <Dropdown
          open={open}
          onOpenChange={(v) => setOpen(v)}
          overlay={<ExportMenu />}
          trigger={['click']}
        >
          <Button type="primary" size="large">
            导出简历
          </Button>
        </Dropdown>
      </div>
    </header>
  );
};
