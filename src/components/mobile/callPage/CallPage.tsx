import { FunctionComponent, useState } from "react";
import styles from './CallPage.module.sass'
import { setNowPageType } from "../../../../public/staticInfo";
import { useNavigate } from "react-router-dom";

const CallPage: FunctionComponent<{ setNowPage: setNowPageType }> = ({ setNowPage }) => {
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
        setNowPage('none')
        setTimeout(() => setNowPage('common'), 500)
      } else {
        console.log('Ошибка при отправке заявки');
      }
    } catch (error) {
      console.log('Сервер не отвечает или недоступен');
    }
  };


  return <div className={styles.callBody}>
    <div className={styles.header}>
      <img className={styles.marseroImg} src={'/assets/MARSERO.svg'} />
      <button className={styles.closeBtn} onClick={() => {
        setNowPage('none')
        setTimeout(() => setNowPage('common'), 500)
      }}>
        <div />
        <div />
      </button>
    </div>
    <div className={styles.callBlock}>
      <span className={styles.callBigTitle}>
        ОБРАТНЫЙ<br />ЗВОНОК
      </span>
      <span className={styles.spanBlock}>
        <span className={styles.green}>Уникальные</span> решения. <span className={styles.green}>Уникальная</span> эффективность.
      </span>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder={'Имя'} type='text' />
        <input className={styles.input} placeholder={'Номер телефона'} type='tel' />
        <input className={styles.input} placeholder={'E-mail'} type='email' />
        <button className={styles.sendBtn} type="submit">Отправить</button>
      </form>
    </div>
  </div>
}
export default CallPage