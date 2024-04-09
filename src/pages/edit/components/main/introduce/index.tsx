import { useResumeConfigStore } from '../../../../../store';
import { Title } from '../title';
import styles from './index.module.scss';

export const Introduce = () => {
  const { resumeConfig } = useResumeConfigStore()
  const { data, config: { modules } } = resumeConfig.templateConfig;

  const title = modules.find((item) => item.key === 'introduce')?.name;
  return (
    <div className={styles.container}>
      <Title value={title}></Title>
      <div className={styles.content}>
        {data.introduce.split('\n').map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};
