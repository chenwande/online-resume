import styles from './index.module.scss';
import { Col, Divider, Input, Row, Switch } from 'antd';
import { useResumeConfigStore } from '../../../../../store';
import { IModuleItem } from '../../../../../constants';
import bg1 from '../../../../../assets/images/bg1.png';
import bg2 from '../../../../../assets/images/bg2.png';
import bg3 from '../../../../../assets/images/bg3.png';
import bg4 from '../../../../../assets/images/bg4.png';
import bg5 from '../../../../../assets/images/bg5.png';
import bg6 from '../../../../../assets/images/bg6.png';
import bg7 from '../../../../../assets/images/bg7.png';
import bg8 from '../../../../../assets/images/bg8.png';
import bg9 from '../../../../../assets/images/bg9.png';
import bg10 from '../../../../../assets/images/bg10.png';
import bg11 from '../../../../../assets/images/bg11.png';

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11];

export const ModuleConfig = () => {
  const { resumeConfig, setConfig } = useResumeConfigStore();
  const { modules, backgroundImage, githubVisible, blogVisible } =
    resumeConfig.templateConfig.config;

  const handleModuleChange = (index: number, item: Partial<IModuleItem>) => {
    modules[index] = {
      ...modules[index],
      ...item,
    };
    setConfig({ modules: [...modules] });
  };
  return (
    <div className={styles.container}>
      <Divider orientation="left" orientationMargin={0}>
        模块
      </Divider>
      <div className={styles.module}>
        {modules.map((item, index) => {
          return (
            <div className={styles.moduleItem}>
              <Row gutter={24} align="middle" style={{ marginBottom: 24 }}>
                <Col span={20}>
                  <Input
                    value={item.name}
                    onChange={(e) =>
                      handleModuleChange(index, { name: e.target.value })
                    }
                  ></Input>
                </Col>
                <Col span={4}>
                  <Switch
                    defaultChecked={item.visible}
                    onChange={(v) => handleModuleChange(index, { visible: v })}
                  ></Switch>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
      <Divider orientation="left" orientationMargin={0}>
        个人博客
      </Divider>
      <Row align="middle" justify="space-between">
        <Col>是否显示个人博客地址？</Col>
        <Col>
          <Switch
            defaultChecked={blogVisible}
            onChange={(v) => setConfig({ blogVisible: v })}
          ></Switch>
        </Col>
      </Row>
      <Divider orientation="left" orientationMargin={0}>
        Github
      </Divider>
      <Row align="middle" justify="space-between">
        <Col>是否显示Github地址？</Col>
        <Col>
          <Switch
            defaultChecked={githubVisible}
            onChange={(v) => setConfig({ githubVisible: v })}
          ></Switch>
        </Col>
      </Row>
      <Divider orientation="left" orientationMargin={0}>
        背景
      </Divider>
      <div className={styles.bg}>
        <Input
          value={backgroundImage}
          onChange={(e) => setConfig({ backgroundImage: e.target.value })}
        ></Input>
        <div className={styles.imageContainer}>
          {images.map((image) => {
            return (
              <Col span={11} style={{ width: '100%' }} flex="auto" onClick={() => setConfig({ backgroundImage: image })}>
                <img src={image} alt="" />
              </Col>
            );
          })}
        </div>
      </div>
    </div>
  );
};
