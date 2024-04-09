import { useResumeConfigStore } from '../../../../../store';
import { Title } from '../title';
import styles from './index.module.scss';

export const WorkHistory = () => {
  const { resumeConfig } = useResumeConfigStore();
  const { data, config: { modules } } = resumeConfig.templateConfig;

  const title = modules.find((item) => item.key === 'workingHistory')?.name;

  return (
    <div className={styles.container}>
      <Title value={title} line />
      {data.workingHistory.map((item) => (
        <div className={styles.workItem} key={item.title}>
          <div className={styles.company}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.time}>
              {item.startTime} - {item.endTime}
            </span>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: item.content.replace(/\n/g, '<br/>'),
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
