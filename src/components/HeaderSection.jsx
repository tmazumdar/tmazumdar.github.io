import { Layout, Space } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

function HeaderSection() {
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: 'gray',
    };
    return (
        <Header style={headerStyle}>
            <Space size="middle">
                <a href="https://github.com/tmazumdar" >
                    <GithubOutlined style={{ fontSize: "20px", color: "white" }} />
                </a>
                <a href="https://www.linkedin.com/in/tahsinmazumdar/" >
                    <LinkedinOutlined style={{ fontSize: "20px", color: "white" }} />
                </a>
            </Space>
        </Header>
    );
};

export default HeaderSection;