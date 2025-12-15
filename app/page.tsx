import styles from "./home.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>
            Stay Healthy,<br /> Stay Happy.
          </h1>
          <p>
            Personalized Diet Plans, Effective Workouts, Yoga,
            BMI Calculator & Daily Health Tips — everything in one place.
          </p>
          <button className={styles.btn}>Explore Services</button>
        </div>

        <div className={styles.heroImgBox}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Healthy Lifestyle"
            fill
            className={styles.heroImage}
          />
        </div>
      </section>

      
{/* WHAT WE OFFER – MODERN DESIGN V2 */}
<section className={styles.offerModern2}>
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "40px",
    }}
  >
    What We Offer
  </h2>

  {/* Diet */}
  <div data-aos="fade-up" className={styles.featureRow}>
    <div className={styles.featureIcon}>🍏</div>
    <div className={styles.featureText}>
      <h3>Diet Plans</h3>
      <p>Personalized healthy meal plans created for you.</p>
    </div>
  </div>

  {/* Workouts */}
  <div data-aos="fade-up" data-aos-delay="150" className={styles.featureRow}>
    <div className={styles.featureIcon}>💪</div>
    <div className={styles.featureText}>
      <h3>Workouts</h3>
      <p>Daily exercise routines to stay fit and active.</p>
    </div>
  </div>

  {/* Yoga */}
  <div data-aos="fade-up" data-aos-delay="300" className={styles.featureRow}>
    <div className={styles.featureIcon}>🧘</div>
    <div className={styles.featureText}>
      <h3>Yoga</h3>
      <p>Mind and body relaxation through guided yoga.</p>
    </div>
  </div>

  {/* Consultation */}
  <div data-aos="fade-up" data-aos-delay="450" className={styles.featureRow}>
    <div className={styles.featureIcon}>⚕</div>
    <div className={styles.featureText}>
      <h3>Consultation</h3>
      <p>Get expert advice from certified health professionals.</p>
    </div>
  </div>
</section>


<section className={styles.whyWrapper}>
  <div className={styles.whySection}>
    <h2 className={styles.whyHeading}>Why Choose Us?</h2>

    <div className={styles.whyGrid}>
      <div data-aos="fade-up" className={styles.whyItem}>
        <div className={styles.whyIcon}>🎓</div>
        <h3>Expert Nutritionists</h3>
        <p>Certified professionals guiding you every step.</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="150" className={styles.whyItem}>
        <div className={styles.whyIcon}>✨</div>
        <h3>Personalized Plans</h3>
        <p>Each plan is tailored specifically for your body.</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="300" className={styles.whyItem}>
        <div className={styles.whyIcon}>⚡</div>
        <h3>Fast & Healthy Results</h3>
        <p>Visible transformation with safe and effective methods.</p>
      </div>
    </div>
  </div>
</section>



<section style={{ marginTop: "70px", textAlign: "center" }}>
  <h2 style={{ fontSize: "32px", marginBottom: "20px", fontWeight: "700" }}>
    What Our Clients Say
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "30px",
    }}
  >
    {/* CLIENT 1 */}
    <div
      className="clientCard"
      data-aos="fade-up"
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "20px",
        maxWidth: "280px",
        boxShadow: "0px 5px 20px rgba(0,0,0,0.15)",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <img
        src="https://randomuser.me/api/portraits/women/45.jpg"
        alt="User"
        style={{ width: "90px", borderRadius: "50%", marginBottom: "10px" }}
      />
      <h3 style={{ color: "#2e7d32", marginBottom: "10px" }}>Priya</h3>
      <p style={{ fontStyle: "italic" }}>
        “I lost 6 kg in just 2 months! Their diet plan really works.”
      </p>
    </div>

    {/* CLIENT 2 */}
    <div
      className="clientCard"
      data-aos="fade-up"
      data-aos-delay="150"
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "20px",
        maxWidth: "280px",
        boxShadow: "0px 5px 20px rgba(0,0,0,0.15)",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="User"
        style={{ width: "90px", borderRadius: "50%", marginBottom: "10px" }}
      />
      <h3 style={{ color: "#2e7d32", marginBottom: "10px" }}>Karthik</h3>
      <p style={{ fontStyle: "italic" }}>
        “Yoga sessions improved my sleep and reduced stress completely.”
      </p>
    </div>

    {/* CLIENT 3 */}
    <div
      className="clientCard"
      data-aos="fade-up"
      data-aos-delay="300"
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "20px",
        maxWidth: "280px",
        boxShadow: "0px 5px 20px rgba(0,0,0,0.15)",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="User"
        style={{ width: "90px", borderRadius: "50%", marginBottom: "10px" }}
      />
      <h3 style={{ color: "#2e7d32", marginBottom: "10px" }}>Sangeetha</h3>
      <p style={{ fontStyle: "italic" }}>
        “Workout routine was easy and effective. I feel energetic now!”
      </p>
    </div>
  </div>
</section>


<section
  style={{
    marginTop: "70px",
    padding: "40px",
    background: "#4caf50",
    color: "white",
    borderRadius: "20px",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
    Start Your Health Journey Today!
  </h2>
  <p style={{ marginBottom: "20px" }}>
    Join thousands of people improving their life through healthy habits.
  </p>
  <button
    style={{
      padding: "12px 30px",
      background: "white",
      color: "#4caf50",
      borderRadius: "25px",
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600"
    }}
  >
    Get Started
  </button>
</section>



    </div>
  );
}
