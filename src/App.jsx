import {
    Layout,
    Space,
} from 'antd';
import FooterSection from './components/FooterSection.jsx';
import HeaderSection from './components/HeaderSection.jsx';
import LeftSider from './components/LeftSider.jsx';
import ResumeSection from './components/ResumeSection.jsx';
import WorkTimeline from './components/WorkTimeline.jsx';
import './App.css'

const { Content } = Layout;

function App() {

    const contentStyle = {
        textAlign: 'center',
        height: '85vh',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: 'darkgray',
    };

    const layoutStyle = {
        borderRadius: 4,
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
    };

    return (
        <Layout style={layoutStyle}>
            <LeftSider></LeftSider>
            <Layout>
                <HeaderSection></HeaderSection>
                <Content style={contentStyle}>
                    <div className="card">
                        <Space direction="vertical">
                            <ResumeSection></ResumeSection>
                            <WorkTimeline></WorkTimeline>
                        </Space>
                    </div>
                </Content>
                <FooterSection></FooterSection>
            </Layout>
        </Layout>
    )
};

export default App;
