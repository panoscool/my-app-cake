import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className="grid place-items-center pt-8">
      <div className="pb-9">
        <div className="grid place-items-center">
          <div className={styles.loader}></div>
        </div>

        <h4 className="text-center pt-6 pb-2">Loading...</h4>
        <p>Hopefully not for long :)</p>
      </div>
    </div>
  );
}
