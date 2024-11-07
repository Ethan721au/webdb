import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./die.module.css";

export default function Die() {
  const cubeRef = useRef(null);

  // useEffect(() => {
  //   const angleArray = [
  //     [0, 0, 0],
  //     [-310, -362, -38],
  //     [-400, -320, -2],
  //     [135, -217, -88],
  //     [-224, -317, 5],
  //     [-47, -219, -81],
  //     [-133, -360, -53],
  //   ];

  //   const handleCubeClick = () => {
  //     const cube = cubeRef.current;
  //     if (cube) {
  //       // Start animation
  //       cube.style.animation = "animate 1.4s linear";

  //       // Select a random angle set
  //       const randomAngle = Math.floor(Math.random() * 6) + 1;
  //       cube.style.transform = `rotateX(${angleArray[randomAngle][0]}deg) rotateY(${angleArray[randomAngle][1]}deg) rotateZ(${angleArray[randomAngle][2]}deg)`;
  //       cube.style.transition = "1s linear";

  //       // Remove animation after it ends
  //       cube.addEventListener(
  //         "animationend",
  //         () => {
  //           cube.style.animation = "";
  //         },
  //         { once: true }
  //       );
  //     }
  //   };

  //   // Add event listener for cube click
  //   const cube = cubeRef.current;
  //   cube?.addEventListener("click", handleCubeClick);

  //   // Cleanup event listener on unmount
  //   return () => {
  //     cube?.removeEventListener("click", handleCubeClick);
  //   };
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cube} id="cube" ref={cubeRef}>
        <div className={styles.front}>
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
        </div>
        <div className={styles.back}>
          <FontAwesomeIcon
            icon={faCircle}
            className={styles.dot}
            style={{ top: "10%", left: "10%" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className={styles.dot}
            style={{ top: "10%", left: "42%" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className={styles.dot}
            style={{ top: "10%", right: "10%" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className={styles.dot}
            style={{ bottom: "10%", left: "10%" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className={styles.dot}
            style={{ bottom: "10%", left: "42%" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className={styles.dot}
            style={{ bottom: "10%", right: "10%" }}
          />
        </div>
        <div className={styles.top}>
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
        </div>
        <div className={styles.left}>
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
        </div>
        <div className={styles.right}>
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
        </div>
        <div className={styles.bottom}>
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
          <FontAwesomeIcon icon={faCircle} className={styles.dot} />
        </div>
      </div>
    </div>
  );
}
