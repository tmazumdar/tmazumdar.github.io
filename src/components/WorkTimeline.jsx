import {
    ClockCircleOutlined,
    LaptopOutlined,
    RocketTwoTone,
    ToolOutlined,
} from '@ant-design/icons';
import { Card, Timeline } from 'antd';

const items = [{
    children: 'Started Freelancing',
    label: 'Jan 2024',
    color: 'green',
    dot: (
        <LaptopOutlined />
    ),
},
{
    children: 'Joined Yelp',
    label: 'August 2021',
    color: 'red',
    dot: (
        <LaptopOutlined />
    ),
},
{
    children: 'Joined MAK Consulting Group',
    label: 'June 2016',
    color: 'blue',
    dot: (
        <LaptopOutlined />
    ),
},
{
    children: 'Joined CDK Global',
    label: 'June 2012',
    color: 'black',
    dot: (
        <LaptopOutlined />
    ),
},
{
    children: 'Graduated from University of Waterloo',
    label: 'April 2012',
    dot: (
        <ToolOutlined />
    ),
},
{
    children: 'Started BASc in EE',
    label: 'September 2007',
    dot: (
        <ClockCircleOutlined />
    ),
},
{
    children: 'Moved to Canada',
    label: 'August 2007',
    dot: (
        <RocketTwoTone />
    ),
},
{
    children: 'Tutored O-level students at home',
    label: '2005-06',
    color: 'green'
},
];

var reversedItems = items.reverse();

function WorkTimeline() {
    return (
        <Card style={{ width: "65vw" }} title="My Experience">
            <Timeline
                pending="Looking for a new role.."
                reverse={true}
                mode="left"
                items={reversedItems} />
        </Card>
    );
};

export default WorkTimeline;