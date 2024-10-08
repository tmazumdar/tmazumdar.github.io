import React, { useState } from 'react';
import { Button, Card, Space } from 'antd';
import {
    FilePdfOutlined,
    FileSearchOutlined,
    FileWordOutlined,
    DownloadOutlined,
} from '@ant-design/icons';

const tabList = [
    {
        key: 'tab1',
        tab: <><FileWordOutlined /> .docx</>,
    },
    {
        key: 'tab2',
        tab: <><FilePdfOutlined /> .pdf</>,
    },
];

const contentList = {
    tab1:
        <Space>
            <Button size="small" href="https://docs.google.com/document/d/1wDzh3E8dfQIYLnjVI-D4BzAYiA4sEgYx/edit?usp=sharing&ouid=118446516302800512713&rtpof=true&sd=true">
                <FileSearchOutlined />
                View
            </Button>
            <Button size="small" href="TM-R.docx" download>
                <DownloadOutlined />
                Download
            </Button>
        </Space>,
    tab2:
        <Space>
            <Button size="small" href="https://drive.google.com/file/d/1yhvB8RX_XoUEb-1ScqmyC-Rx2m6m5h-V/view">
                <FileSearchOutlined />
                View
            </Button>
            <Button size="small" href="TM-5S2.pdf" download>
                <DownloadOutlined />
                Download
            </Button>
        </Space>,
};

function ResumeSection() {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    return (
        <Card
            title="My Resume"
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={(key) => {
                onTab1Change(key);
            }}
        >
            {contentList[activeTabKey1]}
        </Card>
    );
};

export default ResumeSection;