// import React from "react";
import { useDispatch } from "react-redux";
import enFlag from "../assets/banderas/en.png";
import esFlag from "../assets/banderas/es.png";
import ptFlag from "../assets/banderas/pt.png";
import { setLanguageData } from "../store/languageSlice";
import "./styles/LanguageSelector.css";
import data_en from "../languages/data_en.json";
import data_es from "../languages/data_es.json";
import data_pt from "../languages/data_pt.json";

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const handleLanguageChange = (language) => {
        let data;

        switch (language) {
            case "en":
                data = data_en;
                break;
            case "es":
                data = data_es;
                break;
            case "pt":
                data = data_pt;
                break;
            default:
                data = null;
                break;
        }

        if (data) {
            dispatch(setLanguageData(data));
        }
    };

    return (
        <div className="language-selector">
            <div className="flags">
                <img src={enFlag} alt="English" onClick={() => handleLanguageChange("en")} />
                <img src={esFlag} alt="Español" onClick={() => handleLanguageChange("es")} />
                <img src={ptFlag} alt="Português" onClick={() => handleLanguageChange("pt")} />
            </div>
        </div>
    );
};

export default LanguageSelector;
