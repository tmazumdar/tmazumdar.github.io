import { useState } from 'react';
import {
    Layout,
    Space,
} from 'antd';
import FooterSection from './components/FooterSection.jsx';
import LeftSider from './components/LeftSider.jsx';
import ResumeSection from './components/ResumeSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import WorkTimeline from './components/WorkTimeline.jsx';
import './App.css'

const { Content } = Layout;

function App() {
    const [siderCollapsed, setSiderCollapsed] = useState(false);
    const contentStyle = {
        padding: '10px',
        backgroundColor: 'darkgray',
    };

    const layoutStyle = {
        borderRadius: 4,
    };

    return (
        <Layout style={layoutStyle}>
            <LeftSider setCollapsed={setSiderCollapsed}></LeftSider>
            <Layout>
                <Content style={contentStyle}>
                    <Space direction="vertical" size="small">
                        <SkillsSection></SkillsSection>
                        <ResumeSection></ResumeSection>
                        <WorkTimeline siderCollapsed={siderCollapsed}></WorkTimeline>
                    </Space>
                </Content>
                <FooterSection></FooterSection>
            </Layout>
        </Layout>
    )
};

export default App;
