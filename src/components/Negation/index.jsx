import { useState } from "react";
import "./index.scss";

function FuzzyNegation() {
    const [count1, setCount1] = useState(0);
    const [set1, setSet1] = useState([]);
    const [negationSet, setNegationSet] = useState([]);

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

    const handleInputChange = (key, field, value) => {
        const newSet = [...set1];
        newSet[key][field] = value;
        setSet1(newSet);
    };

    const calculateNegation = () => {
        const negation = set1.map((item) => ({
            ...item,
            membership: 1 - item.membership, // Negate the membership value
        }));
        setNegationSet(negation);
    };

    return (
        <section id="fuzzy-negation">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <input
                            type="number"
                            placeholder="Çoxluğun element sayı"
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
                                        handleInputChange(item.key, "value", e.target.value)
                                    }
                                />
                                <input
                                    type="number"
                                    placeholder="Üzvlük dərəcəsi (0-1)"
                                    onChange={(e) =>
                                        handleInputChange(item.key, "membership", Number(e.target.value))
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" style={{ marginTop: "20px" }}>
                        <button onClick={calculateNegation}>İnkarı Hesabla</button>
                        <div style={{ marginTop: "20px" }}>
                            <h3>İnkar</h3>
                            {negationSet.map((item, index) => (
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

export default FuzzyNegation;
