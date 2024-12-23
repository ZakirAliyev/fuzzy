import {useState} from "react";
import "./index.scss";

function FuzzyMaxMin() {
    const [count1, setCount1] = useState(0);
    const [set1, setSet1] = useState([]);
    const [count2, setCount2] = useState(0);
    const [set2, setSet2] = useState([]);
    const [maxmin, setMaxMin] = useState([]);

    const handleSet1Change = (e) => {
        setCount1(Number(e.target.value));
    };

    const handleSet1Save = () => {
        const newSet = Array.from({length: count1}, (_, i) => ({
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
        const newSet = Array.from({length: count2}, (_, i) => ({
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

    const calculateMaxMin = () => {
        const result = [];

        set1.forEach((item1) => {
            const rowResults = set2.map((item2) => Math.min(item1.membership, item2.membership));
            const maxResult = Math.max(...rowResults);
            result.push({
                value: item1.value,
                membership: maxResult,
            });
        });

        setMaxMin(result);
    };

    return (
        <section id="fuzzy-maxmin">
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
                            <div key={index} style={{margin: "8px 0"}}>
                                <input
                                    type="text"
                                    defaultValue={item.value}
                                    onChange={(e) => handleInputChange(1, item.key, "value", e.target.value)}
                                    style={{marginRight: "8px"}}
                                    placeholder={`Element ${index + 1}`}
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

                    <div className="col-6">
                        <input
                            type="number"
                            placeholder="İkinci çoxluğun element sayı"
                            onChange={handleSet2Change}
                        />
                        <button onClick={handleSet2Save}>Saxla</button>
                        {set2.map((item, index) => (
                            <div key={index} style={{margin: "8px 0"}}>
                                <input
                                    type="text"
                                    defaultValue={item.value}
                                    onChange={(e) => handleInputChange(2, item.key, "value", e.target.value)}
                                    style={{marginRight: "8px"}}
                                    placeholder={`Element ${index + 1}`}
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
                    <div className="col-12" style={{marginTop: "20px"}}>
                        <button onClick={calculateMaxMin}>MAX-MIN Hesabla</button>
                        <div style={{marginTop: "20px"}}>
                            <h3>MAX-MIN Nəticəsi</h3>
                            {maxmin.map((item, index) => (
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

export default FuzzyMaxMin;
