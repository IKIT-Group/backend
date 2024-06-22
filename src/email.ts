import { createTransport } from 'nodemailer';
import { Order } from './orders/orders.dto';

const smtpAddress = process.env.SMTP_ADDRESS;
const smtpPassword = process.env.SMTP_PASSWORD;

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: smtpAddress,
    pass: smtpPassword,
  },
});

const from = `Не Очень Интересно <${smtpAddress}>`;
const subject = 'Ваш заказ забронирован';
const generateCode = () => Math.floor(Math.random() * 10000).toString().padStart(4, '0');
const generateOrderText = (order: Order) => {
    let result = '';
    result += `Ваш заказ сделан: ${new Date()}\n`;
    result += `Номер вашего заказа: ${order.id}\n`;
    result += `Код подтверждения: ${generateCode()}\n`;
    return result;
};

export const sendEmail = async (order: Order) => {
    const text = generateOrderText(order);
    await transporter.sendMail({ from, to: order.email, subject, text });
}
