import Button from "./Component/Button/Button";
import Input from "./Component/Input/Input";

function App() {
  return (
    <>
      <Button classNumType="button-primary" text="Button Primary" />
      <Button classNumType="button-danger" text="Button Danger" />
      <Button classNumType="button-warning" text="Button Warning" />
      <Input labelName="Username" htmlFor="user-name" inputType="text" placeHolder="Username" className="form-control"/>
      <Input labelName="Password" htmlFor="password" inputType="password" placeHolder="Password" className="form-control"/>
      <Input inputType="submit" className="form-submit"/>
    </>
  );
}

export default App;
