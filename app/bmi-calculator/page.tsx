"use client";
import { useState } from "react";
import styles from "./bmi.module.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus("Normal Weight");
    else if (bmiValue >= 25 && bmiValue < 29.9) setStatus("Overweight");
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
