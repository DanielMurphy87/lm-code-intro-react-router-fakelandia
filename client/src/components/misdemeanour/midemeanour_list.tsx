import React, { useEffect, useState } from "react";
import { MISDEMEANOURS, Misdemeanour, MisdemeanourKind } from "../../../types/misdemeanours.types";

type MisdemeanourResponse = {
    misdemeanours: Misdemeanour[];
};

async function fetchMisdemeanours() {
    const response = await fetch("http://localhost:8080/api/misdemeanours/13");

    if (response.ok) {
        const data = await response.json();

        return data;
    } else {
        throw new Error(`Failed to fetch misdemeanours: ${response.status}`);
    }
}

const MisdemeanourContext = React.createContext<Misdemeanour[]>([]);

function MisdemeanourList() {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [filter, setFilter] = useState<MisdemeanourKind | "all">("all");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchMisdemeanours() as MisdemeanourResponse;
                setMisdemeanours(data.misdemeanours);
                setError(null);
                console.log(misdemeanours);
            } catch (error) {
                setError(error as Error);
            }
        }
        fetchData();
    }, []);

    if (misdemeanours.length === 0) {
        return <p>Loading...</p>;
    }


    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        // Get the selected value from the event target
        const value = event.target.value;

        if (value === "all" || MISDEMEANOURS.includes(value as MisdemeanourKind)) {
            setFilter(value as MisdemeanourKind | "all");
        }
    }

    function getEmoji(misdemeanour: MisdemeanourKind) {
        switch (misdemeanour) {
            case "rudeness":
                return "🤪";
            case "lift":
                return "🗣";
            case "vegetables":
                return "🥗";
            case "united":
                return "😈";
            default:
                return "";
        }
    }

    function getPunishment(misdemeanour: MisdemeanourKind) {
        switch (misdemeanour) {
            case "rudeness":
                return "Dance in a chicken costume";
            case "lift":
                return "Sing a song in a crowded mall";
            case "vegetables":
                return "Eat a whole broccoli";
            case "united":
                return "Wear a Liverpool jersey";
            default:
                return "";
        }
    }

    function renderMisdemeanour(misdemeanour: Misdemeanour) {
        const width = Math.floor(Math.random() * 400) + 200;
        const height = Math.floor(Math.random() * 400) + 200;
        const imgUrl = `https://picsum.photos/${width}/${height}`;

        return (
            <tr key={misdemeanour.citizenId}>
                <td>{misdemeanour.citizenId}</td>
                <td>{misdemeanour.date}</td>
                <td>
                    {misdemeanour.misdemeanour} {getEmoji(misdemeanour.misdemeanour)}
                </td>
                <td>{getPunishment(misdemeanour.misdemeanour)}</td>
                <td><img src={imgUrl} alt="Random" /></td>
            </tr>
        );
    }

    return (
        <div className="misdemeanour-list">
            <h1>Fakelandian Misdemeanours</h1>
            <table>
                <thead>
                    <tr>
                        <th>Citizen ID</th>
                        <th>Date</th>
                        <th>Misdemeanour</th>
                        <th>Punishment Idea</th>
                    </tr>
                </thead>
                {misdemeanours.length > 0 ? (
                    <tbody>{misdemeanours.map(renderMisdemeanour)}</tbody>
                ) : (
                    <tbody>
                        <tr>
                            <td colSpan={4}>No misdemeanours found.</td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    );
}

export default MisdemeanourList;