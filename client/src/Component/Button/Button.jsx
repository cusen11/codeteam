// Các thư viện sử dụng cho component này
import React from "react";
import PropTypes from "prop-types";
import "./style.css";

// Quy định kiểu dữ liệu cho props truyền vào
Button.propTypes = {
  // Kiểu text isRequired bắt buộc phải có
  text: PropTypes.string.isRequired,
  // Kiểu text không bắt buộc phải có
  classType: PropTypes.string,
};
// props là dử liệu được lấy từ component cha khi gọi nó vào
// VD : <Button classNumType="button-primary" text="Button Primary" /> (1)
// Vd trên thì button sẽ có class là button-primary và text hiển thị là Button Primary
function Button(props) {
  // đây là cách khai các thành phần bên trong của props ra ngoài.
  // props gọi nôm na là cái cục chứa mấy cái biến mà component cha truyền xuống
  const { text, classNumType } = props;
  return (
    // truyền dữ liệu vừa gọi trên props
    <button className={classNumType}>{text}</button>
  );
}
//export thế này thì bên ngoài gọi nó ra bằng cách <Button /> là ra gióng như (1).
export default Button;
