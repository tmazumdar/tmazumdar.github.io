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
            <a href="https://docs.google.com/document/d/1ePpkumoyrnXwdIs4CazE6AxKMF0ma8O-2SiPZzjyBeQ/edit?usp=sharing">
                <FileSearchOutlined />
                View
            </a>
            <a href="./files/TM-R.docx" download>
                <DownloadOutlined />
                Download
            </a>
        </Space>,
    tab2:
        <Space>
            <Button href="https://tmazumdar.github.io/resume">
                <FileSearchOutlined />
                View
            </Button>
            <Button href="./files/TM-5S2.pdf" download>
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
            style={{
                width: '100%',
            }}
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