import { Button, Col, Input, Row } from 'antd';
import { FC } from 'react';
import styles from './index.module.scss';

interface IProps {
  isOwnProject: boolean; // 是否是自己的项目
  value: { title: string, content: string };
  onChange: (value: { title?: string, content?: string }) => void;
  onDelete: () => void;
}
export const OwnProjectItem: FC<IProps> = ({ value, onChange, onDelete, isOwnProject = false }) => {
  const { title, content } = value;
  return (
    <div className={styles.container}>
      <Row gutter={16}>
        <Col span={20}>
          <Input
            placeholder={isOwnProject ? "项目名称" : "公司名称"}
            value={title}
            onChange={(e) => onChange({ title: e.target.value })}
          ></Input>
        </Col>
        <Col>
          <Button type="primary" onClick={onDelete}>
            删除
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Input.TextArea
          placeholder={isOwnProject ? "项目介绍" : "项目经历"}
          value={content}
          autoSize={{ minRows: 5 }}
          onChange={(e) => onChange({ content: e.target.value })}
        ></Input.TextArea>
      </Row>
    </div>
  );
};
