import { useState, useEffect } from "react";
import { useTheme } from "../contexts/theme-context";

const shipImages = {
  smallShip1: "/assets/94dccb3ae38f234fbd41cd5d7ec84cc19395d22d.png",
  smallShip2: "/assets/b1357ccae769b72b3858d13b0d785c4beba08a37.png",
  smallShip3: "/assets/ba384b119a1e1ab17f35b48203c824dfd4a0b30f.png",
  smallShip4: "/assets/800c14748c27185b084bafcf2b639fe9802d4607.png",
  smallShip5: "/assets/b2bb1b0aea3714dcc4eec671d2b37c450007641c.png",
  mediumShip1: "/assets/5a6ecb1754ffbd761983a54c435ad3ea29f196ce.png",
  mediumShip2: "/assets/6e009d1dcca19422a6e9a61d4d7b37df193a1cf1.png",
  mediumShip3: "/assets/5f45076db8f28b277fface319b38b78086e0ef13.png",
  mediumShip4: "/assets/ee963286671cd896f53018b1d1363a125ab8301b.png",
  mediumShip5: "/assets/bbfe66229993da12d67a55d6dd1d92eeb925cba7.png",
  mediumShip6: "/assets/ea7887506a051cd1c06a827bf493f279a87e1007.png",
  mediumShip7: "/assets/4a2b0e55bde7c26fddd633b7199bfec793c9ea65.png",
  largeShip1: "/assets/acf6fb7b71a1d856c71dc29b20bc2f2be6b9e63b.png",
  largeShip2: "/assets/4a86ab3244cd5b6b260c44d3695d2cf6134f4207.png",
  largeShip3: "/assets/a113d076157f4563a59a72c674e091210999fc24.png",
  largeShip4: "/assets/0fd929232d403003415628a3f59c2fec424c3692.png",
  largeShip5: "/assets/beeff15d539da1afcd0e0a7669a1d5d0b8d44af6.png",
  largeShip6: "/assets/4b15769a2b50f412b3fd04dba4dc196bf124d1c6.png",
  largeShip7: "/assets/39b4480dd4bc47e90ca2860dcafac63bb7be86c6.png",
  hugeShip1: "/assets/f1f52b4ac8a378aeef03a6eeefc7284db6e49750.png",
  hugeShip2: "/assets/c4ee37e7c3f3dd8a59e513185742e89adb29f37a.png",
};

