import { Button, Tag } from 'antd';
import { FC } from 'react';
import styles from './index.module.scss';

interface TemplateCardProps {
  value: any;
  onUse: () => void;
}

export const TemplateCard: FC<TemplateCardProps> = ({ value, onUse }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img src={value.poster} alt="" />
        </div>
        <div className={styles.mask}>
          <div className={styles.name}>{value.name}</div>
          <div className={styles.tags}>
            {value.tags?.map((tag: string) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </div>
          <Button type="primary" onClick={onUse}>
            使用该模板
          </Button>
        </div>
      </div>
    </div>
  );
};
