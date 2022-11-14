import React from 'react';
import PropTypes from 'prop-types';
import { CommentOutlined, FrownOutlined, HeartOutlined, MehOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

ActionPost.propTypes = {
    idPost:PropTypes.number.isRequired,
};

function ActionPost(props) {
    const { id } = props
    return (
        <>
            <Popover content="Bình luận">
                <CommentOutlined />
            </Popover>,
            <Popover content="Dễ chịu">
                <HeartOutlined />
            </Popover>,
            <Popover content="Bình thường">
                <MehOutlined />
            </Popover>,
            <Popover content="Khó tánh" >
                <FrownOutlined />
            </Popover>
        </>
    );
}

export default ActionPost;