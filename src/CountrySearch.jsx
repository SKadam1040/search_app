import React from "react";
import { useState } from "react";
import data from "./country.json";
import "./country.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fontawesome/free-solid-svg-icons";
// import { faSearch } from "@fontawesome/free-solid-svg-icons";
// import { FaUserAlt } from "@fontawesome/free-solid-svg-icons";

const CountrySearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const currencySymbols = {
        USD: "$",
        CAD: "CA$",
        GBP: "£",
        AUD: "A$",
        EUR: "€",
        CNY: "¥",
        INR: "₹",
        JPY: "¥",
        BRL: "R$",
        RUB: "₽",
        ZAR: "R",
        SAR: "﷼",
        MXN: "$",
        KRW: "₩",
      };
    return (
        <>
            <div className="templateContainer">
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Search by Currency INR, EUR"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </div>

                <div className="template_Container">
                    {data
                        .filter((val) => {
                            if (searchTerm === "") {
                                return val;
                            } else if (
                                val.currency
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }
                        })
                        .map((val) => {
                            return (
                                <div className="template" key={val.name}>
                                    <img src={val.flag} alt={val.name} />
                                    <hr />
                                    <h3>{val.name}</h3>
                                    <p>
                                        Country : {val.country}  <br />
                                        <br />
                                        Currency : {val.currency} ({currencySymbols[val.currency]}){" "}
                                        {val.currency_sign}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default CountrySearch;