import styles from '../css/Index.module.css';
import cx from 'classnames';

export default function Home() {
  var messages = [
    "You can never be overdressed or overeducated. - Oscar Wilde",
    "Elegance is refusal. - Coco Chanel",
    "Fashions fade, style is eternal. - Yves Saint Laurent"
  ];

  return (
    <div className={cx(styles.home)}>
      <div className={cx(styles['home-wrapper'])}>
          <div className={cx(styles['logo-wrapper'])}>
						<a href="#"><img src={process.env.BACKEND_URL + 'static/logo.png'} /></a>
            <div className={cx(styles['logo-text'])}>curaete</div> 
					</div>
          <div className={cx(styles['title-wrapper'])}>
            <div className={cx(styles.title)}>{messages[Math.floor(Math.random() * messages.length)]}</div>
          </div>
      </div>
    </div>
  )
}
