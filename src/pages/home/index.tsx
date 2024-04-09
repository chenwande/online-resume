import { Button } from 'antd';
import clsx from 'clsx';
import headBg from '/src/assets/images/head-bg.jpg';
import { TemplateCard } from './components/template-card';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import templateImage1 from '../../assets/images/template1.png';
import { chooseFile } from '../../utils';
import { useResumeConfigStore } from '../../store';

const templates = [
  {
    tags: ['简洁', '设计感', '程序员'],
    title: '程序员创意简洁风格简历',
    poster: templateImage1,
    id: '1',
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const { setResumeConfig } = useResumeConfigStore();

  const handleToEdit = () => {
    navigate('/edit');
  };

  const handleImportConfig = async () => {
    const files = await chooseFile({
      multiple: false,
      accept: '.json',
    });

    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const resumeConfig = JSON.parse(reader.result as string);
      setResumeConfig(resumeConfig);
      navigate('/edit');
    };
    reader.readAsText(file);
  };

  return (
    <div className={styles.index}>
      <header>
        <img src={headBg} alt="" />
        <div className={styles.content}>
          {/* <div className={styles.title}>开源的</div> */}
          <div className={styles.title}>在线简历编辑工具</div>

          <div className={styles.actions}>
            <Button
              type="primary"
              className={clsx(styles.action, styles.import)}
              onClick={handleImportConfig}
            >
              导入配置
            </Button>
            <Button
              className={clsx(styles.action, styles.github)}
              onClick={() => {
                window.open('https://github.com/');
              }}
            >
              Github
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.title}>简历模板</div>
        <div className={styles.templates}>
          {templates.map((it, i) => {
            return (
              <div className={styles.template} key={i}>
                <TemplateCard value={it} onUse={handleToEdit} />
              </div>
            );
          })}
        </div>
        <div className={styles.tip}>更多模板敬请期待...</div>
      </main>
    </div>
  );
};

export default HomePage;
