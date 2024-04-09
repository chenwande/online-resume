import { Button, Col, Input, Row } from 'antd';
import { FC } from 'react';
import { IWorkHistoryItem } from '../../../../../../constants';
import styles from './index.module.scss';

interface IProps {
  value: IWorkHistoryItem;
  onChange: (value: Partial<IWorkHistoryItem>) => void;
  onDelete: () => void;
}
export const WorkHistoryItem: FC<IProps> = ({ value, onChange, onDelete }) => {
  const { title, startTime, endTime, content } = value;
  return (
    <div className={styles.container}>
      <Row gutter={16}>
        <Col span={20}>
          <Input
            placeholder="公司名称"
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
      <Row style={{ marginTop: 8 }} align="middle">
        <Col span={9}>
          <Input
            placeholder="开始时间"
            value={startTime}
            onChange={(e) => onChange({ startTime: e.target.value })}
          ></Input>
        </Col>
        <Col
          span={2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          -
        </Col>
        <Col span={9}>
          <Input
            placeholder="结束时间"
            value={endTime}
            onChange={(e) => onChange({ endTime: e.target.value })}
          ></Input>
        </Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Input.TextArea
          placeholder="项目经历"
          value={content}
          autoSize={{ minRows: 5 }}
          onChange={(e) => onChange({ content: e.target.value })}
        ></Input.TextArea>
      </Row>
    </div>
  );
};
