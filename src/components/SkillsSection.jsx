import { Card, Space, Tooltip } from 'antd';
import {
    AmazonOutlined,
    ConsoleSqlOutlined,
    DotNetOutlined,
    Html5Outlined,
    JavaScriptOutlined,
    PythonOutlined,
} from '@ant-design/icons';

function SkillsSection() {
    return (
        <Card title="My Skills">
            <Space>
                <Tooltip title="JavaScript, AngularJS, ReactJS">
                    <JavaScriptOutlined style={{ fontSize: "20px" }} />
                </Tooltip>
                <Tooltip title="HTML, CSS">
                    <Html5Outlined style={{ fontSize: "20px" }} />
                </Tooltip>
                <Tooltip title=".NET, C#, WCF">
                    <DotNetOutlined style={{ fontSize: "36px" }} />
                </Tooltip>
                <Tooltip title="Python">
                    <PythonOutlined style={{ fontSize: "20px" }} />
                </Tooltip>
                <Tooltip title="SQL, LINQ">
                    <ConsoleSqlOutlined style={{ fontSize: "20px" }} />
                </Tooltip>
                <Tooltip title="AWS EC2">
                    <AmazonOutlined style={{ fontSize: "20px" }} />
                </Tooltip>
            </Space>
        </Card>
    )
};

export default SkillsSection;