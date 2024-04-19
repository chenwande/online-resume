import { Col, Input, Row, Divider, Modal, Button } from 'antd';
import { IWorkHistoryItem } from '../../../../../constants';
import { useResumeConfigStore } from '../../../../../store';
import styles from './index.module.scss';
import { OwnProjectItem } from './own-project-item';
import { WorkHistoryItem } from './work-history-item';

export const EditForm = () => {
  const { resumeConfig, setResumeData } = useResumeConfigStore();

  const {
    name,
    gender,
    age,
    city,
    phoneNumber,
    email,
    education,
    target,
    introduce,
    github,
    blog,
    aboutMe,
    workingHistory,
    projects,
  } = resumeConfig.templateConfig.data;
  const { schoolName, graduationTime, major } = education;

  const handleWorkingHistoryChange = (
    index: number,
    value: Partial<IWorkHistoryItem>
  ) => {
    workingHistory[index] = { ...workingHistory[index], ...value };
    setResumeData({ workingHistory: [...workingHistory] });
  };

  const handleAddWorkingHistory = () => {
    setResumeData({
      workingHistory: [
        ...workingHistory,
        { title: '', startTime: '', endTime: '', content: '' },
      ],
    });
  };

  const handleWorkingHistoryDelete = (index: number) => {
    Modal.confirm({
      title: '删除',
      content: '是否确认删除该工作经历？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        workingHistory.splice(index, 1);
        setResumeData({ workingHistory: [...workingHistory] });
      },
    });
  };

  const handleProjectChange = (
    index: number,
    value: { title?: string; content?: string}
  ) => {
    projects[index] = { ...projects[index], ...value };
    setResumeData({ projects: [...projects] });
  };

  const handleAddProject = () => {
    setResumeData({
      projects: [
        ...projects,
        { title: '', content: '' },
      ],
    });
  };

  const handleProjectDelete = (index: number) => {
    Modal.confirm({
      title: '删除',
      content: '是否确认删除该个人项目？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        projects.splice(index, 1);
        setResumeData({ projects: [...projects] });
      },
    });
  };
  return (
    <div className={styles.container}>
      <Divider orientation="left" orientationMargin={0}>
        基础信息
      </Divider>
      <div className={styles.baseInfo}>
        <Row gutter={16}>
          <Col span={8}>
            <Input
              placeholder="姓名"
              value={name}
              onChange={(e) => {
                setResumeData({ name: e.target.value });
              }}
            ></Input>
          </Col>
          <Col span={8}>
            <Input
              placeholder="性别"
              value={gender}
              onChange={(e) => {
                setResumeData({ gender: e.target.value });
              }}
            ></Input>
          </Col>
          <Col span={8}>
            <Input
              placeholder="年龄"
              value={age}
              onChange={(e) => {
                setResumeData({ age: e.target.value });
              }}
            ></Input>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={8}>
            <Input
              placeholder="城市"
              value={city}
              onChange={(e) => {
                setResumeData({ city: e.target.value });
              }}
            ></Input>
          </Col>
          <Col span={8}>
            <Input
              placeholder="手机号"
              value={phoneNumber}
              onChange={(e) => {
                setResumeData({ phoneNumber: e.target.value });
              }}
            ></Input>
          </Col>
          <Col span={8}>
            <Input
              placeholder="邮箱"
              value={email}
              onChange={(e) => {
                setResumeData({ email: e.target.value });
              }}
            ></Input>
          </Col>
        </Row>
      </div>
      <Divider orientation="left" orientationMargin={0}>
        求职意向
      </Divider>
      <div className={styles.profession}>
        <Input
          value={target}
          onChange={(e) => {
            setResumeData({ target: e.target.value });
          }}
        ></Input>
      </div>
      <Divider orientation="left" orientationMargin={0}>
        教育信息
      </Divider>
      <div className={styles.education}>
        <Row gutter={16}>
          <Col span={8}>
            <Input
              placeholder="学校"
              value={schoolName}
              onChange={(e) => {
                setResumeData({
                  education: { ...education, schoolName: e.target.value },
                });
              }}
            ></Input>
          </Col>
          <Col span={8}>
            <Input
              placeholder="专业"
              value={major}
              onChange={(e) => {
                setResumeData({
                  education: { ...education, major: e.target.value },
                });
              }}
            ></Input>
          </Col>
          <Col span={8}>
            <Input
              placeholder="毕业时间"
              value={graduationTime}
              onChange={(e) => {
                setResumeData({
                  education: { ...education, graduationTime: e.target.value },
                });
              }}
            ></Input>
          </Col>
        </Row>
      </div>
      <Divider orientation="left" orientationMargin={0}>
        简介
      </Divider>
      <div className={styles.introduce}>
        <Input.TextArea
          autoSize={{ minRows: 5 }}
          value={introduce}
          onChange={(e) => setResumeData({ introduce: e.target.value })}
        ></Input.TextArea>
      </div>
      <Divider orientation="left" orientationMargin={0}>
        工作经历
      </Divider>
      <div className={styles.workHistory}>
        {workingHistory.map((item, index) => (
          <WorkHistoryItem
            value={item}
            onChange={(value) => handleWorkingHistoryChange(index, value)}
            onDelete={() => handleWorkingHistoryDelete(index)}
          ></WorkHistoryItem>
        ))}
        <Button block size="large" onClick={handleAddWorkingHistory}>
          新增
        </Button>
      </div>
      <Divider orientation="left" orientationMargin={0}>
        个人项目
      </Divider>
      <div className={styles.projects}>
        {projects.map((item, index) => (
          <OwnProjectItem
            isOwnProject={true}
            value={item}
            onChange={(value) => handleProjectChange(index, value)}
            onDelete={() => handleProjectDelete(index)}
          ></OwnProjectItem>
        ))}
        <Button block size="large" onClick={handleAddProject}>
          新增
        </Button>
      </div>
      <Divider orientation="left" orientationMargin={0}>
        Github
      </Divider>
      <Input
        value={github}
        onChange={(e) => setResumeData({ github: e.target.value })}
      ></Input>
      <Divider orientation="left" orientationMargin={0}>
        个人博客
      </Divider>
      <Input
        value={blog}
        onChange={(e) => setResumeData({ blog: e.target.value })}
      ></Input>
      <Divider orientation="left" orientationMargin={0}>
        关于我
      </Divider>
      <Input.TextArea
        autoSize={{ minRows: 3 }}
        value={aboutMe}
        onChange={(e) => setResumeData({ aboutMe: e.target.value })}
      ></Input.TextArea>
    </div>
  );
};