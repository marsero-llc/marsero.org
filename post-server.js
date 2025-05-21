import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    const { name, phone, email } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'server', // mail, yandex и т.п.
        auth: {
            user: 'info@marsero.org',
            pass: 'mmunucqqneltufrh',
        },
    });

    const mailOptions = {
        from: 'info@marsero.org',
        to: 'info@marsero.org', // почта на которую придут заявки
        subject: 'Новая заявка с сайта MARSERO',
        text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Заявка отправлена');
    } catch (error) {
        console.error('Ошибка отправки:', error);
        res.status(500).send('Ошибка при отправке письма');
    }
});

app.listen(3001, () => console.log('Сервер слушает на :3001'));