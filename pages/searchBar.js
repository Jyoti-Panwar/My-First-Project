import JSONDATA from "../searchData.json";
import { useState } from "react";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="App">
            <div style={{width:"100%",float:"left"}}>
                <input
                    type="text"
                    placeholder="Search ..."
                    onChange={e => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>
            {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                    return val
                }
                else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.first_name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default SearchBar;