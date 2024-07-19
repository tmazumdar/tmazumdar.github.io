import {
    Button,
    Card,
    Flex,
    Layout,
    Space,
    Typography,
} from 'antd'
import {
    DownloadOutlined,
    FileSearchOutlined,
    GithubOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';
import HeaderComponent from './components/Header.jsx';
import LeftSider from './components/LeftSider.jsx';
import WorkTimeline from './components/WorkTimeline.jsx';
import './App.css'

const { Footer, Content } = Layout;

function App() {

    const contentStyle = {
        textAlign: 'center',
        height: '85vh',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: 'darkgray',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'gray',
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
                <HeaderComponent></HeaderComponent>
                <Content style={contentStyle}>
                    <div className="card">
                        <Space direction="vertical">
                            <Card title="My Resume">
                                <Space>
                                    <Button href="https://tmazumdar.github.io/resume">
                                        <FileSearchOutlined />
                                        View
                                    </Button>
                                    <Button href="files/TM-5S2.pdf" download>
                                        <DownloadOutlined />
                                        Download
                                    </Button>
                                </Space>
                            </Card>
                            <Card title="My Experience">
                                <Flex gap="middle" align="start" vertical>
                                    <WorkTimeline></WorkTimeline>
                                </Flex>
                            </Card>
                        </Space>
                    </div>
                </Content>
                <Footer style={footerStyle}>TM Copyright 2024</Footer>
            </Layout>
        </Layout>
    )
};

export default App;
