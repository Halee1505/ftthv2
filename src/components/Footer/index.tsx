import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <Image src="/assets/logo-white.png" alt="logo" width={180} height={180} />
        <ul>
          <li>Viettel TP. Hồ Chí Minh - chi nhánh tập đoàn Công Nghệ - Viễn Thông Quân đội.</li>
          <li>Địa chỉ: 285 Cách mạng Tháng Tám, P12, Quận 10.</li>
        </ul>
      </div>
      <div>
        <h3>Về chúng tôi</h3>
        <ul>
          <li>Thông tin chung</li>
          <li>Tầm nhìn sứ mệnh</li>
          <li>Liên hệ</li>
        </ul>
      </div>
      <details>
        <summary>
          <h3>Về chúng tôi</h3>
        </summary>
        <p>Thông tin chung</p>
        <p>Tầm nhìn sứ mệnh</p>
        <p>Liên hệ</p>
      </details>
      <div>
        <h3>Hướng dẫn</h3>
        <ul>
          <li>Đăng ký mua sản phẩm</li>
          <li>Nạp tiền</li>
          <li>Sử dụng sản phẩm</li>
          <li>Tra cứu hoá đơn</li>
        </ul>
      </div>
      <details>
        <summary>
          <h3>Hướng dẫn</h3>
        </summary>
        <p>Đăng ký mua sản phẩm</p>
        <p>Nạp tiền</p>
        <p>Sử dụng sản phẩm</p>
        <p>Tra cứu hoá đơn</p>
      </details>
      <div>
        <h3>Liên hệ</h3>
        <ul>
          <li>
            <Link href={`mailto:nguyennamtrung.viettel@gmail.com`}>nguyennamtrung.viettel@gmail.com</Link>
          </li>
          <li>
            <Link href={`tel:0966293779`}>0966.293.779</Link>
          </li>
        </ul>
      </div>
      <details>
        <summary>
          <h3>Liên hệ</h3>
        </summary>
        <p>
          <Link href={`mailto:nguyennamtrung.viettel@gmail.com`}>nguyennamtrung.viettel@gmail.com</Link>
        </p>
        <p>
          <Link href={`tel:0966293779`}>0966.293.779</Link>
        </p>
      </details>
    </footer>
  );
};

export default Footer;
