import { Tabs } from 'antd';
import { EditForm } from './edit-form';
import styles from './index.module.scss';
import { ModuleConfig } from './module-config';

const FORM_MENUS = [
  {
    label: '数据',
    key: 'data' as const,
    children: <EditForm />,
  },
  {
    label: '样式',
    key: 'config' as const,
    children: <ModuleConfig />,
  },
];

export const Aside = () => {
  return (
    <div className={styles.index}>
      <Tabs defaultActiveKey="1" tabPosition="left" items={FORM_MENUS} />
    </div>
  );
};
