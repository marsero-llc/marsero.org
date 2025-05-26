import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './DiscussScreen.module.sass';
import { officialText, setNowPageType } from '../../../public/staticInfo';

const DiscussScreen: React.FC<{ setNowPage: setNowPageType }> = ({ setNowPage }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, phone, email };

    try {
      const response = await fetch('https://marsero.org/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setName('');
        setPhone('');
        setEmail('');
        navigate('/thanks');
      } else {
        console.log('Ошибка при отправке заявки');
      }
    } catch (error) {
      console.log('Сервер не отвечает или недоступен');
    }
  };

  return (
    <div className={styles.body}>
      <img className={styles.marseroImg} src={'/assets/MARSERO.svg'} alt="logo" />
      <span className={styles.officialText}>{officialText}</span>
      <div className={styles.backBtn} onClick={() => {
        setNowPage('none');
        setTimeout(() => setNowPage('common'), 500);
      }}>
        <div />
        <div />
        <div />
      </div>
      <div className={styles.callBox}>
        <div className={styles.title}>
          <span>ОБРАТНЫЙ</span>
          <span>ЗВОНОК</span>
        </div>
        <div className={styles.littleTitle}>
          <span>
            <span className={styles.green}>Уникальные</span> решения.{" "}
            <span className={styles.green}>Уникальная</span> эффективность.
          </span>
        </div>
        <form onSubmit={handleSubmit} className={styles.callBox}>
          <div className={styles.callBody}>
            <input
              className={styles.input}
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={styles.send} type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiscussScreen;