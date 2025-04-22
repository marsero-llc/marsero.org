import styles from './Loading.module.sass'
const Loading = () => {
    return <div className={styles.load}>
        <div className={styles.container}>
            <svg className={styles.svg} viewBox={'0 0 400 400'}>
                <circle className={styles.circle} cx={200} cy={200} r={100}/>
                <circle className={styles.circle2} cx={200} cy={200} r={120}/>
                <path className={styles.m}  d={"M160 240 L160 160 L200 200 L240 160 L240 240"} />
            </svg>
        </div>
    </div>
}
export default Loading