"use client";
import { useState } from "react";
import styles from "./bmi.module.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBMI] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  const calculateBMI = () => {
    const w = Number(weight);
    const h = Number(height);

    if (!w || !h) return;

    const heightInMeters = h / 100;
    const bmiValue = (w / (heightInMeters * heightInMeters)).toFixed(1);

    setBMI(bmiValue);

    const numBMI = Number(bmiValue);

    if (numBMI < 18.5) setStatus("Underweight");
    else if (numBMI >= 18.5 && numBMI < 24.9) setStatus("Normal Weight");
    else if (numBMI >= 25 && numBMI < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div className={styles.wrapper}>
      
      {/* TOP TITLE */}
      <h1 className={styles.title}>BMI Calculator</h1>
      <p className={styles.subtitle}>
        Check your Body Mass Index and understand your health status.
      </p>

      {/* BMI BOX */}
      <div className={styles.card}>
        
        {/* Weight Input */}
        <div className={styles.inputGroup}>
          <label>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Height Input */}
        <div className={styles.inputGroup}>
          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button className={styles.btn} onClick={calculateBMI}>Calculate BMI</button>

        {/* RESULT */}
        {bmi && (
          <div className={styles.resultBox}>
            <h3>Your BMI: {bmi}</h3>
            <p>Status: <span className={styles.status}>{status}</span></p>
          </div>
        )}

      </div>

      {/* BMI TABLE */}
      <section className={styles.tableSection}>
        <h2>BMI Category Chart</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>BMI Range</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            <tr><td>Less than 18.5</td><td>Underweight</td></tr>
            <tr><td>18.5 – 24.9</td><td>Normal Weight</td></tr>
            <tr><td>25 – 29.9</td><td>Overweight</td></tr>
            <tr><td>30 and above</td><td>Obese</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
