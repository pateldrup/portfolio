/**
 * @typedef {Object} PlanetConfig
 * @property {string} id
 * @property {string} label
 * @property {number} size
 * @property {number} orbitRadius
 * @property {number} orbitDuration
 * @property {number} selfRotation
 * @property {number} tiltX
 * @property {number} tiltY
 * @property {number} depth
 * @property {string} color
 */

export const PLANETS = [
    {
        id: "html",
        label: "HTML",
        size: 42,
        orbitRadius: 120,
        orbitDuration: 12,
        selfRotation: 6,
        tiltX: 25,
        tiltY: 0,
        depth: 80,
        color: "#E34F26",
    },
    {
        id: "css",
        label: "CSS",
        size: 44,
        orbitRadius: 120,
        orbitDuration: 14,
        selfRotation: 7,
        tiltX: 25,
        tiltY: 120,
        depth: 80,
        color: "#1572B6",
    },
    {
        id: "react",
        label: "React",
        size: 54,
        orbitRadius: 200,
        orbitDuration: 22,
        selfRotation: 4,
        tiltX: 45,
        tiltY: 45,
        depth: 160,
        color: "#61DAFB",
    },
    {
        id: "three",
        label: "ThreeJS",
        size: 50,
        orbitRadius: 250,
        orbitDuration: 28,
        selfRotation: 8,
        tiltX: 10,
        tiltY: 220,
        depth: 120,
        color: "#000000",
        textColor: "#ffffff",
        borderColor: "#ffffff"
    },
    {
        id: "node",
        label: "Node",
        size: 48,
        orbitRadius: 180,
        orbitDuration: 18,
        selfRotation: 5,
        tiltX: 60,
        tiltY: 180,
        depth: 100,
        color: "#339933",
    },
    {
        id: "mongo",
        label: "Mongo",
        size: 46,
        orbitRadius: 220,
        orbitDuration: 25,
        selfRotation: 6,
        tiltX: 15,
        tiltY: 90,
        depth: 90,
        color: "#47A248",
    }
];
