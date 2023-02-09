import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import HeroCalculator from "@/components/HeroCalculator";
import styles from "@/styles/Webapp-calculator.module.css";

const WebappCalculator = () => {
  const { t } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>{`Setapps | ${t.about.pageTitle} WebApp Calculator`}</title>
        <meta name="description" content="Quote your desired Web App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeroCalculator />
      <hr className={`${styles.hr} container`} />
      <main id="main-content" className={`${styles.main} container flow`}>
        <section className="flow-normal">
          <h2 className={`${styles.title} ff-sans-title fs-600`}>
            Select the features your web app needs:
          </h2>
          <ul className={`${styles.features} flow-normal`}>
            <li className={`${styles.feature} fs-300`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              optio!
              <br />
              <select name="" id="">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo Plateu Azcapotzalco</option>
                <option value="violet">Violet</option>
              </select>
            </li>
            <li className={`${styles.feature} fs-300`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              optio!
              <br />
              <select name="" id="">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo Plateu Azcapotzalco</option>
                <option value="violet">Violet</option>
              </select>
            </li>
            <li className={`${styles.feature} fs-300`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              optio!
              <br />
              <select name="" id="">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo Plateu Azcapotzalco</option>
                <option value="violet">Violet</option>
              </select>
            </li>
            <li className={`${styles.feature} fs-300`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              optio!
              <br />
              <select name="" id="">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo Plateu Azcapotzalco</option>
                <option value="violet">Violet</option>
              </select>
            </li>
            <li className={`${styles.feature} fs-300`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              optio!
              <br />
              <select name="" id="">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo Plateu Azcapotzalco</option>
                <option value="violet">Violet</option>
              </select>
            </li>
            <li className={`${styles.feature} fs-300`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              optio!
              <br />
              <select name="" id="">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo Plateu Azcapotzalco</option>
                <option value="violet">Violet</option>
              </select>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default WebappCalculator;
