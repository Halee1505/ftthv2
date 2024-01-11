import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "danhauloc@gmail.com",
      pass: "agekzstplfbrrpjt",
    },
  });
  let priceOption = "";
  switch (formData.get("priceOption")) {
    case "per-month":
      priceOption = "Đăng ký gói cước 1 tháng";
      break;
    case "six-month":
      priceOption = "Đăng ký gói cước 6 tháng";
      break;
    case "twelve-month":
      priceOption = "Đăng ký gói cước 12 tháng";
      break;
    default:
      priceOption = "Đăng ký gói cước 1 tháng";
      break;
  }

  const emailOption = formData.get("address")
    ? {
        from: "danhauloc@gmail.com",
        to: "linh.nguyen.halee@gmail.com",
        subject: "THÔNG TIN ĐĂNG KÝ GÓI CƯỚC TỪ WEBSITE",
        html: `<h1>Thông tin khách hàng</h1>
    <p>Tên khách hàng: ${formData.get("name")}</p>
    <p>Số điện thoại: ${formData.get("phone")}</p>
    <p>Địa chỉ: ${formData.get("address")}</p>
    <p>Ghi chú: ${formData.get("note")}</p>
    <p>Tên gói: ${formData.get("productName")}</p>
    <p>Loại đăng ký: ${priceOption}</p>
    `,
      }
    : {
        from: "danhauloc@gmail.com",
        to: "linh.nguyen.halee@gmail.com",
        subject: "YÊU CẦU TƯ VẤN TỪ WEBSITE",
        html: `<h1>Thông tin khách hàng</h1>
    <p>Tên khách hàng: ${formData.get("name")}</p>
    <p>Số điện thoại: ${formData.get("phone")}</p>
    `,
      };
  await new Promise((resolve, reject) => {
    transporter.sendMail(emailOption, function (error: any, info: any) {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });

  return NextResponse.json({ message: "Success: email was sent" });
}
