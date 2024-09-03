import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#mealplans">Meal Plans</a></li>
          <li><a href="#howitworks">How It Works</a></li>
          <li><a href="#halalpromise">Our Halal Promise</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/hero-image.png"
          alt="Fresh Halal Meal Kits"
          width={800}
          height={400}
          priority
        />
        <h1>Certified Halal Meal Kits Delivered to Your Door</h1>
        <p>Choose from a variety of delicious, halal-certified meals.</p>
      </section>

      {/* Meal Plans Section */}
      <section id="mealplans" className={styles.mealPlans}>
        <h2>Our Meal Plans</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Family Plan</h3>
            <p>Delicious meals for the whole family.</p>
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <div className={styles.card}>
            <h3>Couples Plan</h3>
            <p>Perfect for two, halal-certified.</p>
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <div className={styles.card}>
            <h3>Individual Plan</h3>
            <p>Single servings of fresh halal meals.</p>
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Halal Promise Section */}
      <section id="halalpromise" className={styles.halalPromise}>
        <h2>Our Halal Promise</h2>
        <p>All our ingredients are certified by trusted halal authorities.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <h2>Contact Us</h2>
        <p>Email us at contact@halalharvest.com</p>
      </section>
    </main>
  );
}
