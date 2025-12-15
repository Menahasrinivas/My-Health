"use client";
import styles from "./services.module.css";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Our Services</h1>
        <p>
          Explore our fitness, diet, yoga and health improvement programs 
          crafted for your complete wellness.
        </p>
      </section>


     {/* SERVICE GRID */}
<section className={styles.gridSection}>

  {/* Diet Plans */}
  <div className={styles.card} data-aos="fade-up">
    <div className={styles.imgWrapper}>
      <Image
        src="https://images.unsplash.com/photo-1506806732259-39c2d0268443"
        alt="Diet Plans"
        fill
        className={styles.cardImg}
      />
    </div>

    <h3>Personalized Diet Plans 🍏</h3>
    <p>Healthy and tasty custom meal plans tailored to your fitness goal.</p>
    <button className={styles.btn}>Know More</button>
  </div>

  {/* Workouts */}
  <div className={styles.card} data-aos="fade-up" data-aos-delay="150">
    <div className={styles.imgWrapper}>
      <Image
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
        alt="Workouts"
        fill
        className={styles.cardImg}
      />
    </div>

    <h3>Daily Workout Programs 💪</h3>
    <p>Strength, weight-loss, fat burn, cardio and body toning routines.</p>
    <button className={styles.btn}>Know More</button>
  </div>

  {/* Yoga */}
  <div className={styles.card} data-aos="fade-up" data-aos-delay="300">
    <div className={styles.imgWrapper}>
      <Image
        src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
        alt="Yoga"
        fill
        className={styles.cardImg}
      />
    </div>

    <h3>Yoga & Meditation 🧘</h3>
    <p>Relaxation, stress relief, breathing techniques and flexibility.</p>
    <button className={styles.btn}>Know More</button>
  </div>

  {/* Health Consultation */}
  <div className={styles.card} data-aos="fade-up" data-aos-delay="450">
    <div className={styles.imgWrapper}>
      <Image
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
        alt="Consultation"
        fill
        className={styles.cardImg}
      />
    </div>

    <h3>Health Consultation ⚕</h3>
    <p>Expert nutrition & medical guidance for healthy transformation.</p>
    <button className={styles.btn}>Know More</button>
  </div>

</section>



      {/* WHY CHOOSE SECTION */}
      <section className={styles.whySection}>
        <h2>Why Choose Our Programs?</h2>

        <div className={styles.whyGrid}>
          <div className={styles.whyBox} data-aos="zoom-in">
            <span>🎓</span>
            <h3>Certified Experts</h3>
            <p>Trainers & nutritionists with top qualifications.</p>
          </div>

          <div className={styles.whyBox} data-aos="zoom-in" data-aos-delay="150">
            <span>📈</span>
            <h3>Proven Results</h3>
            <p>Thousands of successful health transformations.</p>
          </div>

          <div className={styles.whyBox} data-aos="zoom-in" data-aos-delay="300">
            <span>✨</span>
            <h3>Personalized Plans</h3>
            <p>Every plan tailored to your unique body needs.</p>
          </div>

          <div className={styles.whyBox} data-aos="zoom-in" data-aos-delay="450">
            <span>⚡</span>
            <h3>Fast & Safe</h3>
            <p>Healthy changes without extreme diets or risks.</p>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className={styles.cta}>
        <h2>Start Your Fitness Journey Today!</h2>
        <p>Get customized diet & workout plans that actually work.</p>

        <button className={styles.ctaBtn}>Join Now</button>
      </section>

    </div>
  );
}
