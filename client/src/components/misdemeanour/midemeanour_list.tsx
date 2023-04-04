import React, { useEffect, useState } from "react";
import { MISDEMEANOURS, Misdemeanour, MisdemeanourKind } from "../../../types/misdemeanours.types";

async function fetchMisdemeanours() {
    const response = await fetch("http://localhost:8080/api/misdemeanours/3");

    if (response.ok) {
        const data = await response.json();

        return data;
    } else {
        throw new Error(`Failed to fetch misdemeanours: ${response.status}`);
    }
}

const MisdemeanourContext = React.createContext<Misdemeanour[]>([]);

function MisdemeanourList() {
    const [misdemeanours, setMisdemeanours] = useState([]);
    const [error, setError] = useState<Error | null>(null);
    const [filter, setFilter] = useState<MisdemeanourKind | "all">("all");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchMisdemeanours();
                setMisdemeanours(data);
                setError(null);
            } catch (error) {
                setError(error as Error);
            }
        }
        fetchData();
    }, []);

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
        return (
            <tr key={misdemeanour.citizenId}>
                <td>{misdemeanour.citizenId}</td>
                <td>{misdemeanour.date}</td>
                <td>
                    {misdemeanour.misdemeanour} {getEmoji(misdemeanour.misdemeanour)}
                </td>
                <td>{getPunishment(misdemeanour.misdemeanour)}</td>
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
                <tbody>{misdemeanours.map(renderMisdemeanour)}</tbody>
            </table>
        </div>
    );
}

export default MisdemeanourList;