export function SpaceShipsBackground() {
  const { isDarkMode } = useTheme();
  
  // Define ships with different sizes
  // Small: 0.13 (+30%), Medium: 0.23 (+15%), Large: 0.4, Huge: 0.8
  const shipTypes: Array<{
    image: string;
    size: number;
    name: string;
  }> = [
    { image: shipImages.smallShip1, size: 0.13, name: "small1" },
    { image: shipImages.smallShip2, size: 0.13, name: "small2" },
    { image: shipImages.smallShip3, size: 0.13, name: "small3" },
    { image: shipImages.smallShip4, size: 0.13, name: "small4" },
    { image: shipImages.smallShip5, size: 0.13, name: "small5" },
    { image: shipImages.mediumShip1, size: 0.23, name: "medium1" },
    { image: shipImages.mediumShip2, size: 0.23, name: "medium2" },
    { image: shipImages.mediumShip3, size: 0.23, name: "medium3" },
    { image: shipImages.mediumShip4, size: 0.23, name: "medium4" },
    { image: shipImages.mediumShip5, size: 0.23, name: "medium5" },
    { image: shipImages.mediumShip6, size: 0.23, name: "medium6" },
    { image: shipImages.mediumShip7, size: 0.23, name: "medium7" },
    { image: shipImages.largeShip1, size: 0.4, name: "large1" },
    { image: shipImages.largeShip2, size: 0.4, name: "large2" },
    { image: shipImages.largeShip3, size: 0.4, name: "large3" },
    { image: shipImages.largeShip4, size: 0.4, name: "large4" },
    { image: shipImages.largeShip5, size: 0.4, name: "large5" },
    { image: shipImages.largeShip6, size: 0.4, name: "large6" },
    { image: shipImages.largeShip7, size: 0.4, name: "large7" },
    { image: shipImages.hugeShip1, size: 0.8, name: "huge1" },
    { image: shipImages.hugeShip2, size: 0.8, name: "huge2" },
  ];

  const [activeShips, setActiveShips] = useState<
    Array<{
      id: string;
      shipType: (typeof shipTypes)[0];
      yPosition: number;
      timestamp: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    // Only run animation if there are ships available
    if (shipTypes.length === 0) {
      return;
    }

    let shipCounter = 0;
    const recentShips: string[] = [];

    // Function to get weighted random ship based on size category
    const getWeightedRandomShip = () => {
      // Create weighted array based on frequencies:
      // Small: 100 (most frequent)
      // Medium: 80 (20% less than small)
      // Large: 56 (30% less than medium: 80 * 0.7)
      // Huge: 34 (40% less than large: 56 * 0.6)

      const weightedPool: typeof shipTypes = [];

      shipTypes.forEach((ship) => {
        let weight = 1;
        if (ship.size === 0.13)
          weight = 100; // Small
        else if (ship.size === 0.23)
          weight = 80; // Medium
        else if (ship.size === 0.4)
          weight = 56; // Large
        else if (ship.size === 0.8) weight = 34; // Huge

        // Add ship to pool multiple times based on weight
        for (let i = 0; i < weight; i++) {
          weightedPool.push(ship);
        }
      });

      // Get random ship from weighted pool
      let selectedShip =
        weightedPool[
          Math.floor(Math.random() * weightedPool.length)
        ];

      // Avoid repeating same ship type too often (max 2 times in last 5 ships)
      let attempts = 0;
      while (
        recentShips.filter((name) => name === selectedShip.name)
          .length >= 2 &&
        attempts < 20
      ) {
        selectedShip =
          weightedPool[
            Math.floor(Math.random() * weightedPool.length)
          ];
        attempts++;
      }

      // Track recent ships
      recentShips.push(selectedShip.name);
      if (recentShips.length > 5) {
        recentShips.shift();
      }

      return selectedShip;
    };

    // Launch ships with reduced frequency (every 2.03 seconds - 30% less frequent)
    const interval = setInterval(() => {
      const randomShipType = getWeightedRandomShip();
      const randomYPosition = 10 + Math.random() * 21; // Random Y between 10% and 31% (narrower zone)
      const randomDuration = 15 + Math.random() * 35; // Random duration between 15 and 50 seconds (wide speed range)

      const newShip = {
        id: `ship-${shipCounter++}`,
        shipType: randomShipType,
        yPosition: randomYPosition,
        timestamp: Date.now(),
        duration: randomDuration,
      };

      setActiveShips((prev) => [...prev, newShip]);

      // Remove ship after animation completes (use the actual duration)
      setTimeout(() => {
        setActiveShips((prev) =>
          prev.filter((s) => s.id !== newShip.id),
        );
      }, randomDuration * 1000);
    }, 2028);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -top-50 pb-24 -z-1000">
      {activeShips.map((ship) => (
        <div
          key={ship.id}
          className="absolute"
          style={{
            top: `calc(${ship.yPosition}% + 340px)`,
            left: "-400px",
            animation: `flyAcross ${ship.duration}s linear forwards`,
          }}
        >
          <div className="relative">
            {/* Shadow for all ships - realistic physics simulation */}
            {(() => {
              // Normalize height: 0 (lowest at 31%) to 1 (highest at 10%)
              const heightFactor = (31 - ship.yPosition) / 21;
              
              // DISTANCE: Higher ships cast shadows further away
              // Low (31%): -40px, High (10%): -200px
              const shadowDistance = -40 - heightFactor * 160;
              
              // BLUR: Higher ships have more diffused shadows (light spreads more)
              // Low (31%): 8px (sharp), High (10%): 35px (very diffused)
              const blurAmount = 8 + heightFactor * 27;
              
              // SIZE: Higher ships cast larger shadows (light cone expansion)
              // Low (31%): 1.0x, High (10%): 1.7x (then multiplied by ship size)
              const shadowScale = (1.0 + heightFactor * 0.7) * ship.shipType.size;
              
              // OPACITY: Higher ships cast weaker shadows (more light scattering)
              // Low (31%): 0.75-0.8, High (10%): 0.35-0.4
              const baseOpacity = isDarkMode ? 0.64 : 0.7;
              const opacityMultiplier = 1.0 - heightFactor * 0.5; // Range: 1.0 to 0.5
              const shadowOpacity = baseOpacity * opacityMultiplier;
              
              return (
                <div
                  className="absolute transition-all duration-500"
                  style={{
                    bottom: `${shadowDistance}px`,
                    left: "50%",
                    transform: `translateX(-50%) scale(${shadowScale})`,
                    width: "240px",
                    height: "40px",
                    background: isDarkMode
                      ? "radial-gradient(ellipse, rgba(50, 75, 128, 0.35) 0%, rgba(40, 60, 100, 0.18) 40%, transparent 70%)"
                      : "radial-gradient(ellipse, rgba(65, 85, 111, 0.34) 0%, rgba(78, 91, 117, 0.16) 40%, transparent 70%)",
                    filter: `blur(${blurAmount}px)`,
                    opacity: shadowOpacity,
                    pointerEvents: "none",
                  }}
                />
              );
            })()}
            {/* Ship */}
            <div
              className="relative"
              style={{
                transform: `scale(${ship.shipType.size})`,
              }}
            >
              <img
                src={ship.shipType.image}
                alt="Space Ship"
                className="w-auto h-auto object-contain"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes flyAcross {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 600px)) translateY(-30px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}