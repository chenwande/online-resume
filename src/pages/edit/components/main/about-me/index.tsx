import { useResumeConfigStore } from '../../../../../store';
import { Title } from '../title';
import styles from './index.module.scss';

export const AboutMe = () => {
  const { resumeConfig } = useResumeConfigStore()
  const { data, config: { modules } } = resumeConfig.templateConfig;

  const title = modules.find((item) => item.key === 'aboutMe')?.name;
  return (
    <div className={styles.container}>
      <Title value={title} line />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.aboutMe.replace(/\n/g, '<br/>'),
        }}
      ></div>
    </div>
  );
};
