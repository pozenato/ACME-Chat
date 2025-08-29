import React from 'react'
import { Table } from 'antd';

export default props => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Message',
          dataIndex: 'message',
          key: 'message',
        }
    ];
    
    return (
        <Table columns={columns} dataSource={props.messages} />
    );
}