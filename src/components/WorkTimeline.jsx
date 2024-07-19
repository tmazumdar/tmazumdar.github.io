import {
    ClockCircleOutlined,
    RocketTwoTone,
} from '@ant-design/icons';
import { Card, Timeline } from 'antd';
const { Item } = Timeline;

const items = [{
    children: 'Started Freelancing',
    label: 'Jan 2024',
},
{
    children: 'Started working at Yelp',
    label: '2021',
    color: 'green'
},
{
    children: 'Started working at MAK Consulting Group',
    label: '2016',
    color: 'green'
},
{
    children: 'Started work at ONE-EIGHTY CORP',
    label: 'June 2012',
    color: 'green'
},
{
    children: 'Graduated from University of Waterloo',
    label: 'April 2012',
},
{
    children: 'Started BASc in EE',
    label: '2007',
    dot: (
        <ClockCircleOutlined style={{ fontSize: '16px' }} />
    ),
},
{
    children: 'Moved to Canada',
    label: '2007',
    dot: (
        <RocketTwoTone />
    ),
},
{
    children: 'Taught O-level subjects as home tutor',
    label: '2005-06',
    color: 'green'
},
];

var reversedItems = items.reverse();

function WorkTimeline() {
    return (
        <Card style={{width:"70vw"} }>
            <Timeline
                pending="Looking for a new role.."
                reverse={true}
                mode="left"
                items={reversedItems} />
        </Card>
    );
};

export default WorkTimeline;