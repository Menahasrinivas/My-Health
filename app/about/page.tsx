"use client";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={styles.aboutWrapper}>

      {/* MAIN SECTION – LEFT CONTENT + RIGHT IMAGE */}
      <section className={styles.aboutSection}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h1>About Us</h1>
          <p>
            We are committed to guiding you toward a healthier, happier and 
            more active lifestyle. Our team of certified nutritionists,
            fitness trainers and yoga experts work together to create personalized 
            health programs tailored for your needs.
          </p>

          <p>
            Whether your goal is weight loss, strength building or better mental 
            wellness, we provide the right support every step of the way.
          </p>

          <button className={styles.btn}>Know More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <Image
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80"
            alt="Healthy Lifestyle"
            width={500}
            height={400}
            className={styles.aboutImg}
          />
        </div>

      </section>


      {/* OUR CORE VALUES */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>

        <div className={styles.valuesGrid}>

          <div data-aos="fade-up" className={`${styles.valueCard} ${styles.pinkCard}`}>
            <div className={styles.valueIcon}>💗</div>
            <h3>Care & Support</h3>
            <p>We care deeply about your health and guide you with compassion.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className={`${styles.valueCard} ${styles.tealCard}`}>
            <div className={styles.valueIcon}>🔍</div>
            <h3>Transparency</h3>
            <p>Honest advice and realistic results — no false promises.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className={`${styles.valueCard} ${styles.orangeCard}`}>
            <div className={styles.valueIcon}>⏳</div>
            <h3>Consistency</h3>
            <p>We teach simple habits that create long-lasting health changes.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="450" className={`${styles.valueCard} ${styles.purpleCard}`}>
            <div className={styles.valueIcon}>🔥</div>
            <h3>Motivation</h3>
            <p>Daily inspiration to help you stay strong and committed.</p>
          </div>

        </div>
      </section>


     
    </div>
  );
}
