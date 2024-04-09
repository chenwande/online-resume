import { useResumeConfigStore } from '../../../../../store';
import styles from './index.module.scss';

export const BaseInfo = () => {
  const { resumeConfig } = useResumeConfigStore()
  const { data, config } = resumeConfig.templateConfig;
  return (
    <div className={styles.index}>
      {config.backgroundImage && (
        <div className={styles.bg}>
          <img className={styles.image} src={config.backgroundImage} alt="" />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.des}>
          <span>
            {[
              data.age,
              data.gender,
              data.city,
              data.target,
              data.phoneNumber,
              data.email,
            ]
              .filter(Boolean)
              .join(' ∕ ')}
          </span>
          <br />
          <span>{`${data.education.graduationTime} 年毕业于 ${data.education.schoolName} - ${data.education.major}`}</span>
        </div>
      </div>
    </div>
  );
};
