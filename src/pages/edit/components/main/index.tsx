import { useResumeConfigStore } from '../../../../store';
import { AboutMe } from './about-me';
import { BaseInfo } from './base-info';
import styles from './index.module.scss';
import { Introduce } from './introduce';
import { OwnProject } from './own-project';
import { WorkHistory } from './work-history';

const moduleMap = {
  introduce: <Introduce />,
  workingHistory: <WorkHistory />,
  ownerProjects: <OwnProject />,
  aboutMe: <AboutMe />,
};
export const PreviewResume = () => {
  const { resumeConfig } = useResumeConfigStore();
  const { modules } = resumeConfig.templateConfig.config;

  return (
    <div className={styles.container}>
      <div className={styles.content} id="resume-container">
        <BaseInfo />
        <div className={styles.info}>
          {modules.map(
            (item) =>
              item.visible && moduleMap[item.key as keyof typeof moduleMap]
          )}
        </div>
      </div>
    </div>
  );
};

export const PrintResume = () => {
  const { resumeConfig } = useResumeConfigStore();
  const { modules } = resumeConfig.templateConfig.config;
  return (
    <div className={styles.content}>
      <BaseInfo />
      <div className={styles.info}>
        {modules.map(
          (item) =>
            item.visible && moduleMap[item.key as keyof typeof moduleMap]
        )}
      </div>
    </div>
  );
};
