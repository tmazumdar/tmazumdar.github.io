import { Button, Card, Space, Tooltip } from 'antd';
import {
    AmazonOutlined,
    ConsoleSqlOutlined,
    DotNetOutlined,
    GithubOutlined,
    Html5Outlined,
    JavaScriptOutlined,
    PythonOutlined,
} from '@ant-design/icons';

function SkillsSection() {
    return (
        <Card title="My Skills">
            <Space size="large" wrap={true}>
                <Tooltip title="JavaScript, AngularJS, ReactJS, NodeJS">
                    <Button type="dashed" shape="circle" size="large">
                        <JavaScriptOutlined style={{ fontSize: "20px" }} />
                    </Button>
                </Tooltip>
                <Tooltip title="HTML, CSS">
                    <Button type="dashed" shape="circle" size="large">
                        <Html5Outlined style={{ fontSize: "20px" }} />
                    </Button>
                </Tooltip>
                <Tooltip title=".NET, C#, WCF, Azure DevOps">
                    <Button type="dashed" shape="circle" size="large">
                        <DotNetOutlined style={{ fontSize: "32px" }} />
                    </Button>
                </Tooltip>
                <Tooltip title="Python">
                    <Button type="dashed" shape="circle" size="large">
                        <PythonOutlined style={{ fontSize: "20px" }} />
                    </Button>
                </Tooltip>
                <Tooltip title="SQL, LINQ">
                    <Button type="dashed" shape="circle" size="large">
                        <ConsoleSqlOutlined style={{ fontSize: "20px" }} />
                    </Button>
                </Tooltip>
                <Tooltip title="AWS EC2">
                    <Button type="dashed" shape="circle" size="large">
                        <AmazonOutlined style={{ fontSize: "20px" }} />
                    </Button>
                </Tooltip>
                <Tooltip title="Git, Github Actions, Github Pages">
                    <Button type="dashed" shape="circle" size="large">
                        <GithubOutlined style={{ fontSize: "20px" }} />
                    </Button>
                </Tooltip>
            </Space>
        </Card>
    )
};

export default SkillsSection;