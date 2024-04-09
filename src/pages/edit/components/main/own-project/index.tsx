import { useResumeConfigStore } from '../../../../../store';
import { Title } from '../title';
import styles from './index.module.scss';

export const OwnProject = () => {
  const { resumeConfig } = useResumeConfigStore();
  const {
    data,
    config: { modules, blogVisible, githubVisible },
  } = resumeConfig.templateConfig;

  const title = modules.find((item) => item.key === 'ownerProjects')?.name;
  return (
    <div className={styles.container}>
      <Title value={title} line />
      {data.projects.map((item) => (
        <div className={styles.project} key={item.title}>
          <div className={styles.title}>{item.title}</div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: item.content.replace(/\n/g, '<br/>'),
            }}
          ></div>
        </div>
      ))}
      {data.blog && blogVisible && (
        <div className={styles.blog}>
          ➱ 个人博客 ：
          <a
            style={{
              textDecoration: 'underline',
            }}
            target="_blank"
            href={data.blog}
          >
            {data.blog}
          </a>
        </div>
      )}
      {data.github && githubVisible && (
        <div className={styles.github}>
          ➱ Github ：
          <a
            style={{
              textDecoration: 'underline',
            }}
            target="_blank"
            href={data.github}
          >
            {data.github}
          </a>
        </div>
      )}
    </div>
  );
};
