import { useState } from "react";
import "./index.scss";

function FuzzyIntersection() {
    const [count1, setCount1] = useState(0);
    const [set1, setSet1] = useState([]);
    const [count2, setCount2] = useState(0);
    const [set2, setSet2] = useState([]);
    const [intersection, setIntersection] = useState([]);

    const handleSet1Change = (e) => {
        setCount1(Number(e.target.value));
    };

    const handleSet1Save = () => {
        const newSet = Array.from({ length: count1 }, (_, i) => ({
            key: i,
            value: "",
            membership: 0,
        }));
        setSet1(newSet);
    };

    const handleSet2Change = (e) => {
        setCount2(Number(e.target.value));
    };

    const handleSet2Save = () => {
        const newSet = Array.from({ length: count2 }, (_, i) => ({
            key: i,
            value: "",
            membership: 0,
        }));
        setSet2(newSet);
    };

    const handleInputChange = (setIndex, key, field, value) => {
        const newSet = [...(setIndex === 1 ? set1 : set2)];
        newSet[key][field] = value;
        if (setIndex === 1) setSet1(newSet);
        else setSet2(newSet);
    };

    const calculateIntersection = () => {
        const result = [];
        set1.forEach((item1) => {
            const match = set2.find((item2) => item2.value === item1.value);
            if (match) {
                result.push({
                    value: item1.value,
                    membership: Math.min(item1.membership, match.membership),
                });
            }
        });
        setIntersection(result);
    };

    return (
        <section id="fuzzy-intersection">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <input
                            type="number"
                            placeholder="Birinci çoxluğun element sayı"
                            onChange={handleSet1Change}
                        />
                        <button onClick={handleSet1Save}>Saxla</button>
                        {set1.map((item, index) => (
                            <div key={index} style={{ margin: "8px 0" }}>
                                <input
                                    type="text"
                                    placeholder={`Element ${index + 1}`}
                                    style={{ marginRight: "8px" }}
                                    onChange={(e) =>
                                        handleInputChange(1, item.key, "value", e.target.value)
                                    }
                                />
                                <input
                                    type="number"
                                    placeholder="Üzvlük dərəcəsi (0-1)"
                                    onChange={(e) =>
                                        handleInputChange(1, item.key, "membership", Number(e.target.value))
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    {/* İkinci çoxluq */}
                    <div className="col-6">
                        <input
                            type="number"
                            placeholder="İkinci çoxluğun element sayı"
                            onChange={handleSet2Change}
                        />
                        <button onClick={handleSet2Save}>Saxla</button>
                        {set2.map((item, index) => (
                            <div key={index} style={{ margin: "8px 0" }}>
                                <input
                                    type="text"
                                    placeholder={`Element ${index + 1}`}
                                    style={{ marginRight: "8px" }}
                                    onChange={(e) =>
                                        handleInputChange(2, item.key, "value", e.target.value)
                                    }
                                />
                                <input
                                    type="number"
                                    placeholder="Üzvlük dərəcəsi (0-1)"
                                    onChange={(e) =>
                                        handleInputChange(2, item.key, "membership", Number(e.target.value))
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" style={{ marginTop: "20px" }}>
                        <button onClick={calculateIntersection}>Kəsişməni Hesabla</button>
                        <div style={{ marginTop: "20px" }}>
                            <h3>Kəsişmə</h3>
                            {intersection.map((item, index) => (
                                <div className={"white"} key={index}>
                                    Element: {item.value}, Üzvlük: {item.membership.toFixed(2)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FuzzyIntersection;
