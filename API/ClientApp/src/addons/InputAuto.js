import React, { useState } from "react";

export default function InputAuto({
  pholder,
  data,
  setData,
  onSelected
}) {
  const [suggestions, setSugesstions] = useState([]);
  const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");

  const handler = e => {
    setSugesstions(data.filter(i => i.toLowerCase().startsWith(e.target.value)));
  };

  const handleChange = e => {
    const input = e.target.value.toLowerCase();
    setIsHideSuggs(false);
    setSelectedVal(input);
  };

  const hideSuggs = value => {
    onSelected(value);
    setSelectedVal('');
    setIsHideSuggs(true);
    setData(prev => prev.filter(x => x !== value));
  };

  return (
    <div className="sugesstion-auto">
      <div className="form-control-auto">
        <input
          className="form-control"
          placeholder={pholder}
          type="search"
          value={selectedVal}
          onChange={handleChange}
          onKeyUp={handler}
        />
      </div>

      <div
        className="suggestions"
        style={{ display: isHideSuggs ? "none" : "block" }}
      >
        {suggestions.map((item, idx) => (
          <div
            key={"" + item + idx}
            onClick={() => {
              hideSuggs(item);
            }}
            style={{ paddingTop: '5px', border: '1px solid lightgray', borderRadius: '5px' }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
