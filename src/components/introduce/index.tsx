"use client";
import style from "./style.module.css";
import React from "react";

const Introduce = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className={style.overlay}>
      <div className={style.content}>
        <div className={active === 0 ? style.active : ""}>
          <strong>Danh hiệu - Giải thưởng quốc tế</strong>
          <ul>
            <li> Top 15 doanh nghiệp viễn thông phát triển nhanh nhất thế giới</li>
            <li>
              Xếp thứ 28 trên top 150 nhà mạng có giá trị nhất thế giới, với giá trị thương hiệu đạt 5,8 tỷ USD, đứng số
              1 tại Đông Nam Á và thứ 9 tại Châu Á
            </li>
            <li> Chứng nhận “Best in Test” từ Công ty đo kiểm viễn thông hàng đầu thế giới Umlaut 2020</li>
            <li>
              Giải Bạc sản phẩm viễn thông mới xuất sắc nhất của giải thưởng Kinh doanh quốc tế 2020 cho gói data siêu
              tốc ST15K
            </li>
            <li>
              Nhà cung cấp dịch vụ của năm tại các thị trường đang phát triển năm 2009 và Nhà cung cấp dịch vụ data di
              động tốt nhất Việt Nam – 2019 (Frost & Sullivan)
            </li>
            <li>
              Giải bạc hạng mục &quot;Dịch vụ khách hàng mới của năm“ trong hệ thống giải thưởng quốc tế Stevie Awards
              2014 cho Dịch vụ tổng đài tiếng dân tộc.
            </li>
          </ul>
        </div>
        <div className={active === 1 ? style.active : ""}>
          <ul>
            <li>
              Gần 120.000 trạm phát sóng 2G- 5G được lắp đặt trên toàn quốc kể cả vùng sâu, vùng xa, biên giới và hải
              đảo.
            </li>
            <li>Mạng 4G lớn nhất Việt Nam với 45.000 trạm phát sóng, độ phủ đạt 97% dân số </li>
            <li>Hạ tầng cáp quang lớn nhất Việt Nam với hơn 380.000km;</li>
            <li>
              Hạ tầng Gpon lớn nhất Việt Nam với hơn 11 triệu cổng, cung cấp tới 100% số huyện, huyện đảo gần bờ và 95%
              số xã trên toàn quốc.
            </li>
            <li>Tiên phong trong cung cấp dịch vụ 5G.</li>
          </ul>
        </div>
        <div className={active === 2 ? style.active : ""}>
          <strong>Sứ mệnh: Sáng tạo vì con người- Caring Inovator</strong>

          <p>
            Mỗi khách hàng là một con người – một cá thể riêng biệt, cần được tôn trọng, quan tâm và lắng nghe, thấu
            hiểu và phục vụ một cách riêng biệt. Liên tục đổi mới, cùng với khách hàng sáng tạo ra các sản phẩm, dịch vụ
            ngày càng hoàn hảo.
          </p>
          <strong>Giá trị cốt lõi</strong>
          <p>
            Những giá trị cốt lõi là lời cam kết của Viettel đối với khách hàng, đối tác, các nhà đầu tư, với xã hội và
            với chính bản thân chúng tôi. Những giá trị này là kim chỉ nam cho mọi hoạt động của Viettel để trở thành
            một doanh nghiệp kinh doanh sáng tạo vì con người.
          </p>
          <ol>
            <li>Thực tiễn là tiêu chuẩn kiểm nghiệm chân lý.</li>
            <li>Trưởng thành qua những thách thức và thất bại.</li>
            <li>Thích ứng nhanh là sức mạnh cạnh tranh.</li>
            <li>Sáng tạo là sức sống.</li>
            <li>Tư duy hệ thống.</li>
            <li>Kết hợp Đông - Tây.</li>
            <li>Truyền thống và cách làm người lính.</li>
            <li>Viettel là ngôi nhà chung</li>
          </ol>
        </div>
        <div className={active === 3 ? style.active : ""}>
          <ul>
            <li>
              Trở thành doanh nghiệp chủ đạo kiến tạo xã hội số tại Việt Nam, đạt doanh thu dịch vụ 100 nghìn tỷ vào năm
              2025
            </li>
            <li>Số một về thị phần di động và cố định băng rộng tại Việt Nam</li>
            <li>
              Chuyển dịch Viettel Telecom thành một doanh nghiệp viễn thông số, có dịch vụ khách hàng và trải nghiệm
              khách hàng số 1 tại Việt Nam
            </li>
            <li>
              Tiên phong về công nghệ 5G, IoT và các hạ tầng đáp ứng cơ hội phát triển trong cuộc Cách mạng công nghiệp
              4.0
            </li>
            <li>
              Hoàn thiện hệ sinh thái sản phẩm dịch vụ số, đưa tỷ trọng doanh thu dịch vụ số tương đương với các nhà
              mạng trong khu vực và trên thế giới
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className={style.list}>
          <li
            className={active === 0 ? style.active : ""}
            onClick={() => {
              setActive(0);
            }}
          >
            Danh hiệu
          </li>
          <li
            className={active === 1 ? style.active : ""}
            onClick={() => {
              setActive(1);
            }}
          >
            Thế mạnh
          </li>
          <li
            className={active === 2 ? style.active : ""}
            onClick={() => {
              setActive(2);
            }}
          >
            Sứ mệnh & giá trị
          </li>
          <li
            className={active === 3 ? style.active : ""}
            onClick={() => {
              setActive(3);
            }}
          >
            Mục tiêu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduce;
