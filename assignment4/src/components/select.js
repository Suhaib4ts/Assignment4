function Select({ options, label, value, onChange }) {
    return (
        <div>
            <label><b>{label}</b></label>
            <select value={value} onChange={onChange} className="selectBox">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>);
};

export default Select;