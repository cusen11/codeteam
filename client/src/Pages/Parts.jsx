import React from 'react';
import Button from '../Component/Button/Button';
import Links from '../Component/Links/Links';

function Parts() {
    return (
        <>
            <Button classNumType="button-primary" text="Button Primary" />
            <Button classNumType="button-danger" text="Button Danger" />
            <Button classNumType="button-warning" text="Button Warning" />
            <Button classNumType="button-green" text="Button-Green" />
            <Button classNumType="button-gray" text="Button-Gray" />
            <br/>
            <Links classNumType="link01" href="abc.com" size="large"/>
            <Links classNumType="link02" href="abc1.com"/>
        </>
    );
}

export default Parts;