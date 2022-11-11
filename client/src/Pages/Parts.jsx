import React from 'react';
import Button from '../Component/Button/Button';
import Input from '../Component/Input/Input';
import Links from '../Component/Links/Links';
import Textarea from '../Component/Input/Textarea';

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
            <Input labelName="Username" htmlFor="username" placeHolder="Username" className="form-input" />
            <Input labelName="Password" htmlFor="password" inputType="password" placeHolder="Password" className="form-input" />
            <Textarea labelName="Note" htmlFor="note" rows={3} />
            <Input inputType="submit" className="form-submit" />
        </>
    );
}

export default Parts;