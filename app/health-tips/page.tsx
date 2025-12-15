"use client";
import styles from "./health.module.css";
import Image from "next/image";

export default function HealthTipsPage() {
  return (
    <div className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Daily Health Tips</h1>
        <p>Simple, effective tips to keep your body and mind healthy every day.</p>
      </section>

      {/* TIPS GRID */}
      <section className={styles.tipsGrid}>

        {/* Tip 1 */}
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=70"
              alt="Healthy Eating"
              fill
              className={styles.tipImg}
            />
          </div>
          <h3>Eat More Whole Foods 🍎</h3>
          <p>Include fruits, vegetables, nuts & whole grains in your daily diet.</p>
        </div>

        {/* Tip 2 */}
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <Image
              src="https://media.istockphoto.com/id/1372307016/photo/shot-of-a-young-woman-taking-a-break-from-working-out-to-drink-water.webp?a=1&b=1&s=612x612&w=0&k=20&c=60N_09ZKluNHHL-EE1zRNF3ksdSNW8yKvlA7eSyCTcM="


              alt="Stay Hydrated"
              fill
              className={styles.tipImg}
            />
          </div>
          <h3>Stay Hydrated 💧</h3>
          <p>Drink at least 2–3 liters of water every day for better metabolism.</p>
        </div>

        {/* Tip 3 */}
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <Image
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=70"
              alt="Exercise Daily"
              fill
              className={styles.tipImg}
            />
          </div>
          <h3>Move Your Body 🏃‍♂️</h3>
          <p>Just 20 minutes of daily walking improves heart health.</p>
        </div>

        {/* Tip 4 */}
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <Image
              src="https://plus.unsplash.com/premium_photo-1682096640844-1ae5381c5580?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwc2xlZXBpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Sleep"
              fill
              className={styles.tipImg}
            />
          </div>
          <h3>Sleep 7–8 Hours 😴</h3>
          <p>Proper rest helps your body recover and reduces stress.</p>
        </div>

        {/* Tip 5 */}
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=70"
              alt="Mental Health"
              fill
              className={styles.tipImg}
            />
          </div>
          <h3>Take Care of Your Mind 🧠</h3>
          <p>Meditation & deep breathing reduce anxiety and increase focus.</p>
        </div>

        {/* Tip 6 */}
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <Image
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=70"

              alt="Avoid Junk Food"
              fill
              className={styles.tipImg}
            />
          </div>
          <h3>Avoid Processed Foods 🚫</h3>
          <p>Reduce sugar, fried items, and fast foods for long-term health.</p>
        </div>

      </section>
    </div>
  );
}
